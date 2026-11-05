// scripts/checks/ai-experiences-health.cjs
// AI Experiences Health Check: verifies AI-powered routes on the live site
// produce JSON report at automation/reports/ai-experiences-health-latest.json
// and log at automation/logs/ai-experiences-health.log
const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = process.env.SITE_BASE_URL || 'https://ziontechgroup.com';
const REPORT_DIR = path.join(process.cwd(), 'automation', 'reports');
const LOG_DIR = path.join(process.cwd(), 'automation', 'logs');

// AI experience routes to check (from smoke-routes.txt + live site)
const AI_ROUTES = [
  '/',
  '/ai-experiences',
  '/ai-agents',
  '/ai-experiments',
  '/ai-business-advisor',
  '/ai-chat-companion',
  '/ai-code',
  '/ai-dashboard',
  '/ai-expense-tracker-pro',
  '/ai-financial-advisor',
  '/ai-financial-analyzer',
  '/ai-financial-crime-detection-pro',
  '/ai-financial-forecasting',
  '/ai-financial-planner',
  '/ai-financial-services',
  '/ai-fintech',
  '/ai-fitness-coach',
  '/ai-form-builder',
  '/ai-fraud-detection',
  '/ai-consulting',
  '/ai-consulting-services',
  '/ai-content-generation-enterprise',
  '/ai-cost-optimization',
  '/ai-automation-services',
  '/free-ai-consultation',
  '/zion-ai-chatbot-playground',
  '/zion-ai-code-sandbox',
  '/zion-ai-site-evolution-simulator',
  '/robotic-process-automation',
  '/cloud-ai-services',
  '/ai-lab',
  '/ai-lab/ai-content-idea-generator',
  '/ai-lab/ai-experiment-designer',
  '/ai-lab/ai-governance-risk-advisor',
  '/ai-lab/ai-site-evolution-advisor',
  '/ai-lab/autonomous-agent-skill-orchestrator',
  '/ai-lab/autonomous-ai-experience-studio',
  '/ai-lab/autonomous-backlog-prioritizer',
  '/ai-lab/autonomous-conversion-copilot',
  '/ai-lab/autonomous-deploy-optimizer',
  '/ai-lab/autonomous-experiment-priority-engine',
  '/ai-lab/autonomous-funnel-orchestrator',
  '/ai-lab/autonomous-growth-loop-designer',
  '/ai-lab/autonomous-incident-commander',
  '/ai-lab/autonomous-media-prompt-studio',
  '/ai-lab/autonomous-opportunity-radar',
  '/ai-lab/autonomous-rag-knowledge-workspace',
  '/ai-lab/autonomous-retention-playbook',
  '/ai-lab/autonomous-revenue-forecast-studio',
  '/ai-lab/autonomous-seo-audit-agent',
  '/ai-lab/build-failure-explainer',
  '/ai-lab/deploy-drift-dashboard',
  '/ai-lab/deployment-readiness-console',
  '/ai-lab/dynamic-api-monitoring',
  '/ai-lab/idea-to-feature-blueprint',
  '/ai-lab/implementation-readiness-checker',
  '/ai-lab/roi-ops-scorecard',
  '/ai-lab/rollout-blueprint',
];

function httpGet(url, timeout = 15000, redirects = 0) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(url, { timeout, headers: { 'User-Agent': 'ZionAIHealthCheck/1.0' } }, (res) => {
      // Follow redirects (301, 302, 307, 308) up to 5 times
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 5) {
        res.resume();
        const nextUrl = new URL(res.headers.location, url).href;
        httpGet(nextUrl, timeout, redirects + 1).then(resolve);
        return;
      }
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        resolve({
          status: res.statusCode || 0,
          url: url,
          redirect: redirects > 0,
          body: body.slice(0, 5000),
          elapsed: Date.now() - start,
        });
      });
    });
    req.on('error', (e) => resolve({ status: 0, error: e.message, elapsed: Date.now() - start }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, error: 'timeout', elapsed: Date.now() - start }); });
  });
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^]+?)<\/title>/i);
  return m ? m[1].trim().slice(0, 100) : '';
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1] : '';
}

function extractH1(html) {
  const m = html.match(/<h1[^>]*>([^]+?)<\/h1>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim().slice(0, 80) : '';
}

async function main() {
  // Ensure dirs
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.mkdirSync(LOG_DIR, { recursive: true });

  const logLines = [];
  const log = (msg) => { console.log(msg); logLines.push(msg); };

  log('=' .repeat(70));
  log(`AI Experiences Health Check — ${new Date().toISOString()}`);
  log(`Base URL: ${BASE}`);
  log('=' .repeat(70));
  log('');

  const results = [];
  let okCount = 0;
  let failCount = 0;

  for (const route of AI_ROUTES) {
    const url = BASE + route;
    const resp = await httpGet(url);
    const title = resp.body ? extractTitle(resp.body) : '';
    const canonical = resp.body ? extractCanonical(resp.body) : '';
    const h1 = resp.body ? extractH1(resp.body) : '';

    const item = {
      route,
      url,
      status: resp.status,
      ok: resp.status === 200,
      redirect: resp.redirect,
      title: title.slice(0, 80),
      canonical,
      h1,
      elapsed: resp.elapsed,
      error: resp.error || null,
    };
    results.push(item);

    const mark = item.ok ? '✓' : '✗';
    const statusStr = String(resp.status || 'ERR');
    log(`${mark} [${statusStr}] ${route} (${resp.elapsed}ms)`);
    if (item.ok) {
      okCount++;
      log(`   title: ${title ? title.slice(0, 80) : '(none)'}`);
    } else {
      failCount++;
      log(`   error: ${resp.error || resp.status}`);
    }
  }

  log('');
  log('--- Summary ---');
  log(`Total routes checked: ${results.length}`);
  log(`OK (200): ${okCount}`);
  log(`Failed: ${failCount}`);
  log(`Pass rate: ${(okCount / results.length * 100).toFixed(1)}%`);

  const report = {
    check: 'ai-experiences-health',
    timestamp: new Date().toISOString(),
    baseUrl: BASE,
    summary: {
      total: results.length,
      ok: okCount,
      failed: failCount,
      passRate: parseFloat((okCount / results.length * 100).toFixed(2)),
    },
    results,
  };

  // Write JSON report
  const reportPath = path.join(REPORT_DIR, 'ai-experiences-health-latest.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`\nReport written: ${reportPath}`);

  // Write log file
  const logPath = path.join(LOG_DIR, 'ai-experiences-health.log');
  fs.writeFileSync(logPath, logLines.join('\n'));
  log(`Log written: ${logPath}`);

  // Exit code: 0 if all pass, 1 if any fail
  if (failCount > 0) {
    log(`\n❌ ${failCount} AI experience route(s) failing`);
    process.exit(1);
  } else {
    log('\n✅ All AI experience routes healthy');
    process.exit(0);
  }
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
