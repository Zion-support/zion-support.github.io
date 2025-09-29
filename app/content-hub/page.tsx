import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import InteractiveContentShowcase from '../../components/InteractiveContentShowcase';

export const metadata: Metadata = {
  title: 'AI Content Hub 2026 - Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, implementation guides, and success stories. Find the perfect AI solution for your business transformation.',
  keywords: 'AI content hub, AI blog, AI case studies, AI implementation guides, business transformation, AI insights',
  openGraph: {
    title: 'AI Content Hub 2026 - Zion Tech Group',
    description: 'Explore our comprehensive collection of AI insights, case studies, implementation guides, and success stories.',
    type: 'website',
  },
};

export default function ContentHub() {
  const blogCategories = [
    {
      title: 'AI Implementation',
      articles: [
        { title: 'Agent Benchmarking in Production 2026', slug: '/blog/agent-benchmarking-in-production-2026', readTime: '16 min', featured: true },
        { title: 'Agentic Workflow Orchestration 2026', slug: '/blog/agentic-workflow-orchestration-2026', readTime: '16 min', featured: true },
        { title: 'AI Enterprise Agents Blueprint 2026', slug: '/blog/ai-enterprise-agents-blueprint-2026', readTime: '18 min', featured: true },
        { title: 'AI Agent Observability 2026', slug: '/blog/ai-agent-observability-2026', readTime: '18 min', featured: true },
        { title: 'AI Multimodal Enterprise Solutions 2026', slug: '/blog/ai-multimodal-enterprise-2026', readTime: '15 min', featured: true },
        { title: 'AI Implementation Playbook 2026', slug: '/blog/ai-implementation-playbook-2026', readTime: '12 min', featured: true },
        { title: 'AI Governance Maturity Model 2026', slug: '/blog/ai-governance-maturity-model-2026', readTime: '14 min', featured: true },
        { title: 'Edge LLM Caching Blueprint 2026', slug: '/blog/edge-llm-caching-blueprint-2026', readTime: '13 min', featured: true },
        { title: 'AI Autonomous Agents 2025', slug: '/blog/ai-autonomous-agents-2025', readTime: '18 min', featured: false },
        { title: 'AI Governance Framework 2025', slug: '/blog/ai-governance-framework-2025', readTime: '15 min', featured: false },
      ]
    },
    {
      title: 'AI Security & Compliance',
      articles: [
        { title: 'AI Incident Response Automation 2026', slug: '/blog/ai-incident-response-automation-2026', readTime: '18 min', featured: true },
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
        { title: 'AI Customer Data Platforms 2026', slug: '/blog/ai-customer-data-platforms-2026', readTime: '18 min', featured: true },
        { title: 'AI Trustworthy Agents 2026', slug: '/blog/ai-trustworthy-agents-2026', readTime: '11 min', featured: true },
        { title: 'AI Roadmaps 2026', slug: '/blog/ai-roadmaps-2026', readTime: '8 min', featured: false },
        { title: 'AI Customer Data Platforms 2026', slug: '/blog/ai-customer-data-platforms-2026', readTime: '9 min', featured: true },
        { title: 'AI FinOps Scorecards 2025', slug: '/blog/ai-finops-scorecards-2025', readTime: '7 min', featured: false },
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚀 COMPREHENSIVE AI RESOURCE LIBRARY
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Content Hub 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover, explore, and implement cutting-edge AI solutions with our comprehensive collection 
              of insights, case studies, and implementation guides. Transform your business with proven AI strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">📚 50+ Articles</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">📊 25+ Case Studies</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">⚙️ Implementation Guides</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🏆 Success Stories</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">AI Blog Posts</h3>
                <p className="text-blue-100 text-sm">Latest insights, trends, and strategies</p>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                <p className="text-green-100 text-sm">Real-world success stories and ROI</p>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-2">AI Services</h3>
                <p className="text-purple-100 text-sm">Comprehensive AI solutions</p>
              </div>
            </Link>
            
            <Link href="/contact" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-orange-100 text-sm">Get personalized guidance</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured 2026 Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/ai-autonomous-cloud-ops-2026" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    🚀 NEW 2026
                  </span>
                  <span className="text-sm text-gray-500">30 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Autonomous Cloud Operations 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Master autonomous cloud operations with AI-driven infrastructure management. 
                  Achieve 99.9% uptime, 70% cost reduction, and zero-touch operations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Read Article →</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600">4.9 (25K+ views)</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-fintech-transformation-2026" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    💳 NEW 2026
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI FinTech Transformation 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform financial services with AI-powered solutions. Achieve 95% automation, 
                  70% cost reduction, and $5M+ annual savings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Read Article →</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600">4.8 (18K+ views)</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-automation-2026" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                    🛍️ CASE STUDY
                  </span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  AI Retail Automation Success 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a retail giant achieved $50M revenue growth, 150% growth rate, 
                  and 80% cost reduction with AI automation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold">Read Case Study →</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600">4.9 (22K+ views)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Interactive Content Showcase */}
        <InteractiveContentShowcase />

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Operations</h3>
              <p className="text-gray-600 mb-4">
                Autonomous cloud management, infrastructure automation, and scalable solutions.
              </p>
              <Link href="/blog?category=cloud-operations" className="text-blue-600 font-semibold hover:text-blue-700">
                Explore Cloud Content →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinTech</h3>
              <p className="text-gray-600 mb-4">
                Financial services transformation, risk management, and compliance automation.
              </p>
              <Link href="/blog?category=fintech" className="text-green-600 font-semibold hover:text-green-700">
                Explore FinTech Content →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
              <p className="text-gray-600 mb-4">
                Retail automation, customer experience, and supply chain optimization.
              </p>
              <Link href="/case-studies?category=retail" className="text-orange-600 font-semibold hover:text-orange-700">
                Explore Retail Content →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise</h3>
              <p className="text-gray-600 mb-4">
                Enterprise transformation, process automation, and digital innovation.
              </p>
              <Link href="/case-studies?category=enterprise" className="text-purple-600 font-semibold hover:text-purple-700">
                Explore Enterprise Content →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 mb-4">
                Green technology, carbon reduction, and sustainable AI operations.
              </p>
              <Link href="/blog?category=sustainability" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Explore Sustainability Content →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-8">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Quantum AI, optimization algorithms, and next-generation computing.
              </p>
              <Link href="/blog?category=quantum-computing" className="text-violet-600 font-semibold hover:text-violet-700">
                Explore Quantum Content →
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI trends, new case studies, and exclusive implementation guides 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 10,000+ AI professionals. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive your success. Get personalized recommendations 
              and implementation guidance from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}