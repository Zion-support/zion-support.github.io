#!/usr/bin/env node

/**
 * AI Template Blog Creator Agent
 *
 * Creates blog posts from predefined templates. No LLM required.
 * Fast, template-based content for instant indexable pages.
 *
 * Options:
 *   MAX_POSTS=2  - Max new blog posts per run (default 2)
 *
 * Output: automation/reports/template-blog-creator-latest.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'app', 'blog');
const BLOG_DATA_PATH = path.join(ROOT, 'app', 'lib', 'blog-data.ts');
const BLOG_INDEX_PATH = path.join(BLOG_DIR, 'page.tsx');
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const MAX_POSTS = parseInt(process.env.MAX_POSTS || '2', 10);

const BLOG_TEMPLATES = [
  {
    slug: '5-proven-ai-automation-strategies-for-enterprise-workflow-optimization',
    title: '5 Proven AI Automation Strategies for Enterprise Workflow Optimization',
    excerpt:
      'Intelligent process mining, RPA + AI hybrid automation, document workflows, customer journey automation, and cross-department orchestration. ROI metrics and implementation timelines.',
    category: 'AI Trends',
    icon: '🤖',
    sections: [
      {
        heading: 'Intelligent Process Mining and Discovery',
        paragraphs: [
          'Before automating, you need to understand your processes. AI-powered process mining analyzes event logs from your existing systems to map actual workflows, identify bottlenecks, and surface automation opportunities. Teams that start with process discovery reduce implementation risk by 40% compared to those that automate based on assumptions.',
          'The key is using AI to handle the complexity of real-world processes — variations, exceptions, and handoffs that manual mapping misses. Modern process mining tools combine process discovery with conformance checking and simulation to validate automation ROI before you write a single line of code.',
        ],
      },
      {
        heading: 'RPA + AI Hybrid Automation',
        paragraphs: [
          'Pure RPA breaks when screens change. Pure AI lacks the deterministic execution that many back-office processes require. The winning combination is RPA for structured UI interaction with AI for decision points — document classification, exception handling, and natural language extraction.',
          'Hybrid automation typically delivers 60-80% automation rates for document-heavy workflows, compared to 30-50% for RPA alone. The AI layer handles the variability that would otherwise require human-in-the-loop at every exception.',
        ],
      },
      {
        heading: 'Document Workflow Automation',
        paragraphs: [
          'Document processing remains one of the highest-ROI AI use cases. From invoices and contracts to forms and reports, AI can extract key data, classify documents, route them to the right workflow, and trigger downstream actions — all without manual data entry.',
          'Implementation best practices include starting with a single document type, establishing accuracy baselines, and designing clear escalation paths for low-confidence extractions. Teams that follow this approach typically achieve 70%+ automation within 90 days.',
        ],
      },
    ],
  },
  {
    slug: 'securing-ai-models-a-practical-guide-to-threat-mitigation-in-production',
    title: 'Securing AI Models: A Practical Guide to Threat Mitigation in Production',
    excerpt:
      'Adversarial attacks, data poisoning, model extraction, secure deployment patterns, and monitoring for AI systems. NIST and OWASP references for production security.',
    category: 'Security',
    icon: '🔒',
    sections: [
      {
        heading: 'Adversarial Attacks and Model Evasion',
        paragraphs: [
          'Adversarial examples — inputs designed to cause model misclassification — are a growing concern for production AI systems. Attackers can craft inputs that appear normal to humans but cause models to output incorrect results. Defenses include adversarial training, input sanitization, and ensemble methods that reduce single-model vulnerability.',
          'For high-stakes applications, implement confidence thresholds and human review for low-confidence predictions. Monitor for distribution shift that might indicate adversarial probing.',
        ],
      },
      {
        heading: 'Secure Deployment Patterns',
        paragraphs: [
          'AI model endpoints need the same security controls as any production API: authentication, rate limiting, input validation, and audit logging. Additionally, consider model-specific controls like output filtering to prevent data leakage and request signing to prevent replay attacks.',
          'Deploy models behind API gateways with WAF rules. Use separate inference endpoints for different trust levels. Never expose raw model weights or training data in production environments.',
        ],
      },
      {
        heading: 'Monitoring and Incident Response',
        paragraphs: [
          'AI systems require monitoring beyond traditional application metrics. Track prediction distribution shifts, confidence score anomalies, and input pattern changes that might indicate attack or data drift.',
          'Establish incident response playbooks for model compromise scenarios. Know how to roll back to a previous model version, when to disable automated decisions, and how to notify stakeholders of potential integrity issues.',
        ],
      },
    ],
  },
  {
    slug: 'building-a-tailored-implementation-roadmap-from-proof-of-concept-to-full-deployment',
    title: 'Building a Tailored Implementation Roadmap: From Proof of Concept to Full Deployment',
    excerpt:
      'Define success criteria, proof of concept best practices, pilot scaling, full deployment planning, and change management. Milestone templates and common pitfalls.',
    category: 'Business Strategy',
    icon: '🗺️',
    sections: [
      {
        heading: 'Defining Success Criteria and KPIs',
        paragraphs: [
          'Every AI implementation should start with clear, measurable success criteria tied to business outcomes. Avoid vanity metrics — focus on operational KPIs that leadership already tracks. A good success criterion answers: what will be different in 90 days, and how will we measure it?',
          'Work backwards from the business metric to identify the operational levers. For example, reducing customer support costs might require measuring ticket resolution time, escalation rate, and first-contact resolution — all of which should be baselined before deployment.',
        ],
      },
      {
        heading: 'Proof of Concept Best Practices',
        paragraphs: [
          'POCs should validate technical feasibility and business value in 4-8 weeks. Use production-like data, define clear go/no-go criteria, and involve the operational team from day one. The goal is to reduce risk, not to build a throwaway demo.',
          'Common POC mistakes include choosing use cases that are technically interesting but operationally marginal, underestimating data quality requirements, and failing to plan for the handoff to a production team.',
        ],
      },
      {
        heading: 'Pilot Scaling and Full Deployment',
        paragraphs: [
          'Pilot with real users in a controlled environment. Measure not just model accuracy but latency, throughput, and user satisfaction. Use this phase to refine escalation paths and build operational runbooks.',
          'Full deployment should be incremental — add new use cases and user groups gradually. Establish feedback loops for continuous improvement. The teams that succeed treat deployment as the beginning of the journey, not the end.',
        ],
      },
    ],
  },
  {
    slug: 'crm-automation-trends-2026-ai-driven-customer-journey-personalization',
    title: 'CRM Automation Trends 2026: AI-Driven Customer Journey Personalization',
    excerpt:
      'AI-powered lead scoring, predictive customer analytics, automated outreach, personalization at scale, and CRM integration with marketing and support.',
    category: 'Industry Guide',
    icon: '📈',
    sections: [
      {
        heading: 'AI-Powered Lead Scoring and Routing',
        paragraphs: [
          'Traditional lead scoring relies on static rules and manual qualification. AI-powered scoring uses behavioral signals, firmographic data, and engagement patterns to predict conversion likelihood in real time. The result: sales teams focus on the highest-intent prospects while marketing nurtures the rest.',
          'Implementation typically improves lead-to-opportunity conversion by 20-35% by ensuring the right leads reach the right reps at the right time. The key is training models on your historical conversion data, not generic benchmarks.',
        ],
      },
      {
        heading: 'Predictive Customer Analytics',
        paragraphs: [
          'Beyond lead scoring, AI can predict churn risk, expansion opportunity, and next-best-action for every customer. These predictions enable proactive outreach — reaching out before customers churn, offering upgrades when expansion signals appear, and personalizing touchpoints based on predicted needs.',
          'The most effective implementations combine predictive models with clear action workflows. When churn probability exceeds a threshold, trigger a retention play. When expansion signals appear, route to the right sales motion.',
        ],
      },
      {
        heading: 'Personalization at Scale',
        paragraphs: [
          'AI enables personalization that would be impossible manually. From dynamic content and product recommendations to personalized email sequences and ad targeting, AI can tailor the entire customer journey to individual behavior and preferences.',
          'Start with one channel and one use case. Measure lift before expanding. The biggest mistake is attempting enterprise-wide personalization before proving value in a single workflow.',
        ],
      },
    ],
  },
  {
    slug: 'devops-automation-with-ai-reducing-deployment-failures-by-60',
    title: 'DevOps Automation with AI: Reducing Deployment Failures by 60%',
    excerpt:
      'AI-powered code review, intelligent test generation, automated incident detection, predictive deployment risk scoring, and self-healing infrastructure.',
    category: 'Technical Guide',
    icon: '🚀',
    sections: [
      {
        heading: 'AI-Powered Code Review and Static Analysis',
        paragraphs: [
          'AI code review tools catch security vulnerabilities, performance anti-patterns, and style violations before human reviewers see the code. This speeds up the review cycle and lets human reviewers focus on architecture and business logic.',
          'The most effective implementations configure AI to match team conventions and flag only high-confidence issues. Noisy AI reviewers that flag too many false positives quickly get ignored by developers.',
        ],
      },
      {
        heading: 'Intelligent Test Generation and Prioritization',
        paragraphs: [
          'Test coverage gaps are a major source of production incidents. AI can analyze your codebase, identify untested paths, and generate meaningful test cases. Use AI as a complement to human-written tests — AI excels at edge cases, humans excel at business logic.',
          'Test prioritization is equally important. AI can rank tests by failure probability and impact, enabling faster feedback when time is limited. Teams report 40-60% reduction in escaped defects when combining AI test generation with smart prioritization.',
        ],
      },
      {
        heading: 'Predictive Deployment Risk Scoring',
        paragraphs: [
          'Before every deployment, AI can analyze the changeset, correlate with historical incident data, and provide a risk score. High-risk deployments get additional review or staged rollout. Low-risk deployments proceed with standard automation.',
          'This approach reduces cognitive load on deploy approvers and ensures risk-appropriate controls are applied consistently. The result: fewer production incidents and faster delivery for low-risk changes.',
        ],
      },
    ],
  },
];

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[TemplateBlog] ${ts} | ${msg}`);
}

function ensureDirs() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeForJsx(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeForTs(text) {
  return text.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generateBlogPage(template) {
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0];
  const dateFormatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sectionBlocks = template.sections
    .map(
      (sec) => `        <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
              ${escapeForJsx(sec.heading)}
            </h2>
            ${sec.paragraphs.map((p) => `            <p className="mb-4 leading-relaxed text-slate-300">
              ${escapeForJsx(p)}
            </p>`).join('\n')}
          </section>`
    )
    .join('\n\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: '${escapeForTs(template.title)} | Zion Tech Group Blog',
  description:
    '${escapeForTs(template.excerpt)}',
  alternates: { canonical: '/blog/${template.slug}' },
  openGraph: {
    title: '${escapeForTs(template.title)}',
    description:
      '${escapeForTs(template.excerpt)}',
    type: 'article',
    url: 'https://ziontechgroup.com/blog/${template.slug}',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <ArticleStructuredData
        headline="${escapeForJsx(template.title)}"
        description="${escapeForJsx(template.excerpt)}"
        datePublished="${dateStr}"
        slug="${template.slug}"
      />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: '${escapeForJsx(template.title)}' },
          ]}
          className="mb-8"
        />
        <header className="mb-12">
          <div className="mb-4 flex-wrap items-center gap-3 text-sm flex">
            <time dateTime="${dateStr}" className="text-slate-400">
              ${dateFormatted}
            </time>
            <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200">
              ${template.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ${escapeForJsx(template.title)}
          </h1>
        </header>

        <div className="prose-invert max-w-none">
${sectionBlocks}
        </div>

        <div className="mt-16 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Implement AI in Your Organization?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Talk to our team about building a practical AI roadmap tailored to
            your industry and goals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-purple-300 transition hover:text-purple-200"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
`;
}

function syncBlogDataSlugs(newSlugs) {
  if (!fs.existsSync(BLOG_DATA_PATH) || newSlugs.length === 0) return;
  const content = fs.readFileSync(BLOG_DATA_PATH, 'utf8');
  const match = content.match(/export const BLOG_SLUGS = \[([\s\S]*?)\]/);
  if (!match) return;
  const existing = match[1]
    .split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
  const combined = [...new Set([...existing, ...newSlugs])].sort();
  const newArray = `export const BLOG_SLUGS = [\n  ${combined.map((s) => `'${s}'`).join(',\n  ')},\n] as const;`;
  const updated = content.replace(/export const BLOG_SLUGS = \[[\s\S]*?\] as const;/, newArray);
  fs.writeFileSync(BLOG_DATA_PATH, updated);
  log(`Updated BLOG_SLUGS (+${newSlugs.length})`);
}

function addToBlogIndex(created) {
  if (!fs.existsSync(BLOG_INDEX_PATH) || created.length === 0) return;
  let content = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');
  const dateFormatted = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const newEntries = created
    .map(
      (t) => `  {
    slug: '${t.slug}',
    title: '${t.title.replace(/'/g, "\\'")}',
    excerpt:
      '${t.excerpt.replace(/'/g, "\\'")}',
    category: '${t.category}',
    date: '${dateFormatted}',
    readTime: '6 min read',
    icon: '${t.icon}',
  }`
    )
    .join(',\n');
  content = content.replace(/\n\];\s*\nconst categories/, `\n${newEntries}\n];\n\nconst categories`);
  fs.writeFileSync(BLOG_INDEX_PATH, content);
  log(`Updated blog index (+${created.length})`);
}

function run() {
  ensureDirs();
  log('Running template blog creator...');

  const created = [];
  for (const template of BLOG_TEMPLATES) {
    if (created.length >= MAX_POSTS) break;
    const pageDir = path.join(BLOG_DIR, template.slug);
    const pagePath = path.join(pageDir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      log(`SKIP (exists): ${template.slug}`);
      continue;
    }
    fs.mkdirSync(pageDir, { recursive: true });
    const tsx = generateBlogPage(template);
    fs.writeFileSync(pagePath, tsx);
    created.push(template);
    log(`Created: ${template.slug}`);
  }

  if (created.length > 0) {
    syncBlogDataSlugs(created.map((t) => t.slug));
    addToBlogIndex(created);
  }

  const report = {
    timestamp: new Date().toISOString(),
    created: created.length,
    slugs: created.map((t) => t.slug),
  };

  fs.writeFileSync(
    path.join(REPORTS_DIR, 'template-blog-creator-latest.json'),
    JSON.stringify(report, null, 2)
  );
  log(`Done. Created ${created.length} blog post(s).`);
  return report;
}

const cmd = process.argv[2] || 'run';
if (cmd === 'run' || cmd === 'report') {
  run();
} else {
  console.log('Usage: node ai-template-blog-creator-agent.cjs [run|report]');
  process.exit(1);
}
