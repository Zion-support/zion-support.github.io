'use strict';
const fs = require('node:fs');
const path = require('node:path');
const aliases = require('../content/legacy-service-aliases.json');
const ORIGIN = 'https://ziontechgroup.com';
const CORE_ROUTES = ['/', '/services/', '/plans/', '/discovery/', '/book/', '/contact/',
  '/enterprise-ai-services/', '/why-ai-consulting-firm/', '/stripe/', '/services/ai-automation/', '/industries/', '/apps-network-showcase/'];

function writeReport(name, data, directory = 'automation/reports') {
  fs.mkdirSync(directory, {recursive: true});
  const target = path.join(directory, name + '.json');
  fs.writeFileSync(target + '.tmp', JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(target + '.tmp', target);
  return target;
}

async function probe(route, {base = ORIGIN, request = fetch} = {}) {
  let url = new URL(route, base).href;
  const origin = new URL(base).origin, visited = new Set(), chain = [];
  try {
    for (let hop = 0; hop < 6; hop++) {
      if (visited.has(url)) throw new Error('redirect_loop');
      if (new URL(url).origin !== origin) throw new Error('unexpected_external_redirect');
      visited.add(url);
      const response = await request(url, {signal: AbortSignal.timeout(20000), headers: {'User-Agent': 'Zion-Reliability/1.0'}});
      const final = response.url || url;
      chain.push({url, status: response.status, finalUrl: final});
      if (response.status !== 200) return {route, status: response.status, healthy: false, chain, error: 'http_status'};
      if (new URL(final).origin !== origin) throw new Error('unexpected_external_redirect');
      const html = await response.text();
      if (!/<(?:html|main|body)\b/i.test(html)) throw new Error('not_html');
      const refresh = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => m[0])
        .find(tag => /http-equiv\s*=\s*["']refresh["']/i.test(tag));
      if (!refresh) {
        if (/<title>\s*(?:404|page not found)/i.test(html)) throw new Error('not_found_page');
        return {route, status: 200, healthy: true, finalUrl: final, chain};
      }
      const content = refresh.match(/content\s*=\s*(["'])(.*?)\1/i)?.[2];
      const destination = content?.match(/(?:^|;)\s*url\s*=\s*([^;]+)/i)?.[1]?.trim().replace(/^["']|["']$/g, '');
      if (!destination) throw new Error('invalid_meta_refresh');
      url = new URL(destination, final).href;
    }
    throw new Error('redirect_limit');
  } catch (error) {
    return {route, status: chain.at(-1)?.status || 0, healthy: false, chain, error: error.name === 'TimeoutError' ? 'timeout' : error.message};
  }
}

async function siteReport(mode, options = {}) {
  const routes = mode === 'growth' ? [...CORE_ROUTES, ...aliases.map(a => `/services/${a.slug}/`)] : CORE_ROUTES;
  const results = [];
  for (let i = 0; i < routes.length; i += 4) results.push(...await Promise.all(routes.slice(i, i + 4).map(r => probe(r, options))));
  const unhealthy = results.filter(r => !r.healthy);
  return {generatedAt: new Date().toISOString(), scope: 'Explicit production route sample; HTTP and meta redirects followed, no whole-site coverage claim.',
    severity: unhealthy.length ? 'critical' : 'ok', checkedCount: results.length,
    unhealthyCount: unhealthy.length, unhealthyRoutes: unhealthy.map(r => r.route),
    liveUnhealthyCount: unhealthy.length, liveUnhealthyRoutes: unhealthy, results};
}

async function github(endpoint) {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  const headers = {'Accept': 'application/vnd.github+json', 'User-Agent': 'Zion-Reliability/1.0'};
  if (token) headers.Authorization = `Bearer ${token}`;
  const repo = process.env.GITHUB_REPOSITORY || 'Zion-support/zion-support.github.io';
  const response = await fetch(`https://api.github.com/repos/${repo}/${endpoint}`, {headers, signal: AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`GitHub ${endpoint.split('?')[0]}: HTTP ${response.status}`);
  return {data: await response.json(), next: /rel="next"/.test(response.headers.get('link') || '')};
}

async function suppressionReport() {
  const incidents = [];
  for (let page = 1; page <= 20; page++) {
    const {data, next} = await github(`issues?state=open&labels=automation-incident&per_page=100&page=${page}`);
    if (!Array.isArray(data)) throw new Error('Invalid GitHub issues response');
    for (const issue of data.filter(i => !i.pull_request)) {
      const labels = issue.labels.map(l => typeof l === 'string' ? l : l.name);
      incidents.push({number: issue.number, url: issue.html_url, updatedAt: issue.updated_at,
        fingerprints: labels.filter(l => l.startsWith('automation-fp-'))});
    }
    if (!next) break;
    if (page === 20) throw new Error('Incident registry pagination limit reached; no complete report written');
  }
  const groups = {};
  for (const issue of incidents) for (const fingerprint of issue.fingerprints) (groups[fingerprint] ||= []).push(issue.number);
  return {generatedAt: new Date().toISOString(), status: 'observed', mode: 'read_only',
    scope: 'Open GitHub issues labelled automation-incident. No issues are suppressed, modified or closed by this report.',
    openIncidentCount: incidents.length, incidents, duplicateFingerprints: Object.entries(groups).filter(([, ids]) => ids.length > 1).map(([fingerprint, issues]) => ({fingerprint, issues}))};
}

function radarReport(catalogFile = 'app/data/servicesData.json', publicRoot = 'public') {
  const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf8'));
  if (!Array.isArray(catalog)) throw new Error('Expected a service catalog array');
  const ids = new Set(), missing = [], aliasIds = new Set(aliases.map(a => a.slug));
  for (const service of catalog) {
    const id = service.id;
    if (typeof id !== 'string' || !/^[a-z0-9-]+$/.test(id) || ids.has(id) || aliasIds.has(id)) continue;
    ids.add(id);
    if (!fs.existsSync(path.join(publicRoot, 'services', id, 'index.html'))) missing.push({id, title: service.name || service.title || id, source: catalogFile});
  }
  return {generatedAt: new Date().toISOString(), status: 'review_required', mode: 'read_only', catalogServicesInspected: ids.size,
    missingStaticPages: missing.length, candidates: missing.slice(0,20),
    scope: 'Catalog-to-public file comparison, not live availability. Legacy generated entries require review; this report does not publish or advertise them.'};
}

async function main(mode) {
  if (mode === 'release' || mode === 'growth') {
    const report = await siteReport(mode);
    const name = mode === 'release' ? 'autonomous-release-guardian-latest' : 'autonomous-growth-signal-latest';
    writeReport(name, report);
    fs.writeFileSync(`automation/reports/${name}.md`, `# Production route check\n\nChecked: ${report.generatedAt}\n\nHealthy: ${report.checkedCount-report.unhealthyCount}/${report.checkedCount}\n\n${report.scope}\n\n` + report.results.map(r => `- ${r.route}: ${r.healthy ? 'healthy' : r.error} (HTTP ${r.status})`).join('\n') + '\n');
    console.log(`${mode}: ${report.checkedCount-report.unhealthyCount}/${report.checkedCount} healthy routes`);
    if (report.unhealthyCount) process.exitCode = 1;
  } else if (mode === 'radar') {
    const report = radarReport();
    console.log(writeReport('autonomous-opportunity-radar-latest', report));
  } else if (mode === 'suppression') {
    console.log(writeReport('incident-suppression-registry-latest', await suppressionReport()));
  } else throw new Error('Unknown report mode: ' + mode);
}
if (require.main === module) main(process.argv[2]).catch(error => {console.error(error.message); process.exitCode = 1;});
module.exports = {probe, siteReport, github, radarReport, writeReport, main};
