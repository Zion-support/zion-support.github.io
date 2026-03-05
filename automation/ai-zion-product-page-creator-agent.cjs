#!/usr/bin/env node

/**
 * AI Zion Product Page Creator Agent
 *
 * Creates new Zion AI product pages and adds them to the front page.
 * Uses local LLM (Ollama primary, OpenRouter fallback).
 * Falls back to predefined templates when LLM unavailable.
 *
 * Options:
 *   MAX_PAGES=1 - Number of new pages to create (default 1)
 *   SKIP_FRONT_PAGE=1 - Create page only, don't add to front page
 *
 * Run: npm run content:create-product-page
 *      (Ollama: ollama serve, ollama pull llama3.2:3b — or set OPENROUTER_API_KEY)
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(process.cwd(), 'app');
const PAGE_PATH = path.join(process.cwd(), 'app', 'page.tsx');
const SITEMAP_PATH = path.join(process.cwd(), 'app', 'sitemap.ts');
const DATA_DIR = path.join(__dirname, 'data');
const REPORT_PATH = path.join(__dirname, 'reports', 'zion-product-creator-latest.json');

const EXISTING_SLUGS = (() => {
  const slugs = new Set();
  try {
    const entries = fs.readdirSync(APP_DIR, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory() && (e.name.startsWith('zion-ai-') || e.name.startsWith('zion-'))) {
        slugs.add(e.name);
      }
    }
  } catch (_) {}
  return slugs;
})();

const FALLBACK_TEMPLATES = [
  { slug: 'zion-ai-compliance-checker', name: 'Zion AI Compliance Checker', category: 'Compliance', icon: '✅', desc: 'Automate compliance checks with policy-aware AI that tracks regulatory updates and flags gaps.' },
  { slug: 'zion-ai-vendor-manager', name: 'Zion AI Vendor Manager', category: 'Operations', icon: '🔄', desc: 'Manage vendor relationships and procurement workflows with AI-powered scoring and risk assessment.' },
  { slug: 'zion-ai-incident-response', name: 'Zion AI Incident Response', category: 'Security', icon: '🚨', desc: 'Accelerate incident triage and resolution with automated playbooks and real-time collaboration.' },
  { slug: 'zion-ai-data-governance', name: 'Zion AI Data Governance', category: 'Compliance', icon: '📋', desc: 'Govern data quality, lineage, and access policies with AI-powered cataloging and policy enforcement.' },
  { slug: 'zion-ai-customer-success', name: 'Zion AI Customer Success', category: 'Customer Experience', icon: '🌟', desc: 'Proactively identify at-risk accounts and drive expansion with AI-powered health scoring and playbooks.' },
  { slug: 'zion-ai-brand-monitor', name: 'Zion AI Brand Monitor', category: 'Growth', icon: '👁️', desc: 'Track brand mentions, sentiment, and competitive positioning across channels in real time.' },
  { slug: 'zion-ai-demand-forecasting', name: 'Zion AI Demand Forecasting', category: 'Operations', icon: '📊', desc: 'Forecast demand with ML models that factor in seasonality, promotions, and external signals.' },
  { slug: 'zion-ai-workflow-orchestrator', name: 'Zion AI Workflow Orchestrator', category: 'Automation', icon: '🔄', desc: 'Orchestrate cross-system workflows with intelligent routing, retries, and dependency management.' },
  { slug: 'zion-ai-cost-optimizer', name: 'Zion AI Cost Optimizer', category: 'Operations', icon: '💰', desc: 'Identify cost-saving opportunities across cloud, SaaS, and operational spend with AI-driven insights.' },
  { slug: 'zion-ai-resource-scheduler', name: 'Zion AI Resource Scheduler', category: 'Operations', icon: '📅', desc: 'Optimize resource allocation and scheduling with constraint-aware AI for teams and projects.' },
  { slug: 'zion-ai-supply-visibility', name: 'Zion AI Supply Visibility', category: 'Operations', icon: '🔍', desc: 'Gain real-time visibility into supply chain status, risks, and alternative sourcing options.' },
  { slug: 'zion-ai-quality-insights', name: 'Zion AI Quality Insights', category: 'Operations', icon: '📈', desc: 'Surface quality trends, root causes, and improvement opportunities from production data.' },
  { slug: 'zion-ai-contract-lifecycle', name: 'Zion AI Contract Lifecycle', category: 'Operations', icon: '📄', desc: 'Manage contract creation, negotiation, renewal, and compliance through the full lifecycle with AI-powered insights.' },
  { slug: 'zion-ai-procurement-automation', name: 'Zion AI Procurement Automation', category: 'Operations', icon: '🛒', desc: 'Automate sourcing, vendor selection, and purchase workflows with intelligent spend analysis and approval routing.' },
  { slug: 'zion-ai-field-service-manager', name: 'Zion AI Field Service Manager', category: 'Operations', icon: '📍', desc: 'Optimize field technician scheduling, routing, and job completion with AI-driven dispatch and real-time updates.' },
  { slug: 'zion-ai-sustainability-tracker', name: 'Zion AI Sustainability Tracker', category: 'Compliance', icon: '🌱', desc: 'Track ESG metrics, carbon footprint, and sustainability goals with automated data collection and reporting.' },
  { slug: 'zion-ai-spend-intelligence', name: 'Zion AI Spend Intelligence', category: 'Operations', icon: '💵', desc: 'Gain visibility into spend across categories, vendors, and departments with AI-powered anomaly detection.' },
  { slug: 'zion-ai-capacity-planner', name: 'Zion AI Capacity Planner', category: 'Operations', icon: '📊', desc: 'Forecast resource and capacity needs with ML models that factor in demand, seasonality, and growth trends.' },
  { slug: 'zion-ai-knowledge-management', name: 'Zion AI Knowledge Management', category: 'Productivity', icon: '📚', desc: 'Centralize and surface organizational knowledge with AI-powered search, tagging, and recommendations.' },
  { slug: 'zion-ai-employee-experience', name: 'Zion AI Employee Experience', category: 'Operations', icon: '👥', desc: 'Measure and improve employee engagement with pulse surveys, sentiment analysis, and action insights.' },
  { slug: 'zion-ai-vendor-risk-analytics', name: 'Zion AI Vendor Risk Analytics', category: 'Operations', icon: '⚠️', desc: 'Assess and monitor vendor risk with automated scoring, compliance checks, and early warning signals.' },
  { slug: 'zion-ai-chatbot-analytics', name: 'Zion AI Chatbot Analytics', category: 'Customer Experience', icon: '📊', desc: 'Track chatbot performance, conversation flows, and improvement opportunities with AI-driven insights.' },
  { slug: 'zion-ai-cyber-threat-intel', name: 'Zion AI Cyber Threat Intel', category: 'Security', icon: '🔒', desc: 'Aggregate and prioritize threat intelligence with automated correlation and actionable alerts.' },
  { slug: 'zion-ai-document-classifier', name: 'Zion AI Document Classifier', category: 'Productivity', icon: '📁', desc: 'Automatically classify and route documents with ML models that learn from your taxonomy.' },
  { slug: 'zion-ai-revenue-forecaster', name: 'Zion AI Revenue Forecaster', category: 'Growth', icon: '💹', desc: 'Forecast revenue with multi-signal models that factor in pipeline, seasonality, and market trends.' },
  { slug: 'zion-ai-workforce-analytics', name: 'Zion AI Workforce Analytics', category: 'Operations', icon: '📈', desc: 'Analyze workforce productivity, attrition risk, and headcount planning with predictive insights.' },
];

function ensureDirs() {
  [DATA_DIR, path.dirname(REPORT_PATH)].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

function generatePageContent(slug, name, category, icon, description, features, useCases, benefits) {
  const featuresStr = features.map((f) => `          {
            "title": "${(f.title || '').replace(/"/g, '\\"')}",
            "description": "${(f.description || '').replace(/"/g, '\\"')}"
          }`).join(',\n');
  const useCasesStr = useCases.map((u) => `          {
            "title": "${(u.title || '').replace(/"/g, '\\"')}",
            "description": "${(u.description || '').replace(/"/g, '\\"')}",
            "icon": "${u.icon || '⚡'}"
          }`).join(',\n');
  const benefitsStr = benefits.map((b) => `"${(b || '').replace(/"/g, '\\"')}"`).join(', ');

  return `import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${name} | Zion Tech Group',
  description:
    '${description.substring(0, 155)}',
  alternates: { canonical: '/${slug}' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: '${name}',
        category: '${category}',
        description:
          '${description}',
        iconEmoji: '${icon}',
        features: [
${featuresStr}
        ],
        useCases: [
${useCasesStr}
        ],
        benefits: [${benefitsStr}],
        ctaLabel: 'Get Started with ${name}',
      }}
    />
  );
}
`;
}

async function llmGenerateProduct() {
  try {
    const { createLLMClient } = require('./lib/openrouter-client.cjs');
    const client = createLLMClient({
      openrouterModel: process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.2-3b-instruct:free',
    });
    if (!client.isConfigured()) return null;

    const existing = Array.from(EXISTING_SLUGS).slice(0, 30).join(', ');
    const prompt = `You are a product strategist for Zion Tech Group (ziontechgroup.com). Create ONE new Zion AI product. Return ONLY valid JSON. No markdown.

EXISTING product slugs (DO NOT use): ${existing}

Return this exact structure:
{
  "slug": "zion-ai-xxx",
  "name": "Zion AI Xxx",
  "category": "Operations" or "Growth" or "Security" or "Compliance" or "Customer Experience" or "Engineering",
  "icon": "emoji",
  "description": "2-3 sentence description of the AI product for businesses.",
  "features": [{"title": "Feature 1", "description": "..."}, {"title": "Feature 2", "description": "..."}, {"title": "Feature 3", "description": "..."}],
  "useCases": [{"title": "Use Case 1", "description": "...", "icon": "⚡"}, {"title": "Use Case 2", "description": "...", "icon": "📈"}],
  "benefits": ["Benefit 1", "Benefit 2", "Benefit 3"]
}

Rules: slug must be zion-ai- or zion- prefix, lowercase, hyphens. Pick a category from the list.`;

    const response = await client.chat(prompt, {
      systemPrompt: 'Return ONLY valid JSON. No markdown code blocks, no explanation.',
      temperature: 0.7,
      maxTokens: 1024,
    });

    let jsonStr = response.trim();
    const codeBlock = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlock) jsonStr = codeBlock[1].trim();
    const data = JSON.parse(jsonStr);
    if (!data.slug || !data.name) return null;
    data.slug = data.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    if (!data.slug.startsWith('zion-')) data.slug = 'zion-ai-' + data.slug;
    if (EXISTING_SLUGS.has(data.slug)) return null;
    return data;
  } catch (_) {
    return null;
  }
}

function applyToFrontPage(content, app) {
  const block = `  {
    name: '${(app.name || '').replace(/'/g, "\\'")}',
    href: '/${app.slug}',
    category: '${(app.category || 'Operations').replace(/'/g, "\\'")}',
    description: '${(app.description || '').replace(/'/g, "\\'").substring(0, 120)}',
    icon: '${app.icon || '🤖'}',
  },\n`;
  const marker = '  },\n];\n\nconst spotlightPillars';
  if (!content.includes(marker)) return content;
  return content.replace(marker, '  },\n' + block + '];\n\nconst spotlightPillars');
}

async function run() {
  ensureDirs();
  console.log('🤖 AI Zion Product Page Creator Agent');

  const maxPages = parseInt(process.env.MAX_PAGES || '1', 10);
  const skipFrontPage = process.env.SKIP_FRONT_PAGE === '1';
  const created = [];

  for (let i = 0; i < maxPages; i++) {
    let data = await llmGenerateProduct();
    if (!data) {
      const t = FALLBACK_TEMPLATES.find((t) => !EXISTING_SLUGS.has(t.slug));
      if (!t) {
        console.log('   No new product templates available (all exist)');
        break;
      }
      data = {
        ...t,
        description: t.desc || t.description || '',
        features: [
          { title: 'Production-Ready', description: 'Enterprise-grade infrastructure with high availability and monitoring.' },
          { title: 'Intelligent Automation', description: 'AI-powered workflows that learn from patterns and adapt over time.' },
          { title: 'Seamless Integration', description: 'Connect with existing tools via pre-built connectors and webhooks.' },
        ],
        useCases: [
          { title: 'Operational Efficiency', description: `Deploy ${t.name} to automate routine tasks and reduce manual errors.`, icon: '⚡' },
          { title: 'Scalable Growth', description: `Use ${t.name} to handle increasing complexity without proportional headcount.`, icon: '📈' },
        ],
        benefits: ['Reduced operational costs', 'Faster time to value', 'Enterprise-grade security'],
      };
    }

    const dir = path.join(APP_DIR, data.slug);
    if (fs.existsSync(dir)) {
      console.log(`   Skipping ${data.slug} (already exists)`);
      continue;
    }

    fs.mkdirSync(dir, { recursive: true });
    const pageContent = generatePageContent(
      data.slug,
      data.name,
      data.category || 'Operations',
      data.icon || '🤖',
      data.description || '',
      data.features || [],
      data.useCases || [],
      data.benefits || []
    );
    fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent);
    EXISTING_SLUGS.add(data.slug);
    created.push(data);
    console.log(`   Created ${data.slug}`);

    if (!skipFrontPage) {
      const pageContent2 = fs.readFileSync(PAGE_PATH, 'utf8');
      const newContent = applyToFrontPage(pageContent2, data);
      if (newContent !== pageContent2) {
        fs.writeFileSync(PAGE_PATH, newContent);
        console.log(`   Added ${data.name} to front page`);
      }
    }

    if (fs.existsSync(SITEMAP_PATH)) {
      const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
      const sitemapPath = `/${data.slug}`;
      if (!sitemapContent.includes(sitemapPath)) {
        const servicesLine = "    { path: '/services', changeFrequency: 'weekly', priority: 0.9 }";
        const newLine = `    { path: '${sitemapPath}', changeFrequency: 'monthly', priority: 0.75 },\n${servicesLine}`;
        fs.writeFileSync(SITEMAP_PATH, sitemapContent.replace(servicesLine, newLine));
        console.log(`   Added ${data.slug} to sitemap`);
      }
    }
  }

  const report = { created, at: new Date().toISOString() };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`✅ Done. Created ${created.length} product page(s).`);
}

if (require.main === module) {
  run().catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
  });
}

module.exports = { run };
