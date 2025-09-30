<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-13ae
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

<<<<<<< HEAD
interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'case-study' | 'guide' | 'service';
  readTime?: string;
  category: string;
  href: string;
  featured?: boolean;
  publishedDate: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}
<<<<<<< HEAD

const contentItems: ContentItem[] = [
  {
    id: 'ai-autonomous-infrastructure-2026',
    title: 'AI Autonomous Infrastructure 2026: Self-Healing Systems & Zero-Touch Operations',
    excerpt: 'Master autonomous infrastructure with self-healing systems, predictive maintenance, and zero-touch operations. Achieve 99.9% uptime and 90% cost reduction.',
    type: 'article',
    readTime: '28 min read',
    category: 'Infrastructure',
    href: '/blog/ai-autonomous-infrastructure-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '95%', label: 'Automation' },
      { value: '$15M+', label: 'Annual Savings' }
    ]
  },
  {
    id: 'ai-quantum-hybrid-computing-2026',
=======
    title: 'AI Quantum Hybrid Computing 2026: Next-Generation Intelligence Revolution',
    excerpt: 'Explore the revolutionary potential of quantum-AI hybrid computing. Achieve 1000x faster optimization, 95% accuracy improvements, and breakthrough capabilities.',
    type: 'article',
    readTime: '32 min read',
    category: 'Quantum Computing',
    href: '/blog/ai-quantum-hybrid-computing-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
=======
      { value: '1000x', label: 'Faster Optimization' },
      { value: '95%', label: 'Accuracy Improvement' },
      { value: '$50M+', label: 'ROI Potential' },
      { value: '99.9%', label: 'Quantum Advantage' }
    ]
  },
  {
    id: 'ai-autonomous-enterprise-transformation-2026',
    title: 'AI Autonomous Enterprise Transformation 2026: $25M ROI Case Study',
    excerpt: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.',
    type: 'case-study',
=======
    category: 'Success Story',
    href: '/case-studies/ai-transformation-mega-success-2026',
    category: 'Enterprise Transformation',
    href: '/case-studies/ai-autonomous-enterprise-transformation-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '$25M', label: 'Total ROI' },
      { value: '99%', label: 'Automation' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '18 months', label: 'Implementation' }
    ]
  },
  {
=======
=======
    id: 'ai-governance-maturity-model-2026',
    title: 'AI Governance Maturity Model 2026: From Ad‑Hoc to Audit‑Ready',
    excerpt: 'Move from ad‑hoc controls to audit‑ready AI governance with scorecards and KPIs.',
    type: 'article',
    readTime: '10 min read',
    category: 'AI Strategy',
    href: '/blog/ai-governance-maturity-model-2026',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '12', label: 'Scorecard Areas' },
      { value: '90 days', label: 'To Audit‑Ready' }
    ]
  },
  {
    id: 'ai-customer-data-platforms-2026',
    title: 'AI Customer Data Platforms 2026: Real‑Time Personalization at Scale',
    excerpt: 'Blueprint for AI‑native CDPs powering privacy‑safe, sub‑second personalization.',
    type: 'article',
    readTime: '9 min read',
    category: 'Architecture',
    href: '/blog/ai-customer-data-platforms-2026',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '<1s', label: 'Personalization' },
      { value: 'PII‑safe', label: 'Privacy' }
    ]
  },
  {
    id: 'edge-llm-latency-patterns',
    title: 'Edge LLM Latency Patterns: Sub‑200ms Interactions',
    excerpt: 'Streaming, prefetch, and edge compute patterns for instant‑feel AI UX.',
    type: 'article',
    readTime: '7 min read',
    category: 'Edge Computing',
    href: '/blog/edge-llm-latency-patterns',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '<200ms', label: 'P95 Latency' },
      { value: '✔️', label: 'Streaming' }
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
    id: 'ai-synthetic-data-2026',
    title: 'AI Synthetic Data 2026: Secure, Scalable, and Bias-Aware Generation',
    excerpt: 'Use synthetic data to accelerate AI while protecting privacy and reducing labeling costs.',
    type: 'article',
    readTime: '12 min read',
    category: 'Data Platforms',
    href: '/blog/ai-synthetic-data-2026',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '≤1%', label: 'Re-ID Risk' },
      { value: '50–80%', label: 'Cost Reduction' }
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
    id: 'ai-reliable-rag-2025',
    title: 'Reliable RAG 2025: Production Patterns for Grounded Answers',
    excerpt: 'Reduce hallucinations and latency with hardened RAG patterns: contracts, caching, routing, and evals.',
    type: 'article',
    readTime: '9 min read',
    category: 'AI Platforms',
    href: '/blog/ai-reliable-rag-2025',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '30–70%', label: 'Cost Reduction' },
      { value: '<200ms', label: 'P95 Latency' }
    ]
  },
  {
    id: 'platform-engineering-scorecards-2026',
    title: 'Platform Engineering Scorecards 2026: Measurable DevEx & Reliability',
    excerpt: 'Define and track platform scorecards: golden paths, SLO coverage, lead time, and cost per unit.',
    type: 'article',
    readTime: '10 min read',
    category: 'Strategy',
    href: '/blog/platform-engineering-scorecards-2026',
    featured: true,
    publishedDate: '2025-09-29'
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
    id: 'ai-finops-scorecards-2025',
    title: 'AI FinOps Scorecards 2025: Control LLM Spend',
    excerpt: 'Cut LLM costs 30–70% with scorecards, routing, caching, and prompt budgets.',
    type: 'article',
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
  }
];

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

  const displayedItems = contentItems.slice(0, maxItems);

  useEffect(() => {
    if (isRotating && displayedItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  ];
=======
>>>>>>> cursor/create-and-deploy-new-content-1272

const contentItems: ContentItem[] = [
  {
    id: 'ai-autonomous-infrastructure-2026',
    title: 'AI Autonomous Infrastructure 2026: Self-Healing Systems & Zero-Touch Operations',
    excerpt: 'Master autonomous infrastructure with self-healing systems, predictive maintenance, and zero-touch operations. Achieve 99.9% uptime and 90% cost reduction.',
    type: 'article',
    readTime: '28 min read',
    category: 'Infrastructure',
    href: '/blog/ai-autonomous-infrastructure-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '95%', label: 'Automation' },
      { value: '$15M+', label: 'Annual Savings' }
    ]
  },
  {
    id: 'ai-quantum-hybrid-computing-2026',
    title: 'AI Quantum Hybrid Computing 2026: Next-Generation Intelligence Revolution',
    excerpt: 'Explore the revolutionary potential of quantum-AI hybrid computing. Achieve 1000x faster optimization, 95% accuracy improvements, and breakthrough capabilities.',
    type: 'article',
    readTime: '32 min read',
    category: 'Quantum Computing',
    href: '/blog/ai-quantum-hybrid-computing-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '1000x', label: 'Faster Optimization' },
      { value: '95%', label: 'Accuracy Improvement' },
      { value: '$50M+', label: 'ROI Potential' },
      { value: '99.9%', label: 'Quantum Advantage' }
    ]
  },
  {
    id: 'ai-autonomous-enterprise-transformation-2026',
    title: 'AI Autonomous Enterprise Transformation 2026: $25M ROI Case Study',
    excerpt: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.',
    type: 'case-study',
    href: '/case-studies/ai-transformation-mega-success-2026',
=======
>>>>>>> cursor/create-and-deploy-new-content-aa72
    category: 'Enterprise Transformation',
    href: '/case-studies/ai-autonomous-enterprise-transformation-2026',
    featured: true,
    publishedDate: '2026-01-25',
    metrics: [
      { value: '$25M', label: 'Total ROI' },
      { value: '99%', label: 'Automation' },
      { value: '90%', label: 'Cost Reduction' },
      { value: '18 months', label: 'Implementation' }
    ]
  },
  {
=======
>>>>>>> c52084ad473a5b64cedbe0b58750591f18f661da
>>>>>>> cursor/create-and-deploy-new-content-aa72
    id: 'ai-governance-maturity-model-2026',
    title: 'AI Governance Maturity Model 2026: From Ad‑Hoc to Audit‑Ready',
    excerpt: 'Move from ad‑hoc controls to audit‑ready AI governance with scorecards and KPIs.',
    type: 'article',
    readTime: '10 min read',
    category: 'AI Strategy',
    href: '/blog/ai-governance-maturity-model-2026',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '12', label: 'Scorecard Areas' },
      { value: '90 days', label: 'To Audit‑Ready' }
    ]
  },
  {
    id: 'ai-customer-data-platforms-2026',
    title: 'AI Customer Data Platforms 2026: Real‑Time Personalization at Scale',
    excerpt: 'Blueprint for AI‑native CDPs powering privacy‑safe, sub‑second personalization.',
    type: 'article',
    readTime: '9 min read',
    category: 'Architecture',
    href: '/blog/ai-customer-data-platforms-2026',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '<1s', label: 'Personalization' },
      { value: 'PII‑safe', label: 'Privacy' }
    ]
  },
  {
    id: 'edge-llm-latency-patterns',
    title: 'Edge LLM Latency Patterns: Sub‑200ms Interactions',
    excerpt: 'Streaming, prefetch, and edge compute patterns for instant‑feel AI UX.',
    type: 'article',
    readTime: '7 min read',
    category: 'Edge Computing',
    href: '/blog/edge-llm-latency-patterns',
    featured: true,
    publishedDate: '2025-10-15',
    metrics: [
      { value: '<200ms', label: 'P95 Latency' },
      { value: '✔️', label: 'Streaming' }
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
    id: 'ai-synthetic-data-2026',
    title: 'AI Synthetic Data 2026: Secure, Scalable, and Bias-Aware Generation',
    excerpt: 'Use synthetic data to accelerate AI while protecting privacy and reducing labeling costs.',
    type: 'article',
    readTime: '12 min read',
    category: 'Data Platforms',
    href: '/blog/ai-synthetic-data-2026',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '≤1%', label: 'Re-ID Risk' },
      { value: '50–80%', label: 'Cost Reduction' }
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
    id: 'ai-reliable-rag-2025',
    title: 'Reliable RAG 2025: Production Patterns for Grounded Answers',
    excerpt: 'Reduce hallucinations and latency with hardened RAG patterns: contracts, caching, routing, and evals.',
    type: 'article',
    readTime: '9 min read',
    category: 'AI Platforms',
    href: '/blog/ai-reliable-rag-2025',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '30–70%', label: 'Cost Reduction' },
      { value: '<200ms', label: 'P95 Latency' }
    ]
  },
  {
    id: 'platform-engineering-scorecards-2026',
    title: 'Platform Engineering Scorecards 2026: Measurable DevEx & Reliability',
    excerpt: 'Define and track platform scorecards: golden paths, SLO coverage, lead time, and cost per unit.',
    type: 'article',
    readTime: '10 min read',
    category: 'Strategy',
    href: '/blog/platform-engineering-scorecards-2026',
    featured: true,
    publishedDate: '2025-09-29'
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
    id: 'ai-finops-scorecards-2025',
    title: 'AI FinOps Scorecards 2025: Control LLM Spend',
    excerpt: 'Cut LLM costs 30–70% with scorecards, routing, caching, and prompt budgets.',
    type: 'article',
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
  }
];

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

  const displayedItems = contentItems.slice(0, maxItems);

  useEffect(() => {
    if (isRotating && displayedItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
      }, rotationInterval);
      return () => clearInterval(interval);
=======
export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI Foundation Models 2026: Enterprise Implementation Guide",
      description: "Master AI foundation models with 90% cost reduction and 300% performance improvement.",
      category: "AI Architecture",
      readTime: "25 min",
      link: "/blog/ai-foundation-models-2026",
      featured: true,
      metrics: {
        costReduction: "90%",
        performance: "300%"
      }
    },
    {
      id: 2,
      title: "AI Operational Excellence 2026: 90% Automation & $8M+ Savings",
      description: "Achieve operational excellence with AI-driven automation and $8M+ annual savings.",
      category: "AI Operations",
      readTime: "20 min",
      link: "/blog/ai-operational-excellence-2026",
      featured: true,
      metrics: {
        automation: "90%",
        savings: "$8M+"
      }
    },
    {
      id: 3,
      title: "AI Agent Orchestration 2026: Multi-Agent System Architecture",
      description: "Master multi-agent systems with 95% automation efficiency and $5M+ ROI.",
      category: "AI Engineering",
      readTime: "22 min",
      link: "/blog/ai-agent-orchestration-2026",
      featured: true,
      metrics: {
        efficiency: "95%",
        roi: "$5M+"
      }
>>>>>>> cursor/create-and-deploy-new-content-13ae
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ FEATURED CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, real-world case studies, and breakthrough technologies 
            that are transforming industries in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <Link key={content.id} href={content.link} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  {content.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">{content.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {content.description}
                </p>
                
                <div className="flex gap-4 mb-4">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}