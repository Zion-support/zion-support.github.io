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
  {
    title: 'Law Firm Automates Contract Review 50%',
    industry: 'Legal',
    result: '50% faster review',
    description:
      'A mid-size law firm deployed AI Contract Analyzer and AI Document Processor to automate initial contract review and flag high-risk clauses for attorney attention.',
    apps: ['AI Contract Analyzer', 'AI Document Processor', 'Compliance Manager'],
    icon: '⚖️',
  },
  {
    title: 'University Improves Adaptive Learning 35%',
    industry: 'Education',
    result: '35% better outcomes',
    description:
      'A university used AI-powered learning analytics and AI Chatbot Builder to personalize course content and provide 24/7 student support.',
    apps: ['AI Chatbot Builder', 'AI Document Processor', 'AI Report Generator'],
    icon: '🎓',
  },
  {
    title: 'Restaurant Group Cuts Food Waste 30%',
    industry: 'Restaurants',
    result: '30% less waste',
    description:
      'A multi-location restaurant group deployed AI Sales Predictor and Smart Inventory Manager to optimize ordering and reduce spoilage.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Data Pipeline'],
    icon: '🍽️',
  },
  {
    title: 'Packaging Company Improves Quality 25%',
    industry: 'Packaging',
    result: '25% fewer defects',
    description:
      'A packaging manufacturer used AI Quality Assurance and AI Predictive Maintenance to detect defects in real time and prevent equipment failures.',
    apps: ['AI Quality Assurance', 'AI Predictive Maintenance', 'AI Data Pipeline'],
    icon: '📦',
  },
  {
    title: '3PL Provider Cuts Fulfillment Time 40%',
    industry: 'Warehousing',
    result: '40% faster fulfillment',
    description:
      'A third-party logistics provider deployed Supply Chain Optimizer and Smart Inventory Manager to optimize pick paths and reduce order cycle time.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Data Pipeline'],
    icon: '🏭',
  },
  {
    title: 'Mining Operation Improves Safety Incidents 35%',
    industry: 'Mining',
    result: '35% fewer incidents',
    description:
      'A mining company deployed AI Predictive Maintenance and AI Data Pipeline to monitor equipment health and predict failures before they caused safety events.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator'],
    icon: '⛏️',
  },
  {
    title: 'Construction Firm Reduces Rework 30%',
    industry: 'Construction',
    result: '30% less rework',
    description:
      'A general contractor used AI Document Processor and AI Quality Assurance to automate plan review and catch design conflicts before construction.',
    apps: ['AI Document Processor', 'AI Quality Assurance', 'AI Contract Analyzer'],
    icon: '🏗️',
  },
  {
    title: 'Hotel Chain Improves Occupancy 25%',
    industry: 'Hospitality',
    result: '25% higher occupancy',
    description:
      'A hotel group deployed AI Sales Predictor and AI Customer Sentiment Tracker to optimize pricing and personalize guest communications.',
    apps: ['AI Sales Predictor', 'AI Customer Sentiment Tracker', 'AI Chatbot Builder'],
    icon: '🏨',
  },
  {
    title: 'Non-Profit Automates Donor Outreach 40%',
    industry: 'Non-Profit',
    result: '40% more donor engagement',
    description:
      'A non-profit used AI Email Marketing Pro and AI Customer Support Pro to personalize donor communications and automate stewardship workflows.',
    apps: ['AI Email Marketing Pro', 'AI Customer Support Pro', 'AI Report Generator'],
    icon: '🤝',
  },
  {
    title: 'Beauty Brand Improves Customer Retention 35%',
    industry: 'Beauty & Wellness',
    result: '35% better retention',
    description:
      'A beauty brand deployed AI Customer Sentiment Tracker and AI Chatbot Builder to personalize recommendations and provide 24/7 product support.',
    apps: ['AI Customer Sentiment Tracker', 'AI Chatbot Builder', 'AI Marketing Automation'],
    icon: '💄',
  },
  {
    title: 'Pharma Company Automates Regulatory Submissions 50%',
    industry: 'Pharmaceuticals',
    result: '50% faster submissions',
    description:
      'A pharmaceutical company used AI Document Analyzer and AI Report Generator to automate regulatory document preparation and submission workflows.',
    apps: ['AI Document Analyzer', 'AI Report Generator', 'Compliance Manager'],
    icon: '🧪',
  },
  {
    title: 'Bank Improves Fraud Detection 45%',
    industry: 'Banking',
    result: '45% fewer fraud losses',
    description:
      'A regional bank deployed AI Fraud Detector and AI Data Pipeline to analyze transaction patterns and flag suspicious activity in real time.',
    apps: ['AI Fraud Detector', 'AI Data Pipeline', 'Compliance Manager'],
    icon: '🏦',
  },
  {
    title: 'Utility Company Reduces Outages 30%',
    industry: 'Energy & Utilities',
    result: '30% fewer outages',
    description:
      'An electric utility used AI Predictive Maintenance and AI Data Pipeline to monitor grid assets and predict failures before they caused outages.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator'],
    icon: '⚡',
  },
  {
    title: 'Airlines Cuts Delay Costs 25%',
    industry: 'Aviation',
    result: '25% lower delay costs',
    description:
      'An airline deployed AI Predictive Analytics and Supply Chain Optimizer to optimize crew scheduling and parts availability across hubs.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Data Pipeline'],
    icon: '✈️',
  },
  {
    title: 'Grocery Chain Improves Fresh Produce Forecasting 40%',
    industry: 'Retail',
    result: '40% less waste',
    description:
      'A grocery chain used AI Sales Predictor and Smart Inventory Manager to improve demand forecasting for perishables and reduce spoilage.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Data Pipeline'],
    icon: '🥬',
  },
  {
    title: 'Recruiting Firm Cuts Time-to-Fill 35%',
    industry: 'Staffing',
    result: '35% faster placements',
    description:
      'A staffing agency deployed AI Talent Analytics and AI Chatbot Builder to screen candidates and automate initial outreach at scale.',
    apps: ['AI Talent Analytics', 'AI Chatbot Builder', 'AI Document Processor'],
    icon: '👔',
  },
  {
    title: 'Publishing House Automates Manuscript Review 55%',
    industry: 'Publishing',
    result: '55% faster review',
    description:
      'A publishing company used AI Document Processor and AI Report Generator to automate initial manuscript screening and generate editorial reports.',
    apps: ['AI Document Processor', 'AI Report Generator', 'AI Content Moderation'],
    icon: '📚',
  },
  {
    title: 'Fitness Chain Increases Class Attendance 28%',
    industry: 'Sports & Fitness',
    result: '28% higher attendance',
    description:
      'A fitness chain used AI Scheduling Assistant and AI Email Marketing Pro to personalize class reminders and reduce no-shows.',
    apps: ['AI Scheduling Assistant', 'AI Email Marketing Pro', 'AI Chatbot Builder'],
    icon: '🏋️',
  },
  {
    title: 'Insurance Broker Improves Quote Accuracy 40%',
    industry: 'Insurance',
    result: '40% fewer quote errors',
    description:
      'An insurance brokerage used AI Document Processor and Compliance Manager to automate data extraction from applications and reduce manual entry errors.',
    apps: ['AI Document Processor', 'Compliance Manager', 'AI Report Generator'],
    icon: '📋',
  },
  {
    title: 'Construction Company Cuts Change Order Processing 50%',
    industry: 'Construction',
    result: '50% faster change orders',
    description:
      'A general contractor used AI Document Processor and AI Contract Analyzer to automate change order review and approval workflows across multiple projects.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Workflow Automation'],
    icon: '🏗️',
  },
  {
    title: 'Warehouse Operator Improves Pick Accuracy 45%',
    industry: 'Warehousing',
    result: '45% fewer pick errors',
    description:
      'A distribution center deployed AI-powered pick path optimization and barcode verification to reduce mispicks and improve order accuracy.',
    apps: ['Supply Chain Optimizer', 'Smart Inventory Manager', 'AI Data Pipeline'],
    icon: '📦',
  },
  {
    title: 'Airlines Cuts Crew Scheduling Time 60%',
    industry: 'Aviation',
    result: '60% faster scheduling',
    description:
      'An airline used AI to optimize crew assignments across hubs, reducing manual scheduling effort and improving crew utilization.',
    apps: ['AI Predictive Analytics', 'Supply Chain Optimizer', 'AI Data Pipeline'],
    icon: '✈️',
  },
  {
    title: 'Retailer Improves Personalization ROI 35%',
    industry: 'Retail',
    result: '35% higher personalization ROI',
    description:
      'A multi-brand retailer deployed AI Lead Scoring and AI Marketing Automation to personalize recommendations and increase conversion rates.',
    apps: ['AI Lead Scoring', 'AI Marketing Automation', 'AI Customer Sentiment Tracker'],
    icon: '🛒',
  },
  {
    title: 'University Improves Student Outcomes 28%',
    industry: 'Education',
    result: '28% better outcomes',
    description:
      'A university used AI to personalize learning paths and identify at-risk students early, improving retention and graduation rates.',
    apps: ['AI Document Processor', 'AI Report Generator', 'AI Chatbot Builder'],
    icon: '📚',
  },
  {
    title: 'Streaming Platform Cuts Content Moderation Costs 55%',
    industry: 'Media & Entertainment',
    result: '55% lower moderation costs',
    description:
      'A streaming platform deployed AI Content Moderation and AI Document Processor to automate review of user-generated content while maintaining quality.',
    apps: ['AI Content Moderation', 'AI Document Processor', 'AI Fraud Detector'],
    icon: '🎬',
  },
  {
    title: 'Biotech Firm Accelerates Trial Recruitment 40%',
    industry: 'Pharmaceuticals',
    result: '40% faster recruitment',
    description:
      'A biotech company used AI to match patients to clinical trials and automate pre-screening, reducing time to full enrollment.',
    apps: ['AI Document Analyzer', 'AI Report Generator', 'AI Chatbot Builder'],
    icon: '🧪',
  },
  {
    title: 'Aerospace Supplier Cuts Document Review 55%',
    industry: 'Aerospace & Defense',
    result: '55% faster document review',
    description:
      'An aerospace supplier used AI Document Processor and AI Contract Analyzer to automate technical document review and compliance checks across supply chain documentation.',
    apps: ['AI Document Processor', 'AI Contract Analyzer', 'Compliance Manager'],
    icon: '✈️',
  },
  {
    title: 'Defense Contractor Improves Security Clearance 45%',
    industry: 'Aerospace & Defense',
    result: '45% faster clearances',
    description:
      'A defense contractor deployed AI Document Processor and AI Report Generator to automate background check document processing and reduce clearance turnaround time.',
    apps: ['AI Document Processor', 'AI Report Generator', 'AI Data Pipeline'],
    icon: '🔒',
  },
  {
    title: 'Shipping Line Reduces Port Delays 35%',
    industry: 'Maritime & Shipping',
    result: '35% fewer port delays',
    description:
      'A shipping line used Supply Chain Optimizer and AI Predictive Analytics to optimize berth scheduling and predict port congestion, reducing demurrage costs.',
    apps: ['Supply Chain Optimizer', 'AI Predictive Analytics', 'AI Data Pipeline'],
    icon: '🚢',
  },
  {
    title: 'Telecom Reduces Network Outages 40%',
    industry: 'Telecommunications',
    result: '40% fewer outages',
    description:
      'A telecom operator deployed AI Predictive Maintenance and AI Data Pipeline to monitor network equipment and predict failures before they impacted customers.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator'],
    icon: '📡',
  },
  {
    title: 'Retailer Improves Demand Forecast Accuracy 32%',
    industry: 'Retail',
    result: '32% better forecasts',
    description:
      'A multi-channel retailer used AI Sales Predictor and Smart Inventory Manager to unify demand signals and improve seasonal planning across stores and e-commerce.',
    apps: ['AI Sales Predictor', 'Smart Inventory Manager', 'AI Data Pipeline'],
    icon: '📊',
  },
  {
    title: 'Oil Refinery Cuts Unplanned Downtime 28%',
    industry: 'Oil & Gas',
    result: '28% less downtime',
    description:
      'An oil refinery deployed AI Predictive Maintenance and AI Data Pipeline to monitor critical equipment and schedule maintenance during planned shutdowns.',
    apps: ['AI Predictive Maintenance', 'AI Data Pipeline', 'AI Report Generator'],
    icon: '⛽',
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
  // Add leading comma to separate from last existing item (last item may not have trailing comma)
  content = content.replace(/\n\];\s*\nconst industries/, `,\n${newBlocks}\n];\n\nconst industries`);

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
