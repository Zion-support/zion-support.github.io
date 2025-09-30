// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime?: string;
  image?: string;
  color?: string;
  href: string;
  featured?: boolean;
  publishedDate?: string;
  type?: string;
  metrics?: { value: string; label: string }[];
}

const contentItems: ContentItem[] = [
  // Brand new items (Sept 30, 2025)
  {
    id: 'ai-2027-operational-trust-blueprint',
    title: 'AI 2027: Operational Trust Blueprint',
    excerpt: 'SLIs wired to KPIs with budgeted actions, live canaries, and instant rollback.',
    readTime: '9 min read',
    category: 'AI Governance',
    href: '/blog/ai-2027-operational-trust-blueprint',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '↗ KPI', label: 'Outcome Lift' },
      { value: '↘ MTTR', label: 'Faster Recovery' }
    ]
  },
  {
    id: 'ai-2027-operational-scorecards',
    title: 'AI 2027: Operational Scorecards — SLIs, Budgets, Rollback',
    excerpt: 'Wire SLIs to KPIs with budgeted actions, approvals, and instant rollback for reliable autonomy.',
    readTime: '9 min read',
    category: 'AI Governance',
    href: '/blog/ai-2027-operational-scorecards',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '↗ KPI', label: 'Outcome Lift' },
      { value: '↘ MTTR', label: 'Faster Recovery' }
    ]
  },
  {
    id: 'edge-consentless-experiments-2026-q4',
    title: 'Edge Consentless Experiments 2026 Q4: <100ms A/B Without PII',
    excerpt: 'Scoped IDs, on-device metrics, and DP noise for compliant global experiments.',
    readTime: '6 min read',
    category: 'Analytics',
    href: '/blog/edge-consentless-experiments-2026-q4',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '<100ms', label: 'Latency' },
      { value: '0 PII', label: 'Collected' }
    ]
  },
  {
    id: 'edge-consentless-analytics-2026',
    title: 'Edge Consentless Analytics 2026 — Scoped IDs, On‑Device, DP Noise',
    excerpt: 'Compliant, fast analytics without PII: scoped IDs, device aggregation, and DP noise under 100ms.',
    readTime: '8 min read',
    category: 'Analytics',
    href: '/blog/edge-consentless-analytics-2026',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '<100ms', label: 'Latency' },
      { value: '0 PII', label: 'Collected' }
    ]
  },
  // Newly added items for additional promotion on the homepage
  {
    id: 'ai-sla-scorecards-2026-q1',
    title: 'AI SLA Scorecards 2026 Q1: SLIs, Budgets, Rollback',
    excerpt: 'Operational scorecards wiring SLIs to KPIs with budgeted actions and instant rollback.',
    readTime: '7 min read',
    category: 'AI Governance',
    href: '/blog/ai-sla-scorecards-2026-q1',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '99.9%', label: 'Target Uptime' },
      { value: '↘ MTTR', label: 'Faster Recovery' }
    ]
  },
  {
    id: 'edge-private-insights-v2-2026',
    title: 'Edge Private Insights v2 (2026): Scoped IDs, DP Noise, <100ms',
    excerpt: 'Second‑gen private analytics with on‑device aggregation, scoped IDs, and DP noise at <100ms.',
    readTime: '6 min read',
    category: 'Analytics',
    href: '/blog/edge-private-insights-v2-2026',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '<100ms', label: 'Latency' },
      { value: '0 PII', label: 'Collected' }
    ]
  },
  {
    id: 'agent-release-runbooks-v2-2026',
    title: 'Agent Release Runbooks v2 (2026): Budgets, Canaries, Recovery',
    excerpt: 'Upgraded runbooks with KPI‑linked canaries, budgeted actions, sandboxed tools, and one‑click recovery.',
    readTime: '8 min read',
    category: 'AI Operations',
    href: '/blog/agent-release-runbooks-v2-2026',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '↘ Incidents', label: 'Fewer Regressions' },
      { value: '1‑click', label: 'Rollback' }
    ]
  },
  {
    id: 'ai-reliable-agent-evals-2025',
    title: 'Reliable Agent Evals 2025: Measure and Guardrail Autonomy',
    excerpt: 'Design evals that tie safety budgets, approvals, and KPIs to dependable autonomy.',
    readTime: '9 min read',
    category: 'Autonomous AI',
    href: '/blog/ai-reliable-agent-evals-2025',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '0.3%', label: 'Policy Violations' },
      { value: '↗ KPI', label: 'On-Target Outcomes' }
    ]
  },
  {
    id: 'ai-cost-calculator-2026',
    title: 'AI Cost Calculator 2026: Optimize Your AI Spending',
    excerpt: 'Cut LLM costs by up to 70% with routing, caching, compression, and quantization.',
    readTime: '14 min read',
    category: 'FinOps',
    href: '/blog/ai-cost-calculator-2026',
    featured: true,
    publishedDate: '2026-01-20',
    metrics: [
      { value: '70%', label: 'Savings Potential' },
      { value: '⇣ 3x', label: 'Cost per Outcome' }
    ]
  },
  {
    id: 'ai-implementation-playbook-2026',
    title: 'AI Implementation Playbook 2026: Enterprise Guide',
    excerpt: 'Phased approach from strategy to scale with governance, security, and ROI.',
    type: 'guide',
    readTime: '16 min read',
    category: 'Strategy',
    href: '/blog/ai-implementation-playbook-2026',
    featured: true,
    publishedDate: '2026-01-20',
    metrics: [
      { value: '4', label: 'Phases' },
      { value: '300%', label: 'ROI Target' }
    ]
  },
  {
    id: 'ai-trustworthy-agents-2026',
    title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
    excerpt: 'Deploy trustworthy AI agents with guardrails, approvals, and end-to-end observability.',
    type: 'article',
    readTime: '11 min read',
    category: 'Autonomous AI',
    href: '/blog/ai-trustworthy-agents-2026',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '0.3%', label: 'Policy Violations' },
      { value: '99.7%', label: 'On-policy Actions' }
    ]
  },
  {
    id: 'ai-value-stream-analytics-2026',
    title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
    excerpt: 'Tie AI cost, latency, and quality to business value with end-to-end tracing.',
    type: 'article',
    readTime: '9 min read',
    category: 'Analytics',
    href: '/blog/ai-value-stream-analytics-2026',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '$/win', label: 'Cost per Outcome' },
      { value: '<200ms', label: 'P95 Latency' }
    ]
  },
  {
    id: 'ai-roadmaps-2026',
    title: 'AI Roadmaps 2026: What to Build Next and Why',
    excerpt: 'A pragmatic roadmap for 2026 across CX, ops, and platforms with high-ROI bets.',
    type: 'article',
    readTime: '10 min read',
    category: 'Strategy',
    href: '/blog/ai-roadmaps-2026',
    featured: true,
    publishedDate: '2025-09-29'
  },
  {
    id: 'ai-roadmaps-2026',
    title: 'AI Roadmaps 2026: What to Build Next and Why',
    excerpt: 'A pragmatic roadmap for 2026 across CX, ops, and platforms with high-ROI bets.',
    category: 'Strategy',
    href: '/blog/ai-roadmaps-2026',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'ai-value-stream-analytics-2026',
    title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
    excerpt: 'Tie AI cost, latency, and quality to business value with end-to-end tracing.',
    category: 'Analytics',
    href: '/blog/ai-value-stream-analytics-2026',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'ai-infrastructure-automation-2026',
    title: 'AI Infrastructure Automation 2026 — 99.99% Uptime',
    excerpt: 'Self-healing cloud with predictive scaling and automated recovery. 70% lower costs.',
    readTime: '18 min read',
    category: 'Infrastructure',
    href: '/blog/ai-infrastructure-automation-2026',
    featured: true,
    publishedDate: '2025-09-30',
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: '70%', label: 'Cost ↓' }
    ]
  },
  {
    id: 'ai-finops-scorecards-2025',
    title: 'AI FinOps Scorecards 2025: Control LLM Spend',
    excerpt: 'Cut LLM costs 30–70% with scorecards, routing, caching, and prompt budgets.',
    readTime: '8 min read',
    category: 'FinOps',
    href: '/blog/ai-finops-scorecards-2025',
    featured: true,
    publishedDate: '2025-09-29'
  },
  {
    id: 'ai-governance-framework-2025',
    title: 'AI Governance Framework 2025: Enterprise-Ready Implementation Guide',
    excerpt: 'Master AI governance with our comprehensive framework covering risk management, compliance, and ethical deployment strategies.',
    type: 'article',
    readTime: '15 min read',
    category: 'AI Governance',
    href: '/blog/ai-governance-framework-2025',
    featured: true,
    publishedDate: '2025-01-25',
    metrics: [
      { value: '70%', label: 'Risk Reduction' },
      { value: '12', label: 'Framework Areas' }
    ]
  },
  {
    id: 'ai-mlops-vector-databases-2025',
    title: 'AI MLOps with Vector Databases 2025: Production-Ready RAG Architecture',
    excerpt: 'Master MLOps for AI applications with vector databases. Learn production-ready RAG architecture and scalable deployment patterns.',
    type: 'article',
    readTime: '18 min read',
    category: 'MLOps',
    href: '/blog/ai-mlops-vector-databases-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '<50ms', label: 'Search Latency' },
      { value: '10M+', label: 'Vector Capacity' }
    ]
  },
  {
    id: 'fintech-ai-risk-compliance-2025',
    title: 'FinTech AI Risk Compliance 2025: 70% Risk Reduction with Automated Governance',
    excerpt: 'See how a leading fintech company achieved 70% AI risk reduction and regulatory compliance with automated governance frameworks.',
    type: 'case-study',
    category: 'FinTech',
    href: '/case-studies/fintech-ai-risk-compliance-2025',
    featured: true,
    publishedDate: '2025-01-25',
    metrics: [
      { value: '70%', label: 'Risk Reduction' },
      { value: '$2.5M', label: 'Cost Savings' }
    ]
  },
  {
    id: 'ai-risk-register',
    title: 'AI Risk Register: Practical Framework for Managing AI Risks',
    excerpt: 'Production-ready risk register covering model, data, privacy, security, ethics, and ops.',
    type: 'article',
    readTime: '10 min read',
    category: 'AI Reliability',
    href: '/blog/ai-risk-register',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '12', label: 'Risk Areas' },
      { value: '24x7', label: 'Monitoring' }
    ]
  },
  {
    id: 'practical-rag-in-production',
    title: 'Practical RAG in Production: Patterns that Actually Work',
    excerpt: 'Battle-tested RAG patterns for groundedness, latency, and cost at scale.',
    type: 'article',
    readTime: '9 min read',
    category: 'AI Platforms',
    href: '/blog/practical-rag-in-production',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '30–70%', label: 'Cost Reduction' },
      { value: '<200ms', label: 'P95 Latency' }
    ]
  },
  {
    id: 'ai-revolution-2025',
    title: 'AI Revolution 2025: Complete Business Transformation Guide',
    excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
    type: 'article',
    readTime: '12 min read',
    category: 'AI Trends',
    href: '/blog/ai-revolution-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '300%', label: 'ROI Improvement' },
      { value: '85%', label: 'Enterprise Adoption' }
    ]
  },
  {
    id: 'ai-workflow-automation-guide',
    title: 'AI Workflow Automation: Complete Implementation Guide',
    excerpt: 'Master AI workflow automation with our comprehensive guide. Reduce manual work by 80% and improve efficiency.',
    type: 'guide',
    readTime: '15 min read',
    category: 'Automation',
    href: '/blog/ai-workflow-automation-guide',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Work Reduction' },
      { value: '99.9%', label: 'Accuracy' }
    ]
  },
  {
    id: 'ai-analytics-implementation',
    title: 'AI Analytics Implementation: Transform Data into Insights',
    excerpt: 'Learn how to implement AI-powered analytics that transform raw data into actionable business insights.',
    type: 'article',
    readTime: '18 min read',
    category: 'Analytics',
    href: '/blog/ai-analytics-implementation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '25%', label: 'Faster Decisions' },
      { value: '40%', label: 'Revenue Growth' }
    ]
  },
  {
    id: 'healthtech-ai-transformation',
    title: 'HealthTech Solutions: 80% Efficiency Gain with AI',
    excerpt: 'See how HealthTech Solutions achieved 80% faster response times and 95% customer satisfaction.',
    type: 'case-study',
    category: 'Healthcare',
    href: '/case-studies/healthtech-ai-transformation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Faster Response' },
      { value: '95%', label: 'Customer Satisfaction' }
    ]
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant: 24/7 Intelligent Support',
    excerpt: 'Transform your customer support with AI-powered virtual assistants that provide instant, accurate responses.',
    type: 'service',
    category: 'AI Services',
    href: '/services/ai-virtual-assistant',
    publishedDate: '2025-01-17',
    metrics: [
      { value: '24/7', label: 'Availability' },
      { value: '90%', label: 'Query Resolution' }
    ]
  },
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform: Real-time Business Intelligence',
    excerpt: 'Transform your data into actionable insights with our comprehensive AI-powered analytics platform.',
    type: 'service',
    category: 'Analytics',
    href: '/services/ai-analytics-platform',
    publishedDate: '2025-01-17',
    metrics: [
      { value: 'Real-time', label: 'Insights' },
      { value: '85%', label: 'Forecast Accuracy' }
    ]
  },
  {
    id: 'ai-customer-service-2025',
    title: 'AI-Powered Customer Service Revolution',
    excerpt: 'Discover how AI is transforming customer service with 80% faster response times and 90% cost reduction.',
    type: 'article',
    readTime: '15 min read',
    category: 'Customer Service',
    href: '/blog/ai-customer-service-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Faster Response' },
      { value: '90%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'ai-agents-in-the-enterprise-2025',
    title: 'AI Agents in the Enterprise: 2025 Adoption Playbook',
    excerpt: 'A practical playbook for deploying autonomous AI agents across revenue ops and IT with measurable ROI.',
    type: 'article',
    readTime: '10 min read',
    category: 'Autonomous AI',
    href: '/blog/ai-agents-in-the-enterprise-2025',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '3x', label: 'Pipeline Lift' },
      { value: '60%', label: 'Ticket Deflection' }
    ]
  },
  {
    id: 'ai-healthcare-transformation-2025',
    title: 'AI Healthcare Transformation Guide',
    excerpt: 'How AI is revolutionizing patient care with 40% better diagnostics and 60% improved outcomes.',
    type: 'article',
    readTime: '18 min read',
    category: 'Healthcare',
    href: '/blog/ai-healthcare-transformation-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '40%', label: 'Better Diagnostics' },
      { value: '60%', label: 'Improved Outcomes' }
    ]
  },
  {
    id: 'retail-ai-transformation',
    title: 'RetailAI Corp: 150% Revenue Growth',
    excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
    type: 'case-study',
    category: 'Retail',
    href: '/case-studies/retail-ai-transformation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '150%', label: 'Revenue Growth' },
      { value: '80%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'ai-governance-scorecards-2027',
    title: 'AI Governance Scorecards 2027: Guardrails Linked to KPIs',
    excerpt: 'Operational guardrails wired to outcomes with PR checks and live canaries.',
    readTime: '7 min read',
    category: 'AI Governance',
    href: '/blog/ai-governance-scorecards-2027',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'edge-retrieval-rag-2027',
    title: 'Edge Retrieval RAG 2027: Sub‑100ms Answers Without PII',
    excerpt: 'Hybrid edge retrieval with TTL windows and on‑device caches for private, fast answers.',
    readTime: '8 min read',
    category: 'GenAI',
    href: '/blog/edge-retrieval-rag-2027',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'agentic-release-budgets-2027',
    title: 'Agentic Release Budgets 2027: Safe Automation at Scale',
    excerpt: 'Budgeted actions, approvals, and rollback playbooks that keep velocity high.',
    readTime: '6 min read',
    category: 'AI Operations',
    href: '/blog/agentic-release-budgets-2027',
    featured: true,
    publishedDate: '2025-09-30'
  }
];

