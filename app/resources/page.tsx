import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free AI & Technology Resources - Zion Tech Group"
        description="Download free AI implementation guides, checklists, playbooks, and templates. Expert resources to accelerate your AI transformation journey."
        keywords="AI resources, free downloads, AI guides, implementation checklists, technology templates, business resources"
        url="/resources"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free AI & Technology Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our comprehensive collection of AI implementation guides, checklists, playbooks, 
            and templates. Expert resources designed to accelerate your technology transformation journey.
          </p>
        </header>

        {/* Featured Resources Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 MOST POPULAR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our Top Resources
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Get instant access to our most downloaded and highly-rated resources. 
              Join 50,000+ professionals who trust our expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">AI Implementation Checklist</h3>
              <p className="text-sm opacity-90 mb-4">
                150+ actionable items for successful AI deployment
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>25K downloads</span>
                <span>⭐ 4.9/5</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">AI Startup Funding Playbook</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete guide from seed to Series A
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>18K downloads</span>
                <span>⭐ 4.8/5</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">AI Security Hardening</h3>
              <p className="text-sm opacity-90 mb-4">
                Essential security measures for AI systems
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>12K downloads</span>
                <span>⭐ 4.7/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {/* AI Implementation Resources */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🤖 AI Implementation Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Implementation Checklist 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    150+ actionable items for successful AI deployment across your organization
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>25K downloads</span>
                    <span>⭐ 4.9/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-architecture-cost-governance-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧩</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Architecture & Cost Governance
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Guardrails and observability patterns to keep AI reliable and affordable
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>8K downloads</span>
                    <span>⭐ 4.6/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-security-hardening-checklist" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Security Hardening Checklist
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Essential security measures and best practices for AI systems
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>12K downloads</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-roi-calculator-template" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI ROI Calculator Template
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Calculate potential return on AI investments with our comprehensive template
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>15K downloads</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-governance-framework" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Governance Framework
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete framework for responsible AI governance and ethics
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>9K downloads</span>
                    <span>⭐ 4.5/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-data-strategy-template" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Data Strategy Template
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive template for developing AI data strategies
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>7K downloads</span>
                    <span>⭐ 4.4/5</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Startup & Business Resources */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 Startup & Business Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Startup Funding Playbook 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete guide from seed to Series A with $47B market insights
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>18K downloads</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/startup-pricing-strategy-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Startup Pricing Strategy 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Data-driven pricing strategies that validate willingness to pay
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>14K downloads</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/startup-seo-playbook-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Startup SEO Playbook 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete SEO strategy for AI startups and tech companies
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>8K downloads</span>
                    <span>⭐ 4.6/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-go-to-market-strategy" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Go-To-Market Strategy
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Positioning, pricing, and distribution strategies for AI products
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>11K downloads</span>
                    <span>⭐ 4.5/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/startup-pitch-deck-template" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Startup Pitch Deck Template
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional pitch deck template for AI startups
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>16K downloads</span>
                    <span>⭐ 4.9/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-product-market-fit-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Product-Market Fit Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Framework for achieving product-market fit with AI products
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>6K downloads</span>
                    <span>⭐ 4.3/5</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Technical Resources */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">⚙️ Technical Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/cloud-native-architecture-blueprint" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">☁️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Cloud-Native Architecture Blueprint
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete blueprint for building scalable, resilient applications
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>13K downloads</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-model-deployment-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Model Deployment Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Production-ready AI model deployment strategies and best practices
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>10K downloads</span>
                    <span>⭐ 4.6/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/microservices-architecture-patterns" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Microservices Architecture Patterns
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Proven patterns for building scalable microservices architectures
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>9K downloads</span>
                    <span>⭐ 4.5/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-performance-optimization-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Performance Optimization Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Techniques for optimizing AI model performance and reducing costs
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>7K downloads</span>
                    <span>⭐ 4.4/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-testing-strategies" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧪</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Testing Strategies
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive testing strategies for AI systems and models
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>5K downloads</span>
                    <span>⭐ 4.2/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-monitoring-observability-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Monitoring & Observability
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete guide to monitoring and observability for AI systems
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>6K downloads</span>
                    <span>⭐ 4.3/5</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Industry-Specific Resources */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Industry-Specific Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-healthcare-implementation-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Healthcare Implementation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete guide to implementing AI in healthcare organizations
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>12K downloads</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-financial-services-playbook" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Financial Services Playbook
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive AI strategy for financial services organizations
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>10K downloads</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-manufacturing-automation-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Manufacturing Automation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Step-by-step guide to AI automation in manufacturing
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>8K downloads</span>
                    <span>⭐ 4.6/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-retail-transformation-playbook" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Retail Transformation Playbook
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete playbook for AI transformation in retail
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>9K downloads</span>
                    <span>⭐ 4.5/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-education-implementation-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Education Implementation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Guide to implementing AI in educational institutions
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>6K downloads</span>
                    <span>⭐ 4.4/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-government-services-guide" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Government Services Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Framework for implementing AI in government services
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>4K downloads</span>
                    <span>⭐ 4.3/5</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Get New Resources First
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Be the first to access our latest resources, guides, and templates. 
              Join 50,000+ professionals in our community.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our experts can create custom resources, guides, and templates tailored 
              to your specific industry and use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Custom Resources
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}