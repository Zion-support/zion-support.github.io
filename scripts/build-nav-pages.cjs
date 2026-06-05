const fs = require("fs");
const path = require("path");

const out = path.resolve("public");
fs.mkdirSync(path.join(out, "api"), { recursive: true });

const pages = [
  { href: "/solutions", title: "Solutions" },
  { href: "/services", title: "Services" },
  { href: "/products", title: "Products" },
  { href: "/ai-services", title: "AI Services" },
  { href: "/pricing", title: "Pricing" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
  { href: "/agents-dashboard", title: "Live Agents Dashboard" },
  { href: "/solutions/healthcare", title: "Healthcare" },
  { href: "/solutions/financial-services", title: "Financial Services" },
  { href: "/solutions/manufacturing-industrial", title: "Manufacturing & Industrial" },
  { href: "/solutions/ecommerce-retail", title: "E-Commerce & Retail" },
  { href: "/solutions/technology-and-saas", title: "Technology & SaaS" },
  { href: "/solutions/logistics-supply-chain", title: "Logistics & Supply Chain" },
  { href: "/solutions/government-and-public-sector", title: "Government & Public Sector" },
  { href: "/solutions/insurance", title: "Insurance" },
  { href: "/industries", title: "Industries" },
  { href: "/search", title: "Search" },
  { href: "/faq", title: "FAQ" },
  { href: "/case-studies", title: "Case Studies" },
  { href: "/innovation-bundles", title: "Innovation Bundles" },
  { href: "/community", title: "Community" },
  { href: "/free-tools-hub", title: "Free Tools Hub" },
  { href: "/free-resources", title: "Free Resources" },
  { href: "/consultation", title: "Consultation" },
  { href: "/automation", title: "Automation" },
  { href: "/micro-saas-services", title: "Micro SAAS" },
  { href: "/ai-lab", title: "AI Lab" },
  { href: "/careers", title: "Careers" },
  { href: "/partners", title: "Partners" },
  { href: "/terms", title: "Terms" },
  { href: "/privacy", title: "Privacy" },
  { href: "/site-map", title: "Site Map" },
  { href: "/zion-ai-chatbot-builder", title: "Zion AI Chatbot Builder" },
  { href: "/ai-powered-devops", title: "AI-Powered DevOps" },
  { href: "/ai-powered-email-analyzer", title: "AI Email Analyzer" },
  { href: "/zion-ai-code-assistant", title: "Zion AI Code Assistant" },
  { href: "/zion-ai-code-reviewer", title: "Zion AI Code Reviewer" },
  { href: "/zion-ai-customer-support-pro", title: "Zion AI Customer Support Pro" },
  { href: "/zion-ai-predictive-analytics", title: "Zion AI Predictive Analytics" },
  { href: "/zion-security-shield", title: "Zion Security Shield" },
  { href: "/it-services/cybersecurity-audit", title: "Cybersecurity Audit" },
  { href: "/zion-cloud-vault", title: "Zion Cloud Vault" },
  { href: "/property-management-ai", title: "Property Management AI" },
  { href: "/supply-chain-optimizer", title: "Supply Chain Optimizer" },
  { href: "/online-learning-platform", title: "Online Learning Platform" },
  { href: "/zion-ai-api-tester", title: "Zion AI API Tester" },
  { href: "/zion-ai-database-optimizer", title: "Zion AI Database Optimizer" },
  { href: "/zion-ai-knowledge-base", title: "Zion AI Knowledge Base" },
  { href: "/zion-ai-help-desk", title: "Zion AI Help Desk" },
  { href: "/zion-ai-quality-assurance", title: "Zion AI Quality Assurance" },
  { href: "/zion-ai-report-generator", title: "Zion AI Report Generator" },
  { href: "/zion-ai-risk-assessor", title: "Zion AI Risk Assessor" },
  { href: "/it-services/data-engineering", title: "Data Engineering" },
  { href: "/it-services/api-development", title: "API Development" },
  { href: "/it-services/mobile-development", title: "Mobile Development" },
  { href: "/ai-services/generative-ai-enterprise", title: "Generative AI Enterprise" },
  { href: "/ai-services/ai-agents-autonomous", title: "AI Agents & Autonomous Workflows" },
  { href: "/ai-services/ai-multimodal-intelligence", title: "AI Multimodal Intelligence" },
  { href: "/ai-services/ai-rag-knowledge-systems", title: "AI RAG & Knowledge Systems" },
  { href: "/ai-services/ai-governance-trust", title: "AI Governance & Trust" },
  { href: "/ai-services/ai-model-orchestration", title: "AI Model Orchestration" },
  { href: "/ai-services/ai-copilot-enterprise", title: "AI Copilot & Enterprise Assistants" },
  { href: "/ai-services/ai-observability-mlops", title: "AI Observability & MLOps" },
  { href: "/ai-services/ai-strategy-roadmap", title: "AI Strategy & Roadmap" },
  { href: "/ai-services/ai-integration-apis", title: "AI Integration & APIs" },
  { href: "/ai-services/ai-edge-realtime-inference", title: "AI Edge & Real-Time Inference" },
  { href: "/ai-services/ai-regulated-industries", title: "AI for Regulated Industries" },
  { href: "/ai-services/ai-foundation-models-custom-training", title: "AI Foundation Models & Custom Training" },
  { href: "/ai-services/ai-security-responsible-ai", title: "AI Security & Responsible AI" },
  { href: "/ai-services/ai-finetuning-alignment-pipelines", title: "Fine-Tuning & Alignment Pipelines" },
  { href: "/ai-services/ai-memory-agents-long-horizon", title: "Long-Horizon AI Memory & Agents" },
  { href: "/ai-services/ai-agent-safety-evaluation", title: "AI Agent Safety & Evaluation" },
  { href: "/ai-services/ai-context-engineering-enterprise", title: "Enterprise Context Engineering" },
  { href: "/ai-services/autonomous-growth-intelligence", title: "Autonomous Growth Intelligence" },
  { href: "/ai-services/advanced-ai-enterprise-intelligence-hub", title: "Advanced AI & Enterprise Intelligence Hub" },
  { href: "/ai-services/business-intelligence", title: "Business Intelligence" },
  { href: "/ai-services/content-generation", title: "Content Generation" },
  { href: "/ai-services/customer-experience", title: "Customer Experience" },
  { href: "/ai-services/document-processing", title: "Document Processing" },
  { href: "/ai-services/energy-management", title: "Energy Management" },
  { href: "/ai-services/fraud-detection", title: "Fraud Detection" },
  { href: "/ai-services/hr-analytics", title: "HR Analytics" },
  { href: "/ai-services/marketing-automation", title: "Marketing Automation" },
  { href: "/ai-services/predictive-maintenance", title: "Predictive Maintenance" },
  { href: "/ai-services/process-automation", title: "Process Automation" },
  { href: "/ai-services/quality-assurance", title: "Quality Assurance" },
  { href: "/ai-services/supply-chain", title: "Supply Chain" },
  { href: "/zion-analytics-pro", title: "Zion Analytics Pro" },
  { href: "/zion-crm-intelligence", title: "Zion CRM Intelligence" },
  { href: "/zion-content-studio", title: "Zion Content Studio" },
  { href: "/zion-project-master", title: "Zion Project Master" },
  { href: "/zion-performance-monitor", title: "Zion Performance Monitor" },
  { href: "/zion-smart-crm-automation", title: "Zion Smart CRM Automation" },
  { href: "/workflow-automation", title: "Workflow Automation" },
  { href: "/zion-email-automation", title: "Zion Email Automation" },
  { href: "/zion-ai-marketing-automation", title: "Zion AI Marketing Automation" },
  { href: "/zion-devops-automation", title: "Zion DevOps Automation" },
  { href: "/zion-ai-workflow-automator", title: "Zion AI Workflow Automator" },
  { href: "/zion-ai-workflow-automator-pro", title: "Zion AI Workflow Automator Pro" },
  { href: "/robotic-process-automation", title: "Robotic Process Automation" },
  { href: "/process-automation", title: "Process Automation" },
  { href: "/security-automation", title: "Security Automation" },
  { href: "/compliance-automation", title: "Compliance Automation" },
  { href: "/zion-smart-analytics-dashboard", title: "Zion Smart Analytics Dashboard" },
  { href: "/zion-lead-magnet", title: "Zion Lead Magnet" },
  { href: "/zion-invoice-genius", title: "Zion Invoice Genius" },
  { href: "/zion-data-sync", title: "Zion Data Sync" },
  { href: "/zion-ai-lead-scoring", title: "AI Lead Scoring" },
  { href: "/zion-ai-email-marketing-pro", title: "AI Email Marketing Pro" },
  { href: "/zion-ai-seo-optimizer", title: "AI SEO Optimizer" },
  { href: "/zion-ai-social-media-manager", title: "AI Social Media Manager" },
  { href: "/zion-ai-meeting-assistant", title: "AI Meeting Assistant" },
  { href: "/zion-ai-fraud-detection", title: "AI Fraud Detection" },
  { href: "/zion-ai-voice-assistant", title: "AI Voice Assistant" },
  { href: "/ai-lab/autonomous-media-prompt-studio", title: "Autonomous Media Prompt Studio" },
  { href: "/ai-lab/autonomous-rag-knowledge-workspace", title: "Autonomous RAG Knowledge Workspace" },
  // aliases
  { href: "/zion-devops-automation", title: "AI-Powered DevOps (alias)" },
  { href: "/zion-ai-email-assistant", title: "AI Email Analyzer (alias)" },
  { href: "/zion-cybersecurity-audit", title: "Cybersecurity Audit (alias)" },
  { href: "/crm-automation", title: "Smart CRM Automation (alias)" },
];

const seen = new Set();
let created = 0;
const missing = [];
const catalog = [];
const aliasOf = {
  "/zion-devops-automation": "/ai-powered-devops",
  "/zion-ai-email-assistant": "/ai-powered-email-analyzer",
  "/zion-cybersecurity-audit": "/it-services/cybersecurity-audit",
  "/crm-automation": "/zion-smart-crm-automation",
};

function writePage(item) {
  const href = item.href;
  if (href === "/" || href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:")) return;
  if (seen.has(href)) return;
  seen.add(href);
  const segs = href.split("/").filter(Boolean);
  const file = path.join(out, ...segs, "index.html");
  if (fs.existsSync(file)) return;
  const title = item.title || segs[segs.length - 1];
  const desc = `${title} from Zion Tech Group.`;
  const cta = `Ready to start? <a href="/contact">Book a scoping call</a> · <a href="${href}">Return to ${title}</a>`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title} — Zion Tech Group</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="https://ziontechgroup.com${href}" />
<style>
  :root { --bg:#0b1120; --card:rgba(255,255,255,0.025); --card-border:rgba(255,255,255,0.07); --text:#e2e8f0; --muted:#8b97a8; --purple:#a78bfa; --green:#10b981; --blue:#3b82f6; }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  a { color: var(--purple); }
  body::before { content:""; position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(ellipse at top, rgba(167,139,250,0.07), transparent 55%), radial-gradient(ellipse at bottom, rgba(59,130,246,0.06), transparent 55%); }
  header { border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); background: rgba(11,17,32,0.75); position: sticky; top: 0; z-index: 50; }
  .nav { max-width: 1100px; margin: 0 auto; padding: 14px 20px; display: flex; justify-content: space-between; gap: 10px; align-items: center; }
  .logo { font-size: 16px; font-weight: 700; background: linear-gradient(90deg,#a78bfa,#ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; text-decoration: none; }
  main { max-width: 980px; margin: 0 auto; padding: 40px 20px 80px; }
  h1 { font-size: 26px; margin: 0 0 10px; }
  .sub { color: var(--muted); margin: 0 0 22px; font-size: 14px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 14px; }
  .card { background: var(--card); border: 1px solid var(--card-border); border-radius: 14px; padding: 18px 22px; }
  .cta { margin-top: 18px; }
  .pill { display: inline-block; background: rgba(167,139,250,.12); color: var(--purple); border: 1px solid rgba(167,139,250,.22); padding: 6px 12px; border-radius: 999px; font-size: 12px; text-decoration: none; margin: 0 6px 6px 0; }
</style>
</head>
<body>
<header>
  <div class="nav">
    <a class="logo" href="/">Zion Tech Group</a>
    <a style="color:var(--muted); font-size:13px; text-decoration:none;" href="/services">← Services</a>
  </div>
</header>
<main>
  <div style="margin-bottom:10px"><span class="pill">Service</span></div>
  <h1>${title}</h1>
  <p class="sub">${desc}</p>
  <div class="grid">
    <div class="card"><strong>Outcome:</strong> Measurable impact with clear KPIs and milestones.</div>
    <div class="card"><strong>Delivery:</strong> Agile sprints, weekly demos, transparent reporting.</div>
    <div class="card"><strong>Stack:</strong> Cloud-native, AI-first architecture with enterprise governance.</div>
  </div>
  <div class="cta">${cta}</div>
</main>
</body>
</html>`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf-8");
  created++;
  missing.push(href);
  catalog.push({ name: title, href });
}

for (const p of pages) writePage(p);

fs.writeFileSync(path.join(out, "api", "services-catalog.json"), JSON.stringify(catalog, null, 2));
fs.writeFileSync(path.join(out, "api", "link-health.json"), JSON.stringify({ generatedAt: new Date().toISOString(), created, missing, aliasCount: Object.keys(aliasOf).length }, null, 2));
console.log(`Created ${created} missing pages.`);
for (const m of missing.slice(0, 20)) console.log(m);
