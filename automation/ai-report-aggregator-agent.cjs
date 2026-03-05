#!/usr/bin/env node

/**
 * AI Report Aggregator Agent
 *
 * Aggregates automation reports into a single dashboard (JSON + HTML).
 * Provides a unified view of ecosystem health, Lighthouse, content freshness,
 * site health, dependencies, and other automation outputs.
 *
 * Runs: Daily at 7 AM via cron
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const AGGREGATE_JSON = path.join(REPORTS_DIR, 'aggregate-dashboard.json');
const AGGREGATE_HTML = path.join(REPORTS_DIR, 'aggregate-dashboard.html');

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[ReportAggregator] ${ts} | ${msg}`);
}

function readJsonSafe(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    return null;
  }
  return null;
}

function collectReports() {
  const reports = {};
  const entries = [
    [path.join(REPORTS_DIR, 'health-monitor-latest.json'), 'health'],
    [path.join(REPORTS_DIR, 'lighthouse-production-latest.json'), 'lighthouse'],
    [path.join(REPORTS_DIR, 'content-freshness-latest.json'), 'contentFreshness'],
    [path.join(REPORTS_DIR, 'site-health-report.json'), 'siteHealth'],
    [path.join(REPORTS_DIR, 'dependency-report.json'), 'dependencies'],
    [path.join(REPORTS_DIR, 'dependency-outdated-latest.json'), 'dependencyOutdated'],
    [path.join(REPORTS_DIR, 'dead-code-detector-latest.json'), 'deadCode'],
    [path.join(REPORTS_DIR, 'bundle-size-monitor-latest.json'), 'bundleSize'],
    [path.join(ROOT, 'automation', 'data', 'ecosystem-suggestions.json'), 'ecosystemSuggestions'],
    [path.join(REPORTS_DIR, 'broken-link-fixer-latest-report.json'), 'brokenLinks'],
    [path.join(REPORTS_DIR, 'acia-latest-report.json'), 'continuousImprovement'],
    [path.join(REPORTS_DIR, 'test-coverage-improvement-latest.json'), 'testCoverage'],
    [path.join(REPORTS_DIR, 'seo-content-refresh-latest.json'), 'seoContentRefresh'],
    [path.join(REPORTS_DIR, 'ci-recovery-latest.json'), 'ciRecovery'],
    [path.join(REPORTS_DIR, 'code-hygiene-latest.json'), 'codeHygiene'],
    [path.join(REPORTS_DIR, 'cron-health-latest.json'), 'cronHealth'],
    [path.join(REPORTS_DIR, 'documentation-sync-latest.json'), 'documentationSync'],
    [path.join(REPORTS_DIR, 'changelog-generator-latest.json'), 'changelogGenerator'],
    [path.join(REPORTS_DIR, 'dependency-vulnerability-alert-latest.json'), 'vulnAlert'],
    [path.join(REPORTS_DIR, 'app-audit-automation-latest.json'), 'appAudit'],
    [path.join(REPORTS_DIR, 'app-audit-implementation-latest.json'), 'appAuditImplementation'],
    [path.join(REPORTS_DIR, 'app-evolution-automation-latest.json'), 'appEvolution'],
    [path.join(REPORTS_DIR, 'layout-design-audit-latest.json'), 'layoutDesignAudit'],
    [path.join(REPORTS_DIR, 'layout-design-implementation-latest.json'), 'layoutDesignImplementation'],
    [path.join(REPORTS_DIR, 'github-actions-audit-latest.json'), 'githubActionsAudit'],
    [path.join(REPORTS_DIR, 'github-actions-implementation-latest.json'), 'githubActionsImplementation'],
    [path.join(REPORTS_DIR, 'automation-audit-latest.json'), 'automationAudit'],
    [path.join(REPORTS_DIR, 'automation-self-heal-latest.json'), 'automationSelfHeal'],
    [path.join(REPORTS_DIR, 'app-improvement-orchestrator-latest.json'), 'appImprovementOrchestrator'],
    [path.join(REPORTS_DIR, 'app-evolution-ideas-latest.json'), 'appEvolutionIdeas'],
    [path.join(REPORTS_DIR, 'site-link-audit-latest.json'), 'siteLinkAudit'],
    [path.join(REPORTS_DIR, 'automation-improvements-pipeline-latest.json'), 'automationImprovements'],
    [path.join(REPORTS_DIR, 'app-evolution-audit-pipeline-latest.json'), 'appEvolutionAudit'],
    [path.join(REPORTS_DIR, 'live-site-ux-audit-latest.json'), 'liveSiteUxAudit'],
    [path.join(REPORTS_DIR, 'live-site-ux-implementation-latest.json'), 'liveSiteUxImplementation'],
  ];

  for (const [filePath, key] of entries) {
    const data = readJsonSafe(filePath);
    if (data) reports[key] = data;
  }

  return reports;
}

function buildSummary(reports) {
  const s = {
    timestamp: new Date().toISOString(),
    healthScore: null,
    lighthouseScores: null,
    staleContentCount: 0,
    siteDownCount: 0,
    vulnCount: null,
    status: 'unknown',
  };

  if (reports.health) {
    s.healthScore = reports.health.score ?? null;
  }
  if (reports.lighthouse && reports.lighthouse.categories) {
    const c = reports.lighthouse.categories;
    s.lighthouseScores = {
      performance: c.performance ? Math.round((c.performance.score ?? 0) * 100) : null,
      accessibility: c.accessibility ? Math.round((c.accessibility.score ?? 0) * 100) : null,
      bestPractices: c['best-practices'] ? Math.round((c['best-practices'].score ?? 0) * 100) : null,
      seo: c.seo ? Math.round((c.seo.score ?? 0) * 100) : null,
    };
  }
  if (reports.contentFreshness) {
    s.staleContentCount = (reports.contentFreshness.stale || []).length;
    s.warningContentCount = (reports.contentFreshness.warning || []).length;
  }
  if (reports.siteHealth && reports.siteHealth.pages) {
    const p = reports.siteHealth.pages;
    s.siteDownCount = Array.isArray(p.results) ? p.results.filter((r) => !r.ok).length : (p.failed ?? 0);
  }
  if (reports.dependencies && reports.dependencies.vulnerabilities) {
    s.vulnCount = reports.dependencies.vulnerabilities;
  }
  if (reports.testCoverage && reports.testCoverage.summary) {
    s.untestedCritical = reports.testCoverage.summary.untestedCount ?? 0;
    s.lowCoverageCritical = reports.testCoverage.summary.lowCoverageCount ?? 0;
  }
  if (reports.brokenLinks && Array.isArray(reports.brokenLinks.repeatedExternalFailures)) {
    s.repeatedExternalFailures = reports.brokenLinks.repeatedExternalFailures.length;
  }
  if (reports.dependencyOutdated && reports.dependencyOutdated.byType) {
    s.outdatedMajor = reports.dependencyOutdated.byType.major ?? 0;
    s.outdatedMinor = reports.dependencyOutdated.byType.minor ?? 0;
    s.outdatedPatch = reports.dependencyOutdated.byType.patch ?? 0;
  }
  if (reports.deadCode && reports.deadCode.summary) {
    s.unusedDeps = reports.deadCode.summary.unusedDeps ?? 0;
    s.unusedDevDeps = reports.deadCode.summary.unusedDevDeps ?? 0;
  }
  if (reports.bundleSize && reports.bundleSize.regression) {
    s.bundleRegression = reports.bundleSize.regression.percent;
  }
  if (reports.seoContentRefresh && reports.seoContentRefresh.summary) {
    s.seoRefreshCount = reports.seoContentRefresh.summary.total ?? 0;
  }
  if (reports.ciRecovery && reports.ciRecovery.status === 'needs_manual') {
    s.ciRecoveryNeeded = true;
  }
  if (reports.codeHygiene && reports.codeHygiene.status === 'needs_manual') {
    s.codeHygieneNeeded = true;
  }
  if (reports.cronHealth && reports.cronHealth.staleCount > 0) {
    s.cronStaleCount = reports.cronHealth.staleCount;
  }
  if (reports.documentationSync && reports.documentationSync.status === 'needs_update') {
    s.docsNeedsUpdate = true;
  }
  if (reports.vulnAlert && (reports.vulnAlert.critical > 0 || reports.vulnAlert.high > 0)) {
    s.vulnAlertCritical = reports.vulnAlert.critical;
    s.vulnAlertHigh = reports.vulnAlert.high;
  }
  if (reports.appAudit && reports.appAudit.summary) {
    s.appAuditSuggestions = reports.appAudit.summary.totalSuggestions ?? 0;
  }
  if (reports.layoutDesignAudit) {
    s.layoutDesignHealth = reports.layoutDesignAudit.healthScore;
    s.layoutDesignSuggestions = (reports.layoutDesignAudit.suggestions || []).length;
  }
  if (reports.appEvolution && reports.appEvolution.summary) {
    s.appEvolutionTasks = reports.appEvolution.summary.totalTasks ?? 0;
    s.appEvolutionSafeToApply = reports.appEvolution.summary.safeToApply ?? 0;
  }
  if (reports.automationAudit && reports.automationAudit.summary) {
    s.automationAuditIssues = reports.automationAudit.summary.totalIssues ?? 0;
    s.automationAuditStatus = reports.automationAudit.summary.status;
  }
  if (reports.appEvolutionIdeas && reports.appEvolutionIdeas.mergedCount) {
    s.evolutionIdeasCount = (reports.appEvolutionIdeas.mergedCount.newIdeas || 0) + (reports.appEvolutionIdeas.mergedCount.quickWins || 0) + (reports.appEvolutionIdeas.mergedCount.evolutionRoadmap || 0);
  }
  if (reports.siteLinkAudit) {
    s.siteLinkBroken = reports.siteLinkAudit.broken ?? reports.siteLinkAudit.brokenLinks?.length ?? 0;
  }
  if (reports.automationImprovements && reports.automationImprovements.summary) {
    s.automationImprovementsSuccess = reports.automationImprovements.summary.successCount ?? 0;
    s.automationImprovementsTotal = reports.automationImprovements.summary.totalSteps ?? 0;
    s.automationImprovementsFailed = (reports.automationImprovements.summary.failedSteps || []).length;
  }

  const issues = [];
  if (s.healthScore !== null && s.healthScore < 70) issues.push('low_health');
  if (s.lighthouseScores && (s.lighthouseScores.performance < 70 || s.lighthouseScores.accessibility < 90)) issues.push('lighthouse');
  if (s.staleContentCount > 5) issues.push('stale_content');
  if (s.siteDownCount > 0) issues.push('site_down');
  if (s.vulnCount !== null && s.vulnCount > 0) issues.push('vulnerabilities');
  if (s.untestedCritical > 10) issues.push('test_coverage');
  if (s.repeatedExternalFailures > 5) issues.push('repeated_external_failures');
  if (s.outdatedMajor > 5) issues.push('many_major_updates');
  if (s.unusedDeps > 10) issues.push('unused_dependencies');
  if (s.bundleRegression && parseFloat(s.bundleRegression) > 15) issues.push('bundle_regression');
  if (s.seoRefreshCount > 10) issues.push('seo_refresh_needed');
  if (s.ciRecoveryNeeded) issues.push('ci_recovery_needed');
  if (s.codeHygieneNeeded) issues.push('code_hygiene_needed');
  if (s.cronStaleCount > 3) issues.push('cron_stale');
  if (s.docsNeedsUpdate) issues.push('docs_outdated');
  if (s.vulnAlertCritical > 0 || s.vulnAlertHigh > 0) issues.push('vulnerability_alert');
  if (s.automationAuditIssues > 3) issues.push('automation_audit_issues');
  if (s.siteLinkBroken > 0) issues.push('site_link_broken');

  s.status = issues.length === 0 ? 'ok' : issues.length <= 2 ? 'warning' : 'critical';
  s.issues = issues;

  return s;
}

function generateHtml(reports, summary) {
  const rows = [];
  rows.push('<tr><th>Metric</th><th>Value</th><th>Status</th></tr>');

  if (summary.healthScore !== null) {
    const status = summary.healthScore >= 90 ? 'ok' : summary.healthScore >= 70 ? 'warn' : 'bad';
    rows.push(`<tr><td>Automation Health</td><td>${summary.healthScore}/100</td><td class="${status}">${status}</td></tr>`);
  }
  if (summary.lighthouseScores) {
    const ls = summary.lighthouseScores;
    rows.push(`<tr><td>Lighthouse Perf</td><td>${ls.performance ?? '—'}</td><td class="${(ls.performance ?? 0) >= 80 ? 'ok' : 'warn'}">${(ls.performance ?? 0) >= 80 ? 'ok' : 'warn'}</td></tr>`);
    rows.push(`<tr><td>Lighthouse A11y</td><td>${ls.accessibility ?? '—'}</td><td class="${(ls.accessibility ?? 0) >= 90 ? 'ok' : 'warn'}">${(ls.accessibility ?? 0) >= 90 ? 'ok' : 'warn'}</td></tr>`);
    rows.push(`<tr><td>Lighthouse SEO</td><td>${ls.seo ?? '—'}</td><td class="${(ls.seo ?? 0) >= 90 ? 'ok' : 'warn'}">${(ls.seo ?? 0) >= 90 ? 'ok' : 'warn'}</td></tr>`);
  }
  rows.push(`<tr><td>Stale Content</td><td>${summary.staleContentCount}</td><td class="${summary.staleContentCount === 0 ? 'ok' : 'warn'}">${summary.staleContentCount === 0 ? 'ok' : 'warn'}</td></tr>`);
  rows.push(`<tr><td>Site Down Pages</td><td>${summary.siteDownCount}</td><td class="${summary.siteDownCount === 0 ? 'ok' : 'bad'}">${summary.siteDownCount === 0 ? 'ok' : 'bad'}</td></tr>`);
  if (summary.vulnCount !== null) {
    rows.push(`<tr><td>Vulnerabilities</td><td>${summary.vulnCount}</td><td class="${summary.vulnCount === 0 ? 'ok' : 'warn'}">${summary.vulnCount === 0 ? 'ok' : 'warn'}</td></tr>`);
  }
  if (summary.untestedCritical !== undefined && summary.untestedCritical !== null) {
    const total = (summary.untestedCritical || 0) + (summary.lowCoverageCritical || 0);
    rows.push(`<tr><td>Untested/Low-Coverage Critical</td><td>${total}</td><td class="${total <= 5 ? 'ok' : total <= 15 ? 'warn' : 'bad'}">${total <= 5 ? 'ok' : total <= 15 ? 'warn' : 'bad'}</td></tr>`);
  }
  if (summary.repeatedExternalFailures !== undefined && summary.repeatedExternalFailures !== null) {
    rows.push(`<tr><td>Repeated External Link Failures</td><td>${summary.repeatedExternalFailures}</td><td class="${summary.repeatedExternalFailures <= 3 ? 'ok' : summary.repeatedExternalFailures <= 5 ? 'warn' : 'bad'}">${summary.repeatedExternalFailures <= 3 ? 'ok' : summary.repeatedExternalFailures <= 5 ? 'warn' : 'bad'}</td></tr>`);
  }
  if (summary.outdatedMajor !== undefined && summary.outdatedMajor !== null) {
    const total = (summary.outdatedMajor || 0) + (summary.outdatedMinor || 0) + (summary.outdatedPatch || 0);
    rows.push(`<tr><td>Outdated Packages (M/Min/P)</td><td>${summary.outdatedMajor || 0}/${summary.outdatedMinor || 0}/${summary.outdatedPatch || 0}</td><td class="${total <= 5 ? 'ok' : total <= 15 ? 'warn' : 'bad'}">${total <= 5 ? 'ok' : total <= 15 ? 'warn' : 'bad'}</td></tr>`);
  }
  if (summary.unusedDeps !== undefined && summary.unusedDeps !== null) {
    const total = (summary.unusedDeps || 0) + (summary.unusedDevDeps || 0);
    rows.push(`<tr><td>Unused Dependencies</td><td>${total}</td><td class="${total <= 3 ? 'ok' : total <= 8 ? 'warn' : 'bad'}">${total <= 3 ? 'ok' : total <= 8 ? 'warn' : 'bad'}</td></tr>`);
  }
  if (summary.bundleRegression !== undefined && summary.bundleRegression !== null) {
    rows.push(`<tr><td>Bundle Size Regression</td><td>+${summary.bundleRegression}%</td><td class="bad">regression</td></tr>`);
  }
  if (summary.seoRefreshCount !== undefined && summary.seoRefreshCount !== null) {
    rows.push(`<tr><td>SEO Content Refresh (stale pages)</td><td>${summary.seoRefreshCount}</td><td class="${summary.seoRefreshCount <= 5 ? 'ok' : summary.seoRefreshCount <= 10 ? 'warn' : 'bad'}">${summary.seoRefreshCount <= 5 ? 'ok' : summary.seoRefreshCount <= 10 ? 'warn' : 'bad'}</td></tr>`);
  }
  if (summary.ciRecoveryNeeded) {
    rows.push(`<tr><td>CI Recovery</td><td>Needs manual fix</td><td class="warn">warn</td></tr>`);
  }
  if (summary.docsNeedsUpdate) {
    rows.push(`<tr><td>Documentation Sync</td><td>Needs update</td><td class="warn">warn</td></tr>`);
  }
  if (summary.vulnAlertCritical > 0 || summary.vulnAlertHigh > 0) {
    rows.push(`<tr><td>Vuln Alert (C/H)</td><td>${summary.vulnAlertCritical || 0}/${summary.vulnAlertHigh || 0}</td><td class="bad">critical</td></tr>`);
  }
  if (summary.appAuditSuggestions !== undefined && summary.appAuditSuggestions !== null) {
    rows.push(`<tr><td>App Audit Suggestions</td><td>${summary.appAuditSuggestions}</td><td class="ok">info</td></tr>`);
  }
  if (summary.layoutDesignHealth !== undefined && summary.layoutDesignHealth !== null) {
    const status = summary.layoutDesignHealth >= 80 ? 'ok' : summary.layoutDesignHealth >= 60 ? 'warn' : 'bad';
    rows.push(`<tr><td>Layout Design Health</td><td>${summary.layoutDesignHealth}/100 (${summary.layoutDesignSuggestions || 0} suggestions)</td><td class="${status}">${status}</td></tr>`);
  }
  if (summary.automationAuditIssues !== undefined && summary.automationAuditIssues !== null) {
    const status = summary.automationAuditIssues === 0 ? 'ok' : summary.automationAuditIssues <= 3 ? 'warn' : 'bad';
    rows.push(`<tr><td>Automation Audit</td><td>${summary.automationAuditIssues} issues (${summary.automationAuditStatus || '—'})</td><td class="${status}">${status}</td></tr>`);
  }
  if (summary.evolutionIdeasCount !== undefined && summary.evolutionIdeasCount !== null) {
    rows.push(`<tr><td>Evolution Ideas</td><td>${summary.evolutionIdeasCount} ideas in backlog</td><td class="ok">info</td></tr>`);
  }
  if (summary.siteLinkBroken !== undefined && summary.siteLinkBroken !== null) {
    const status = summary.siteLinkBroken === 0 ? 'ok' : 'bad';
    rows.push(`<tr><td>Site Link Audit</td><td>${summary.siteLinkBroken} broken links</td><td class="${status}">${status}</td></tr>`);
  }
  if (summary.automationImprovementsTotal !== undefined && summary.automationImprovementsTotal !== null) {
    const status = summary.automationImprovementsFailed === 0 ? 'ok' : 'warn';
    rows.push(`<tr><td>Automation Improvements Pipeline</td><td>${summary.automationImprovementsSuccess}/${summary.automationImprovementsTotal} steps</td><td class="${status}">${status}</td></tr>`);
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Zion Automation Dashboard</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    h1 { color: #333; }
    table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
    th, td { padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #f5f5f5; }
    .ok { color: #0a0; }
    .warn { color: #a60; }
    .bad { color: #c00; }
    .status { display: inline-block; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 600; }
    .status.ok { background: #e8f5e9; color: #2e7d32; }
    .status.warning { background: #fff3e0; color: #e65100; }
    .status.critical { background: #ffebee; color: #c62828; }
    footer { margin-top: 2rem; font-size: 0.85rem; color: #666; }
  </style>
</head>
<body>
  <h1>Zion Automation Dashboard</h1>
  <p>Generated: ${summary.timestamp}</p>
  <p>Overall status: <span class="status ${summary.status}">${summary.status}</span></p>
  <table>
    ${rows.join('\n')}
  </table>
  <footer>Zion Tech Group • ziontechgroup.com • Automation reports aggregated by ai-report-aggregator-agent</footer>
</body>
</html>`;
}

function run() {
  log('Aggregating reports...');
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const reports = collectReports();
  const summary = buildSummary(reports);
  const payload = {
    timestamp: new Date().toISOString(),
    summary,
    reports: Object.keys(reports),
  };

  fs.writeFileSync(AGGREGATE_JSON, JSON.stringify(payload, null, 2));
  log(`Wrote ${AGGREGATE_JSON}`);

  const html = generateHtml(reports, summary);
  fs.writeFileSync(AGGREGATE_HTML, html);
  log(`Wrote ${AGGREGATE_HTML}`);

  log(`Status: ${summary.status}`);
  return payload;
}

run();
