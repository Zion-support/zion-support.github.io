#!/usr/bin/env node

/**
 * AI Template Case Study Creator Agent
 *
 * Adds case studies to case-studies/page.tsx from predefined templates.
 * No LLM required. Fast, template-based content generation.
 *
 * Options:
 *   MAX_CASE_STUDIES=2  - Max new case studies per run (default 2)
 *
 * Output: automation/reports/template-case-study-creator-latest.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CASE_STUDIES_PAGE = path.join(ROOT, 'app', 'case-studies', 'page.tsx');
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const MAX_CASE_STUDIES = parseInt(process.env.MAX_CASE_STUDIES || '2', 10);

const CASE_STUDY_TEMPLATES = [
  {
    title: 'Real Estate Firm Automates Lease Review 55%',
    industry: 'Real Estate',
    result: '55% faster lease review',
    description:
      'A property management company used AI Contract Analyzer and AI Document Processor to automate lease abstraction and compliance checks across a 500-property portfolio.',
    apps: ['AI Contract Analyzer', 'AI Document Processor', 'Compliance Manager'],
    icon: '🏠',
  },
  {
    title: 'Accounting Firm Cuts Tax Prep Time 45%',
    industry: 'Accounting',
    result: '45% faster tax prep',
    description:
      'A mid-size accounting firm deployed AI Document Processor and AI Report Generator to automate data extraction from client documents and generate draft tax schedules.',
    apps: ['AI Document Processor', 'AI Report Generator', 'Invoice Genius'],
    icon: '📊',
  },
  {
    title: 'Veterinary Clinic Reduces No-Shows 33%',
    industry: 'Veterinary',
    result: '33% fewer no-shows',
    description:
      'A multi-location veterinary practice used AI Chatbot Builder and AI Scheduling Assistant to send automated reminders and allow online rescheduling.',
    apps: ['AI Chatbot Builder', 'AI Scheduling Assistant', 'AI Customer Support Pro'],
    icon: '🐾',
  },
  {
    title: 'HVAC Company Improves Dispatch Efficiency 42%',
    industry: 'Home Services',
    result: '42% faster dispatch',
    description:
      'A regional HVAC contractor deployed AI Predictive Maintenance and Smart Inventory Manager to optimize technician routing and parts availability.',
    apps: ['AI Predictive Maintenance', 'Smart Inventory Manager', 'Workflow Automation'],
    icon: '🔧',
  },
  {
    title: 'Satellite Operator Cuts Ground Station Downtime 22%',
    industry: 'Space & Satellite',
    result: '22% less downtime',
    description:
      'A satellite communications provider used AI Predictive Maintenance and AI Data Pipeline to monitor ground station health and predict failures before they impacted operations.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator'],
    icon: '🛰️',
  },
  {
    title: 'Apparel Brand Improves Seasonal Forecast 38%',
    industry: 'Textiles & Apparel',
    result: '38% better forecasts',
    description:
      'A fashion brand deployed AI Sales Predictor and Smart Inventory Manager to improve demand forecasting for seasonal collections and reduce overstock.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Marketing Automation'],
    icon: '👗',
  },
  {
    title: 'Chemical Producer Cuts Batch Defects 32%',
    industry: 'Chemicals',
    result: '32% fewer defects',
    description:
      'A specialty chemicals manufacturer used AI Quality Assurance and AI Data Pipeline to monitor production parameters and detect anomalies in real time.',
    apps: ['AI Quality Assurance', 'AI Data Pipeline', 'AI Predictive Analytics'],
    icon: '⚗️',
  },
  {
    title: 'Semiconductor Fab Improves Yield 18%',
    industry: 'Electronics',
    result: '18% yield improvement',
    description:
      'A semiconductor foundry deployed AI Predictive Analytics and AI Quality Assurance to optimize process parameters and reduce wafer defects.',
    apps: ['AI Predictive Analytics', 'AI Quality Assurance', 'AI Data Pipeline'],
    icon: '🔌',
  },
  {
    title: 'Fleet Operator Cuts Route Costs 28%',
    industry: 'Transportation',
    result: '28% cost reduction',
    description:
      'A logistics fleet used Supply Chain Optimizer and AI Predictive Maintenance to optimize routes and reduce fuel and maintenance costs.',
    apps: ['Supply Chain Optimizer', 'AI Predictive Maintenance', 'AI Data Pipeline'],
    icon: '🚛',
  },
  {
    title: 'Agency Improves Campaign ROI 45%',
    industry: 'Marketing',
    result: '45% higher ROI',
    description:
      'A digital marketing agency used AI Marketing Automation and AI Customer Sentiment Tracker to personalize campaigns and optimize ad spend.',
    apps: ['AI Marketing Automation', 'AI Customer Sentiment Tracker', 'AI Sales Predictor'],
    icon: '📣',
  },
];

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[TemplateCaseStudy] ${ts} | ${msg}`);
}

function ensureDirs() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function extractExistingTitles(content) {
  const titles = new Set();
  const re = /title:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    titles.add(m[1]);
  }
  return titles;
}

function run() {
  ensureDirs();
  log('Running template case study creator...');

  if (!fs.existsSync(CASE_STUDIES_PAGE)) {
    log('Case studies page not found.');
    const report = { timestamp: new Date().toISOString(), created: 0, skipped: 'no_page' };
    fs.writeFileSync(path.join(REPORTS_DIR, 'template-case-study-creator-latest.json'), JSON.stringify(report, null, 2));
    return report;
  }

  let content = fs.readFileSync(CASE_STUDIES_PAGE, 'utf8');
  const existingTitles = extractExistingTitles(content);

  const toAdd = CASE_STUDY_TEMPLATES.filter((t) => !existingTitles.has(t.title)).slice(0, MAX_CASE_STUDIES);

  if (toAdd.length === 0) {
    log('No new case studies to add (all templates already exist).');
    const report = { timestamp: new Date().toISOString(), created: 0, skipped: 'all_exist' };
    fs.writeFileSync(path.join(REPORTS_DIR, 'template-case-study-creator-latest.json'), JSON.stringify(report, null, 2));
    return report;
  }

  const caseStudyBlock = (cs) => `  {
    title: '${cs.title.replace(/'/g, "\\'")}',
    industry: '${cs.industry}',
    result: '${cs.result}',
    description:
      '${cs.description.replace(/'/g, "\\'")}',
    apps: [${cs.apps.map((a) => `'${a}'`).join(', ')}],
    icon: '${cs.icon}',
  }`;

  const newBlocks = toAdd.map(caseStudyBlock).join(',\n');
  content = content.replace(/\n\];\s*\nconst industries/, `\n${newBlocks}\n];\n\nconst industries`);

  fs.writeFileSync(CASE_STUDIES_PAGE, content);

  const report = {
    timestamp: new Date().toISOString(),
    created: toAdd.length,
    added: toAdd.map((t) => t.title),
  };

  fs.writeFileSync(
    path.join(REPORTS_DIR, 'template-case-study-creator-latest.json'),
    JSON.stringify(report, null, 2)
  );
  log(`Done. Added ${toAdd.length} case study(ies): ${toAdd.map((t) => t.title).join(', ')}`);
  return report;
}

const cmd = process.argv[2] || 'run';
if (cmd === 'run' || cmd === 'report') {
  run();
} else {
  console.log('Usage: node ai-template-case-study-creator-agent.cjs [run|report]');
  process.exit(1);
}
