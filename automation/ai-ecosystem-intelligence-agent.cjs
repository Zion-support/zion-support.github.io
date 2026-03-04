#!/usr/bin/env node

/**
 * AI Ecosystem Intelligence Agent
 *
 * Analyzes the Zion Tech Group automation ecosystem and generates
 * actionable suggestions for new automations, cron jobs, and improvements.
 * Makes the ecosystem more intelligent and autonomous over time.
 *
 * Features:
 * - Scans existing agents, workflows, and cron jobs
 * - Identifies gaps and improvement opportunities
 * - Suggests new automation ideas
 * - Proposes new cron jobs
 * - Recommends agent enhancements
 * - Generates implementation-ready suggestions
 *
 * Runs: Weekly via GitHub Actions, daily via cron
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const AUTOMATION_DIR = path.join(ROOT, 'automation');
const REPORTS_DIR = path.join(AUTOMATION_DIR, 'reports');
const WORKFLOWS_DIR = path.join(ROOT, '.github', 'workflows');
const CRON_FILE = path.join(AUTOMATION_DIR, 'cron', 'automation.cron');
const REPORT_FILE = path.join(REPORTS_DIR, 'ecosystem-intelligence-latest.json');

const SUGGESTIONS_FILE = path.join(AUTOMATION_DIR, 'data', 'ecosystem-suggestions.json');

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[EcosystemIntel] ${ts} | ${msg}`);
}

function ensureDirs() {
  [REPORTS_DIR, path.join(AUTOMATION_DIR, 'data')].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

function listFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(ext));
}

function readFileSafe(p, def = '') {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return def;
  }
}

function analyzeEcosystem() {
  const agents = listFiles(AUTOMATION_DIR, '.cjs').filter((f) => f.startsWith('ai-'));
  const workflows = listFiles(WORKFLOWS_DIR, '.yml');
  const cronContent = readFileSafe(CRON_FILE);
  const packageJson = JSON.parse(readFileSafe(path.join(ROOT, 'package.json'), '{}'));
  const scripts = Object.keys(packageJson.scripts || {});

  return {
    agents: agents.length,
    agentNames: agents,
    workflows: workflows.length,
    workflowNames: workflows,
    cronJobs: (cronContent.match(/^[^#].*$/gm) || []).filter(Boolean).length,
    npmScripts: scripts.filter((s) => s.includes(':') || s.includes('ai:') || s.includes('automation:')).length,
  };
}

function generateSuggestions(analysis, cronContent = '') {
  const suggestions = [];

  // 1. Content Freshness - check if we have a content freshness agent
  if (!analysis.agentNames.some((a) => a.includes('freshness') || a.includes('content-age'))) {
    suggestions.push({
      id: 'content-freshness-agent',
      type: 'new_agent',
      priority: 'high',
      title: 'Content Freshness Agent',
      description: 'Agent that scans blog posts, case studies, and service pages for stale content (e.g. >12 months) and suggests updates or regeneration.',
      implementation: 'Create automation/ai-content-freshness-agent.cjs',
      cron: '0 4 * * 1',
      benefit: 'Keeps website content relevant and SEO-strong',
    });
  }

  // 2. Broken external links - enhance existing
  if (analysis.agentNames.some((a) => a.includes('broken-link'))) {
    suggestions.push({
      id: 'broken-link-external',
      type: 'enhancement',
      priority: 'medium',
      title: 'External Link Monitoring',
      description: 'Extend broken-link-fixer to track external link health over time and alert on repeated failures.',
      implementation: 'Add external link history to ai-broken-link-fixer.cjs',
      benefit: 'Proactive link maintenance',
    });
  }

  // 3. Test coverage agent
  if (!analysis.agentNames.some((a) => a.includes('test-coverage') || a.includes('coverage-improvement'))) {
    suggestions.push({
      id: 'test-coverage-agent',
      type: 'new_agent',
      priority: 'medium',
      title: 'Test Coverage Improvement Agent',
      description: 'Agent that identifies untested critical paths and suggests or generates tests.',
      implementation: 'Create automation/ai-test-coverage-agent.cjs',
      cron: '0 5 * * 2',
      benefit: 'Improves test coverage from current baseline',
    });
  }

  // 4. Dependency security auto-fix
  suggestions.push({
    id: 'deps-security-auto',
    type: 'cron_job',
    priority: 'high',
    title: 'Weekly Dependency Security Audit',
    description: 'Run npm audit and auto-fix low-risk vulnerabilities, report high/critical.',
    implementation: 'Add to cron: 0 3 * * 0 cd $ZION_ROOT && npm audit fix --audit-level=low',
    benefit: 'Keeps dependencies secure with minimal risk',
  });

  // 5. Sitemap sync with build
  if (!analysis.workflowNames.some((w) => w.includes('sitemap'))) {
    suggestions.push({
      id: 'sitemap-on-deploy',
      type: 'workflow',
      priority: 'medium',
      title: 'Sitemap Validation on Deploy',
      description: 'Add sitemap validation step to CI/CD pipeline before deploy.',
      implementation: 'Add npm run sitemap:validate to ci-cd.yml',
      benefit: 'Prevents broken sitemaps in production',
    });
  }

  // 6. Ecosystem intelligence self-schedule
  if (!cronContent.includes('ecosystem-intelligence')) {
    suggestions.push({
      id: 'ecosystem-intel-cron',
      type: 'cron_job',
      priority: 'medium',
      title: 'Daily Ecosystem Intelligence Run',
      description: 'Run ecosystem intelligence agent daily to capture suggestions.',
      implementation: 'Add to cron: 0 6 * * * cd $ZION_ROOT && node automation/ai-ecosystem-intelligence-agent.cjs run',
      benefit: 'Continuous improvement suggestions',
    });
  }

  // 7. Report aggregation
  suggestions.push({
    id: 'report-aggregator',
    type: 'new_agent',
    priority: 'low',
    title: 'Report Aggregator Agent',
    description: 'Agent that aggregates all automation reports into a single dashboard JSON/HTML.',
    implementation: 'Create automation/ai-report-aggregator.cjs',
    cron: '0 7 * * *',
    benefit: 'Single view of ecosystem health',
  });

  // 8. Outdated content detection in blog
  suggestions.push({
    id: 'blog-date-check',
    type: 'enhancement',
    priority: 'medium',
    title: 'Blog Date Metadata Check',
    description: 'Ensure all blog posts have valid date metadata and suggest updates for posts >18 months old.',
    implementation: 'Add to ai-content-organizer or create dedicated script',
    benefit: 'Content relevance signals for SEO',
  });

  return suggestions;
}

function run() {
  ensureDirs();
  log('Starting ecosystem intelligence analysis...');

  const analysis = analyzeEcosystem();
  const cronContent = readFileSafe(CRON_FILE);
  const suggestions = generateSuggestions(analysis, cronContent);

  const report = {
    timestamp: new Date().toISOString(),
    analysis: {
      totalAgents: analysis.agents,
      totalWorkflows: analysis.workflows,
      totalCronJobs: analysis.cronJobs,
      automationScripts: analysis.npmScripts,
    },
    suggestions,
    summary: {
      totalSuggestions: suggestions.length,
      byPriority: {
        high: suggestions.filter((s) => s.priority === 'high').length,
        medium: suggestions.filter((s) => s.priority === 'medium').length,
        low: suggestions.filter((s) => s.priority === 'low').length,
      },
      byType: {
        new_agent: suggestions.filter((s) => s.type === 'new_agent').length,
        enhancement: suggestions.filter((s) => s.type === 'enhancement').length,
        cron_job: suggestions.filter((s) => s.type === 'cron_job').length,
        workflow: suggestions.filter((s) => s.type === 'workflow').length,
      },
    },
  };

  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  fs.writeFileSync(SUGGESTIONS_FILE, JSON.stringify({ suggestions, updatedAt: report.timestamp }, null, 2));

  log(`Analysis complete. ${suggestions.length} suggestions generated.`);
  log(`Report: ${REPORT_FILE}`);
  log(`Suggestions: ${SUGGESTIONS_FILE}`);

  return report;
}

// CLI
const cmd = process.argv[2] || 'run';
if (cmd === 'run') {
  run();
} else if (cmd === 'suggestions') {
  const data = JSON.parse(readFileSafe(SUGGESTIONS_FILE, '{"suggestions":[]}'));
  console.log(JSON.stringify(data.suggestions, null, 2));
} else if (cmd === 'summary') {
  const report = JSON.parse(readFileSafe(REPORT_FILE, '{}'));
  console.log(JSON.stringify(report.summary, null, 2));
} else {
  console.log('Usage: node ai-ecosystem-intelligence-agent.cjs [run|suggestions|summary]');
  process.exit(1);
}
