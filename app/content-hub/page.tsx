// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Sparkles, Zap, Shield, Brain, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Content Hub - AI Insights, Case Studies & Resources | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, whitepapers, and resources. Stay ahead with the latest in AI technology and enterprise transformation.',
  keywords: 'AI content hub, AI resources, AI insights, case studies, whitepapers, AI trends, enterprise AI',
  openGraph: {
    title: 'Content Hub - AI Insights, Case Studies & Resources',
    description: 'Explore our comprehensive collection of AI insights, case studies, whitepapers, and resources.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-hub',
    images: [
      {
        url: '/content-hub-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Content Hub',
      },
    ],
  },
};

export default function ContentHubPage() {
  const blogCategories = [
    {
      title: 'AI Implementation',
      articles: [
        { title: 'AI Cost Calculator 2026', slug: '/blog/ai-cost-calculator-2026', readTime: '14 min', featured: true },
        { title: 'AI 2027 Cost Optimization Playbook', slug: '/blog/ai-2027-cost-optimization-playbook', readTime: '13 min', featured: true },
        { title: 'AI Implementation Playbook 2026', slug: '/blog/ai-implementation-playbook-2026', readTime: '16 min', featured: true },
        { title: 'AI Multimodal Enterprise Solutions 2026', slug: '/blog/ai-multimodal-enterprise-2026', readTime: '15 min', featured: true },
        { title: 'AI Governance Maturity Model 2026', slug: '/blog/ai-governance-maturity-model-2026', readTime: '14 min', featured: true },
        { title: 'AI Enterprise GenAI Agent Platform 2026', slug: '/blog/ai-enterprise-genai-agent-platform-2026', readTime: '20 min', featured: true },
        { title: 'AI Voice Interfaces Enterprise 2026', slug: '/blog/ai-voice-interfaces-enterprise-2026', readTime: '18 min', featured: true },
        { title: 'AI Autonomous Agents 2025', slug: '/blog/ai-autonomous-agents-2025', readTime: '18 min', featured: false },
        { title: 'AI Governance Framework 2025', slug: '/blog/ai-governance-framework-2025', readTime: '15 min', featured: false },
      ]
    },
    {
      title: 'AI Security & Compliance',
      articles: [
        { title: 'AI Cybersecurity Automation 2026', slug: '/blog/ai-cybersecurity-automation-2026', readTime: '18 min', featured: true },
        { title: 'AI Security Compliance 2025', slug: '/blog/ai-security-compliance-2025', readTime: '12 min', featured: false },
        { title: 'Enterprise AI Security 2025', slug: '/blog/enterprise-ai-security-2025', readTime: '14 min', featured: false },
        { title: 'GenAI Guardrails 2025', slug: '/blog/genai-guardrails-2025', readTime: '11 min', featured: false },
        { title: 'AI Data Privacy 2026', slug: '/blog/ai-data-privacy-2026', readTime: '12 min', featured: true },
      ]
    },
    {
      title: 'AI Sustainability & Green Tech',
      articles: [
        { title: 'AI for Sustainability & Green Tech 2026', slug: '/blog/ai-sustainability-green-tech-2026', readTime: '12 min', featured: true },
        { title: 'Edge AI Blueprint 2026', slug: '/blog/edge-ai-blueprint-2026', readTime: '10 min', featured: false },
        { title: 'AI Cost Optimization 2025', slug: '/blog/llm-cost-optimization-2025', readTime: '9 min', featured: false },
      ]
    },
    {
      title: 'AI Analytics & Value',
      articles: [
        { title: 'AI Value Stream Analytics 2026', slug: '/blog/ai-value-stream-analytics-2026', readTime: '9 min', featured: true },
        { title: 'AI Trustworthy Agents 2026', slug: '/blog/ai-trustworthy-agents-2026', readTime: '11 min', featured: true },
        { title: 'AI Roadmaps 2026', slug: '/blog/ai-roadmaps-2026', readTime: '8 min', featured: false },
        { title: 'AI FinOps Scorecards 2025', slug: '/blog/ai-finops-scorecards-2025', readTime: '7 min', featured: false },
        { title: 'AI Operational Resilience 2026', slug: '/blog/ai-operational-resilience-2026', readTime: '14 min', featured: true },
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'AI Supply Chain Optimization 2026',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '$50M Savings & 99.5% Efficiency',
      slug: '/case-studies/ai-supply-chain-optimization-2026',
      featured: true
    },
    {
      title: 'AI Finance Automation',
      company: 'FinServe Corp',
      industry: 'Financial Services',
      results: '95% Process Reduction & $3M Savings',
      slug: '/case-studies/ai-finance-automation',
      featured: true
    },
    {
      title: 'Retail AI Transformation',
      company: 'RetailAI Corp',
      industry: 'Retail',
      results: '150% Revenue Growth',
      slug: '/case-studies/retail-ai-transformation',
      featured: true
    },
    {
      title: 'HealthTech AI Transformation',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      results: '40% Better Diagnostics',
      slug: '/case-studies/healthtech-ai-transformation',
      featured: false
    },
    {
      title: 'TechCorp AI Transformation',
      company: 'TechCorp Inc.',
      industry: 'E-commerce',
      results: '90% Efficiency Gain',
      slug: '/case-studies/techcorp-ai-transformation',
      featured: false
    },
    {
      title: 'Manufacturing AI Transformation',
      company: 'ManufacturingAI Ltd',
      industry: 'Manufacturing',
      results: '75% Cost Reduction',
      slug: '/case-studies/manufacturing-ai-transformation',
      featured: false
    }
  ];

  const tools = [
    {
      title: 'AI ROI Calculator',
      description: 'Calculate the potential return on investment for AI implementation',
      type: 'Calculator',
      featured: true
    },
    {
      title: 'AI Cost Calculator',
      description: 'Estimate AI implementation costs and ongoing expenses',
      type: 'Calculator',
      featured: false
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI implementation',
      type: 'Assessment',
      featured: false
    },
    {
      title: 'AI Security Checklist',
      description: 'Comprehensive checklist for AI security implementation',
      type: 'Checklist',
      featured: false
    }
  ];

  // Merged content definitions above
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
                🔥 BREAKTHROUGH CONTENT HUB • January 30, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Content Hub
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 font-semibold">
              Your Gateway to Enterprise Intelligence & Innovation
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of AI insights, case studies, whitepapers, 
              and resources. Stay ahead with the latest in AI technology and enterprise transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#featured-content" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Explore Featured Content
              </a>
              <a 
                href="#newsletter" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured-content" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Content
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our latest breakthrough research, case studies, and implementation guides 
              that are transforming enterprises worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/blog/ai-2025-enterprise-autonomous-systems" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    🤖
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>TRENDING</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold border border-fuchsia-500/30">
                    Autonomous AI Systems
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  AI-Powered Enterprise Autonomous Systems
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Transform your enterprise with autonomous AI systems achieving 99.99% uptime, 
                  95% cost reduction, and complete operational autonomy with self-healing capabilities.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    45 min
                  </span>
                  <span>Jan 30, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* New Featured: Cost Optimization Playbook */}
            <Link href="/blog/ai-2027-cost-optimization-playbook" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">💸</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    Cost Optimization
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                  AI 2027 Cost Optimization Playbook
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Cut AI spend 30–70% with routing, caching, quantization, and guardrails—without sacrificing quality.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    13 min
                  </span>
                  <span>Sep 30, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  <span>Read Guide</span>
                </div>
              </div>
            </Link>

            {/* Newly Featured: Agentic Workflow Orchestration */}
            <Link href="/blog/agentic-workflow-orchestration-2026" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🧩</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-xs font-bold shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold border border-fuchsia-500/30">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 text-xs font-semibold border border-fuchsia-500/30">
                    Agentic Workflows
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-400 transition-colors duration-300 leading-tight">
                  Agentic Workflow Orchestration 2026
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Guardrails, reviews, and observability to ship reliable multi-agent workflows with measurable ROI.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span>16 min</span>
                  <span>Sep 30, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  <span>Read Article</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/fortune-500-ai-autonomous-transformation-2025" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    🏆
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      <span>SUCCESS</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                    Fortune 500 Case Study
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 leading-tight">
                  Fortune 500 AI Autonomous Transformation
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Discover how a Fortune 500 manufacturing giant achieved $2.3B cost savings, 
                  99.97% uptime, and complete operational autonomy in just 6 months.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    35 min
                  </span>
                  <span>Jan 30, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* New Featured: AI Executive Playbook 2027 */}
            <Link href="/blog/ai-executive-playbook-2027" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">📘</div>
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
                    Executive Strategy
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  AI Executive Playbook 2027
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Plan, fund, and govern reliable AI with measurable outcomes across the enterprise.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span>12 min</span>
                  <span>Jan 2027</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  <span>Read Playbook</span>
                </div>
              </div>
            </Link>

            {/* New Featured Article */}
            <Link href="/blog/ai-enterprise-transformation-2027" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🏢</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold shadow-lg">
                      <span>NEW</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                    Enterprise AI
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  AI Enterprise Transformation 2027
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Pragmatic roadmap to ship reliable, cost‑effective AI with measurable outcomes across CX, ops, and platforms.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span>14 min</span>
                  <span>Jan 2027</span>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  <span>Read Article</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our comprehensive content library organized by topic, industry, and expertise level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Trends & Predictions */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Trends & Predictions</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Stay ahead with the latest AI trends, predictions, and future outlook for enterprise technology.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-2025-enterprise-autonomous-systems" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                  <span>Autonomous AI Systems</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-2025-zero-trust-security-architecture" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                  <span>Zero-Trust AI Security</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-2026-mega-trends-predictions" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group">
                  <span>AI 2026 Mega Trends</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Real-world case studies showcasing how organizations achieve remarkable results with AI transformation.
              </p>
              <div className="space-y-3">
                <Link href="/case-studies/fortune-500-ai-autonomous-transformation-2025" className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors group">
                  <span>Fortune 500 Transformation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/case-studies/fintech-ai-transformation-september-2025" className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors group">
                  <span>FinTech AI Success</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/case-studies/healthcare-ai-diagnostic-system-2025" className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors group">
                  <span>Healthcare AI Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Technical Deep Dives */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Technical Deep Dives</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                In-depth technical articles covering quantum AI, neural interfaces, and advanced AI technologies.
              </p>
              <div className="space-y-3">
                <Link href="/blog/quantum-ai-breakthrough-2026" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group">
                  <span>Quantum AI Breakthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-neural-interfaces-enterprise-2026" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group">
                  <span>Neural Interfaces 2026</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-autonomous-systems-2026" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group">
                  <span>Autonomous AI Systems</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Implementation Guides */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation Guides</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Practical guides and blueprints for implementing AI solutions in your organization.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-enterprise-transformation-roadmap-2026" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group">
                  <span>Enterprise AI Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-implementation-best-practices-2025" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group">
                  <span>Best Practices</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-roi-optimization-2025" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group">
                  <span>ROI Optimization</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-2027-cost-optimization-playbook" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group">
                  <span>Cost Optimization Playbook</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Industry Insights */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Industry Insights</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Industry-specific AI insights and transformation strategies for various sectors.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-manufacturing-transformation-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group">
                  <span>Manufacturing AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-finance-transformation-2025" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group">
                  <span>Finance AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/ai-healthcare-revolution-2025" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group">
                  <span>Healthcare AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Resources & Tools */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resources & Tools</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Downloadable resources, calculators, and tools to help with your AI transformation journey.
              </p>
              <div className="space-y-3">
                <Link href="/tools/ai-roi-calculator" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors group">
                  <span>AI ROI Calculator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/resources/ai-implementation-checklist" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors group">
                  <span>Implementation Checklist</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/resources/ai-whitepapers" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors group">
                  <span>AI Whitepapers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2026-enterprise-automation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Automation 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how autonomous AI systems are revolutionizing enterprise operations with 400% ROI.
                </p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-supply-chain-optimization" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Case Study
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Supply Chain AI Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  See how AI optimization reduced supply chain costs by 60% and improved delivery times.
                </p>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-multimodal-integration-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Technical
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Multimodal AI Integration 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to integrate text, image, and voice AI systems for enhanced user experiences.
                </p>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2026-revolutionary-trends" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Trends
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI 2026: Revolutionary Trends
                </h3>
                <p className="text-gray-600 mb-4">
                  The most important AI shifts reshaping enterprise strategy and execution in 2026.
                </p>
                <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Enterprise
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Enterprise Autonomous Systems 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Patterns and guardrails to scale reliable agentic automation across the enterprise.
                </p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Technical
                  </span>
                  <span className="text-sm text-gray-500">14 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Quantum AI Breakthrough 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  How quantum‑enhanced inference unlocks 1000x speedups for complex optimization.
                </p>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Stay Ahead of the AI Revolution</h2>
                <Sparkles className="w-8 h-8 text-fuchsia-400" />
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get weekly insights, case studies, and breakthrough research delivered directly to your inbox. 
                Join 50,000+ AI leaders and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    50K+
                  </div>
                  <div className="text-gray-400 text-sm">AI Professionals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    Weekly
                  </div>
                  <div className="text-gray-400 text-sm">Insights & Updates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    Free
                  </div>
                  <div className="text-gray-400 text-sm">Premium Content</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Join 50,000+ professionals. Unsubscribe anytime. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can drive your success. Join 500+ leading organizations 
            that trust Zion Tech Group to deliver breakthrough AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Call +1 302 464 0950</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}