// app/ai-apps-directory/page.tsx — AI Applications Directory: Browse all AI tools
'use client';

import { useState } from 'react';
import Link from 'next/link';

const METADATA = {
  title: 'AI Applications Directory | Zion Tech Group',
  description: 'Browse 100+ AI applications and tools from Zion Tech Group. Document AI, customer service AI, analytics AI, automation AI, security AI, developer AI, and more.',
};

type Category = 'all' | 'document' | 'customer' | 'analytics' | 'automation' | 'security' | 'developer' | 'business' | 'industry';

const AI_TOOLS = [
  // Document AI
  { name: 'AI Document Classifier', href: '/zion-ai-document-classifier', cat: 'document' as Category, emoji: '📄', desc: 'Classify and route documents by type, priority, and content' },
  { name: 'AI Contract Lifecycle', href: '/zion-ai-contract-lifecycle', cat: 'document' as Category, emoji: '📋', desc: 'Manage contract lifecycle from creation to renewal' },
  { name: 'AI Knowledge Base', href: '/zion-ai-knowledge-base', cat: 'document' as Category, emoji: '📚', desc: 'AI-powered knowledge base with semantic search' },
  { name: 'AI Knowledge Management', href: '/zion-ai-knowledge-management', cat: 'document' as Category, emoji: '🗂️', desc: 'Organize and retrieve organizational knowledge' },
  { name: 'AI Report Generator', href: '/zion-ai-report-generator', cat: 'document' as Category, emoji: '📊', desc: 'Generate reports from data and natural language prompts' },
  { name: 'AI Invoice Genius', href: '/zion-invoice-genius', cat: 'document' as Category, emoji: '🧾', desc: 'Automate invoice generation and processing' },
  { name: 'AI Content Studio', href: '/zion-content-studio', cat: 'document' as Category, emoji: '✍️', desc: 'AI-assisted content creation and management' },

  // Customer Service AI
  { name: 'AI Customer Support Pro', href: '/zion-ai-customer-support-pro', cat: 'customer' as Category, emoji: '🎧', desc: 'AI-powered customer support with human handoff' },
  { name: 'AI Customer Success', href: '/zion-ai-customer-success', cat: 'customer' as Category, emoji: '⭐', desc: 'Customer success automation and health scoring' },
  { name: 'AI Customer Feedback', href: '/zion-ai-customer-feedback', cat: 'customer' as Category, emoji: '💬', desc: 'Collect and analyze customer feedback at scale' },
  { name: 'AI Help Desk', href: '/zion-ai-help-desk', cat: 'customer' as Category, emoji: '🔧', desc: 'AI help desk with ticket routing and resolution' },
  { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant', cat: 'customer' as Category, emoji: '🎤', desc: 'Voice AI assistant for calls and voice interactions' },
  { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder', cat: 'customer' as Category, emoji: '🤖', desc: 'Build custom AI chatbots for your use case' },
  { name: 'AI Chatbot Analytics', href: '/zion-ai-chatbot-analytics', cat: 'customer' as Category, emoji: '📈', desc: 'Analyze chatbot performance and conversation patterns' },
  { name: 'AI Conversation Analytics', href: '/zion-ai-conversation-analytics', cat: 'customer' as Category, emoji: '💭', desc: 'Analyze conversation patterns and sentiment' },

  // Analytics AI
  { name: 'AI Customer 360', href: '/zion-ai-customer-360', cat: 'analytics' as Category, emoji: '👤', desc: 'Unified customer view with AI-powered insights' },
  { name: 'AI Predictive Analytics', href: '/zion-ai-predictive-analytics', cat: 'analytics' as Category, emoji: '🔮', desc: 'Predictive analytics for business forecasting' },
  { name: 'AI Demand Forecasting', href: '/zion-ai-demand-forecasting', cat: 'analytics' as Category, emoji: '📈', desc: 'Forecast demand using AI and historical data' },
  { name: 'AI Revenue Forecaster', href: '/zion-ai-revenue-forecaster', cat: 'analytics' as Category, emoji: '💰', desc: 'Revenue forecasting with AI-driven accuracy' },
  { name: 'AI Market Intelligence', href: '/zion-ai-market-intelligence', cat: 'analytics' as Category, emoji: '🌐', desc: 'Market trends and competitive intelligence' },
  { name: 'AI Pricing Intelligence', href: '/zion-ai-pricing-intelligence', cat: 'analytics' as Category, emoji: '💲', desc: 'Competitive pricing analysis and recommendations' },
  { name: 'AI Spend Intelligence', href: '/zion-ai-spend-intelligence', cat: 'analytics' as Category, emoji: '💸', desc: 'Track and optimize spending with AI insights' },
  { name: 'AI Supply Visibility', href: '/zion-ai-supply-visibility', cat: 'analytics' as Category, emoji: '🚚', desc: 'Real-time supply chain visibility and analytics' },
  { name: 'AI Sustainability Tracker', href: '/zion-ai-sustainability-tracker', cat: 'analytics' as Category, emoji: '🌱', desc: 'Track sustainability metrics and carbon footprint' },
  { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard', cat: 'analytics' as Category, emoji: '📊', desc: 'Smart analytics dashboard with AI insights' },
  { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', cat: 'analytics' as Category, emoji: '📈', desc: 'Advanced analytics platform with AI-powered insights' },

  // Automation AI
  { name: 'AI Workflow Automator', href: '/zion-ai-workflow-automator', cat: 'automation' as Category, emoji: '⚡', desc: 'Automate workflows with AI-powered triggers and actions' },
  { name: 'AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro', cat: 'automation' as Category, emoji: '🚀', desc: 'Advanced workflow automation with complex routing' },
  { name: 'AI Workflow Orchestrator', href: '/zion-ai-workflow-orchestrator', cat: 'automation' as Category, emoji: '🎼', desc: ' orchestrate complex multi-step workflows' },
  { name: 'AI Approval Workflow', href: '/zion-ai-approval-workflow', cat: 'automation' as Category, emoji: '✅', desc: 'Automated approval workflows with AI routing' },
  { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation', cat: 'automation' as Category, emoji: '📧', desc: 'AI-powered marketing automation and campaigns' },
  { name: 'AI Email Automation', href: '/zion-email-automation', cat: 'automation' as Category, emoji: '✉️', desc: 'Automated email campaigns with AI personalization' },
  { name: 'AI CRM Automation', href: '/zion-smart-crm-automation', cat: 'automation' as Category, emoji: '🤝', desc: 'Smart CRM automation with AI lead scoring' },
  { name: 'AI DevOps Automation', href: '/zion-devops-automation', cat: 'automation' as Category, emoji: '⚙️', desc: 'AI-powered DevOps automation and deployment' },
  { name: 'AI Procurement Automation', href: '/zion-ai-procurement-automation', cat: 'automation' as Category, emoji: '🛒', desc: 'Automated procurement with AI vendor selection' },
  { name: 'AI Resource Scheduler', href: '/zion-ai-resource-scheduler', cat: 'automation' as Category, emoji: '📅', desc: 'AI-powered resource scheduling and allocation' },
  { name: 'AI Schedule Optimizer', href: '/zion-ai-schedule-optimizer', cat: 'automation' as Category, emoji: '⏰', desc: 'Optimize schedules with AI-driven efficiency' },

  // Security AI
  { name: 'AI Cyber Threat Intel', href: '/zion-ai-cyber-threat-intel', cat: 'security' as Category, emoji: '🛡️', desc: 'AI-powered cyber threat intelligence and detection' },
  { name: 'AI Compliance Checker', href: '/zion-ai-compliance-checker', cat: 'security' as Category, emoji: '✅', desc: 'Automated compliance checking and monitoring' },
  { name: 'AI Data Governance', href: '/zion-ai-data-governance', cat: 'security' as Category, emoji: '🔐', desc: 'AI-powered data governance and policy enforcement' },
  { name: 'AI Contract Guardian', href: '/zion-ai-contract-guardian', cat: 'security' as Category, emoji: '📝', desc: 'AI contract review and risk assessment' },
  { name: 'AI Vendor Risk Analytics', href: '/zion-ai-vendor-risk-analytics', cat: 'security' as Category, emoji: '⚠️', desc: 'Analyze and manage vendor risk with AI' },
  { name: 'AI Supplier Risk', href: '/zion-ai-supplier-risk', cat: 'security' as Category, emoji: '🏭', desc: 'Supply chain risk assessment with AI' },

  // Developer AI
  { name: 'AI Code Assistant', href: '/zion-ai-code-assistant', cat: 'developer' as Category, emoji: '💻', desc: 'AI code assistant for faster development' },
  { name: 'AI Code Reviewer', href: '/zion-ai-code-reviewer', cat: 'developer' as Category, emoji: '🔍', desc: 'AI-powered code review and quality analysis' },
  { name: 'AI API Tester', href: '/zion-ai-api-tester', cat: 'developer' as Category, emoji: '🧪', desc: 'AI-assisted API testing and validation' },

  // Business AI
  { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring', cat: 'business' as Category, emoji: '🎯', desc: 'AI-powered lead scoring and prioritization' },
  { name: 'AI Lead Enrichment', href: '/zion-ai-lead-enrichment', cat: 'business' as Category, emoji: '👤', desc: 'Enrich leads with AI-powered data' },
  { name: 'AI CRM Intelligence', href: '/zion-crm-intelligence', cat: 'business' as Category, emoji: '🧠', desc: 'CRM intelligence with AI insights' },
  { name: 'AI Project Portfolio', href: '/zion-ai-project-portfolio', cat: 'business' as Category, emoji: '📋', desc: 'Manage project portfolios with AI insights' },
  { name: 'AI Project Master', href: '/zion-project-master', cat: 'business' as Category, emoji: '🎯', desc: 'AI-powered project management' },
  { name: 'AI Quality Assurance', href: '/zion-ai-quality-assurance', cat: 'business' as Category, emoji: '✅', desc: 'AI-powered quality assurance and testing' },
  { name: 'AI Quality Insights', href: '/zion-ai-quality-insights', cat: 'business' as Category, emoji: '💡', desc: 'Quality insights and improvement recommendations' },
  { name: 'AI Incident Response', href: '/zion-ai-incident-response', cat: 'business' as Category, emoji: '🚨', desc: 'AI-powered incident response and management' },
  { name: 'AI Incident Predictor', href: '/zion-ai-incident-predictor', cat: 'business' as Category, emoji: '🔮', desc: 'Predict incidents before they happen' },
  { name: 'AI Field Service Manager', href: '/zion-ai-field-service-manager', cat: 'business' as Category, emoji: '🔧', desc: 'Field service management with AI optimization' },
  { name: 'AI Capacity Planner', href: '/zion-ai-capacity-planner', cat: 'business' as Category, emoji: '📐', desc: 'Capacity planning with AI forecasting' },
  { name: 'AI Expense Tracker', href: '/zion-ai-expense-tracker', cat: 'business' as Category, emoji: '💰', desc: 'Expense tracking and management with AI' },
  { name: 'AI Inventory Planner', href: '/zion-ai-inventory-planner', cat: 'business' as Category, emoji: '📦', desc: 'Inventory planning with AI demand forecasting' },
  { name: 'AI Vendor Manager', href: '/zion-ai-vendor-manager', cat: 'business' as Category, emoji: '🤝', desc: 'Vendor management with AI insights' },
  { name: 'AI Talent Acquisition', href: '/zion-ai-talent-acquisition', cat: 'business' as Category, emoji: '👤', desc: 'AI-powered talent acquisition and recruiting' },
  { name: 'AI Employee Experience', href: '/zion-ai-employee-experience', cat: 'business' as Category, emoji: '😊', desc: 'Employee experience optimization with AI' },
  { name: 'AI Workforce Analytics', href: '/zion-ai-workforce-analytics', cat: 'business' as Category, emoji: '👥', desc: 'Workforce analytics and optimization' },
  { name: 'AI Lead Magnet', href: '/zion-lead-magnet', cat: 'business' as Category, emoji: '🧲', desc: 'Generate leads with AI-powered magnet content' },

  // Industry AI
  { name: 'AI Fraud Detection', href: '/zion-ai-fraud-detection', cat: 'industry' as Category, emoji: '🕵️', desc: 'AI-powered fraud detection and prevention' },
  { name: 'AI Risk Assessor', href: '/zion-ai-risk-assessor', cat: 'industry' as Category, emoji: '⚠️', desc: 'Risk assessment with AI-powered analysis' },
  { name: 'AI Database Optimizer', href: '/zion-ai-database-optimizer', cat: 'industry' as Category, emoji: '🗄️', desc: 'Database optimization with AI recommendations' },
  { name: 'AI Cost Optimizer', href: '/zion-ai-cost-optimizer', cat: 'industry' as Category, emoji: '💸', desc: 'Cost optimization with AI-driven insights' },
  { name: 'AI Brand Monitor', href: '/zion-ai-brand-monitor', cat: 'industry' as Category, emoji: '📢', desc: 'Brand monitoring and reputation management' },
  { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant', cat: 'industry' as Category, emoji: '📅', desc: 'AI meeting assistant with transcription and notes' },
  { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager', cat: 'industry' as Category, emoji: '📱', desc: 'Social media management with AI scheduling' },
  { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer', cat: 'industry' as Category, emoji: '🔍', desc: 'SEO optimization with AI recommendations' },
  { name: 'AI Customer Feedback', href: '/zion-ai-customer-feedback', cat: 'industry' as Category, emoji: '💬', desc: 'Customer feedback analysis with AI sentiment' },
  { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', cat: 'industry' as Category, emoji: '📊', desc: 'Performance monitoring with AI alerts' },
  { name: 'Zion Security Shield', href: '/zion-security-shield', cat: 'industry' as Category, emoji: '🛡️', desc: 'Security shield with AI threat detection' },
  { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', cat: 'industry' as Category, emoji: '☁️', desc: 'Cloud vault with AI-powered security' },
  { name: 'Zion Data Sync', href: '/zion-data-sync', cat: 'industry' as Category, emoji: '🔄', desc: 'Data synchronization with AI conflict resolution' },
];

const CATEGORY_FILTERS: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Tools', emoji: '🤖' },
  { key: 'document', label: 'Document AI', emoji: '📄' },
  { key: 'customer', label: 'Customer Service AI', emoji: '🎧' },
  { key: 'analytics', label: 'Analytics AI', emoji: '📊' },
  { key: 'automation', label: 'Automation AI', emoji: '⚡' },
  { key: 'security', label: 'Security AI', emoji: '🛡️' },
  { key: 'developer', label: 'Developer AI', emoji: '💻' },
  { key: 'business', label: 'Business AI', emoji: '💼' },
  { key: 'industry', label: 'Industry AI', emoji: '🏭' },
];

export default function AiAppsDirectory() {
  const [activeCat, setActiveCat] = useState<Category>('all');

  const filtered = activeCat === 'all'
    ? AI_TOOLS
    : AI_TOOLS.filter((t) => t.cat === activeCat);

  const counts: Record<Category, number> = {
    all: AI_TOOLS.length,
    document: AI_TOOLS.filter((t) => t.cat === 'document').length,
    customer: AI_TOOLS.filter((t) => t.cat === 'customer').length,
    analytics: AI_TOOLS.filter((t) => t.cat === 'analytics').length,
    automation: AI_TOOLS.filter((t) => t.cat === 'automation').length,
    security: AI_TOOLS.filter((t) => t.cat === 'security').length,
    developer: AI_TOOLS.filter((t) => t.cat === 'developer').length,
    business: AI_TOOLS.filter((t) => t.cat === 'business').length,
    industry: AI_TOOLS.filter((t) => t.cat === 'industry').length,
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-950 to-indigo-900/10" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="relative container-page py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-4">
              🤖 {AI_TOOLS.length} AI tools and counting
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              AI Applications <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Directory</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Every AI application and tool from Zion Tech Group. Browse by category,
              find the right tool for your use case, and launch it instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container-page py-6 border-b border-slate-800/60 sticky top-16 bg-slate-950/90 backdrop-blur-xl z-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORY_FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveCat(filter.key)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                activeCat === filter.key
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'border-slate-800/80 bg-slate-900/60 text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {filter.emoji} {filter.label}
              <span className={`ml-1.5 text-xs ${activeCat === filter.key ? 'text-purple-200' : 'text-slate-500'}`}>
                {counts[filter.key]}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Tool Grid */}
      <section className="container-page py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400">No tools in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 text-slate-300 hover:text-white hover:border-purple-500/40 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent 60%)' }} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{tool.emoji}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">{tool.cat}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">{tool.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Launch tool →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800/60 container-page py-12">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-4">Don't see the AI tool you need?</h2>
          <p className="text-slate-400 mb-6">We build custom AI applications for businesses. Tell us what you need.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/discovery" className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-500/20">
              Discovery $99 — map your AI opportunity
            </Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-purple-500/40 text-slate-300 hover:text-white text-sm transition-all">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