// Newly added featured content to advertise on the homepage
contentItems.unshift(
  {
    id: 'ai-governance-real-time-2026',
    title: 'AI Governance in Real Time 2026: Live Canaries + PR Policy Tests',
    excerpt: 'Wire KPI‑linked canaries and CI policy tests so teams ship weekly without regressions.',
    readTime: '7 min read',
    category: 'AI Governance',
    href: '/blog/ai-governance-real-time-2026',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'edge-inference-warm-pools-2026',
    title: 'Edge Inference Warm Pools 2026: Sub‑100ms Global with Predictable Cost',
    excerpt: 'Warm pools, intent prefetching, and tiered caches for fast, affordable inference worldwide.',
    readTime: '6 min read',
    category: 'Edge Computing',
    href: '/blog/edge-inference-warm-pools-2026',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'agent-release-guardrails-2026',
    title: 'Agent Release Guardrails 2026: Budgets, Approvals, and Instant Rollback',
    excerpt: 'Battle‑tested checklists for safe agent updates with budgeted actions and one‑click rollback.',
    readTime: '7 min read',
    category: 'AI Operations',
    href: '/blog/agent-release-guardrails-2026',
    featured: true,
    publishedDate: '2025-09-30'
  }
);

// Promote the latest two new posts on the homepage showcase
contentItems.unshift(
  {
    id: 'ai-operational-trust-2026-q4',
    title: 'AI Operational Trust 2026 Q4: SLIs, Budgets, Rollback',
    excerpt: 'Outcome‑linked SLIs, budgeted actions, and one‑click rollback for safe autonomy.',
    readTime: '7 min read',
    category: 'AI Operations',
    href: '/blog/ai-operational-trust-2026-q4',
    featured: true,
    publishedDate: '2025-09-30'
  },
  {
    id: 'edge-consentless-experiments-2026-q4',
    title: 'Edge Consentless Experiments 2026 Q4: <100ms A/B Without PII',
    excerpt: 'Scoped IDs, on‑device metrics, and DP noise for compliant global experiments.',
    readTime: '6 min read',
    category: 'Analytics',
    href: '/blog/edge-consentless-experiments-2026-q4',
    featured: true,
    publishedDate: '2025-09-30'
  }
);

interface ContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showMetrics?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function ContentShowcase({
  title = "Latest AI Insights & Success Stories",
  subtitle = "Stay ahead with our latest content, case studies, and AI innovations",
  maxItems = 6,
  showMetrics = true,
  autoRotate = true,
  rotationInterval = 10000
}: ContentShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(autoRotate);

  const displayedItems = contentItems.filter(i => i.featured).slice(0, maxItems);

  useEffect(() => {
    if (isRotating && displayedItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [isRotating, displayedItems.length, rotationInterval]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.color === 'red' ? 'bg-red-100 text-red-800' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  )}
                </div>
                
                {item.image && (
                  <div className="text-4xl mb-4">{item.image}</div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content-hub"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}