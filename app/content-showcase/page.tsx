import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI & Technology Insights 2025"
        description="Explore our comprehensive library of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest trends in artificial intelligence, automation, and technology."
        keywords="AI content, technology insights, AI resources, case studies, AI trends, technology articles, AI guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            📚 CONTENT LIBRARY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI & Technology Content Showcase
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Discover our comprehensive library of expert insights, case studies, resources, and analysis. 
            From AI implementation guides to cybersecurity best practices, get the knowledge you need 
            to succeed in 2025.
          </p>
        </header>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Expert Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Free Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🔥 Featured This Week</h2>
            <Link href="/blog" className="text-blue-600 hover:underline font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-year-in-review" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">📊</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Analysis
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI 2025 Year in Review: The Breakthrough Year That Changed Everything
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive analysis of AI breakthroughs, enterprise adoption, and transformative 
                    changes that defined 2025. Key insights, trends, and what's next for 2026.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-8xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Productivity
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Productivity Automation 2025: The Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how leading companies are achieving 40% productivity gains through AI 
                    automation. From email management to project coordination, learn the proven strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    URGENT
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cybersecurity
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threats 2025: Defending Against Next-Gen Attacks
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive analysis of AI-powered cyber threats in 2025. Learn about deepfake 
                    attacks, AI-generated malware, and advanced defense strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-red-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Technology Articles</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert insights on AI trends, implementation guides, and technology analysis
                </p>
                <div className="flex items-center text-blue-600 group-hover:underline">
                  <span className="text-sm font-medium">150+ Articles</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-world success stories and detailed implementation examples
                </p>
                <div className="flex items-center text-green-600 group-hover:underline">
                  <span className="text-sm font-medium">50+ Case Studies</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Resources</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Checklists, templates, calculators, and downloadable guides
                </p>
                <div className="flex items-center text-purple-600 group-hover:underline">
                  <span className="text-sm font-medium">25+ Resources</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
                <p className="text-gray-600 text-sm mb-4">
                  AI implementation, consulting, and custom solutions
                </p>
                <div className="flex items-center text-orange-600 group-hover:underline">
                  <span className="text-sm font-medium">Explore Services</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Trending Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Automation</h3>
                  <p className="text-sm text-gray-600">Productivity & Process Automation</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/ai-productivity-automation-2025" className="block text-blue-600 hover:underline">
                  AI Productivity Automation Guide
                </Link>
                <Link href="/blog/ai-enterprise-automation-2025" className="block text-blue-600 hover:underline">
                  Enterprise AI Implementation
                </Link>
                <Link href="/resources/ai-automation-roi-calculator-2025" className="block text-blue-600 hover:underline">
                  ROI Calculator Tool
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cybersecurity</h3>
                  <p className="text-sm text-gray-600">AI Threats & Defense Strategies</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/ai-cybersecurity-threats-2025" className="block text-red-600 hover:underline">
                  AI Cybersecurity Threats
                </Link>
                <Link href="/blog/ai-security-best-practices-2025" className="block text-red-600 hover:underline">
                  Security Best Practices
                </Link>
                <Link href="/resources/ai-cybersecurity-checklist-2025" className="block text-red-600 hover:underline">
                  Security Checklist
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Startup Growth</h3>
                  <p className="text-sm text-gray-600">Funding, Strategy & Scaling</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/ai-startup-funding-playbook-2025" className="block text-green-600 hover:underline">
                  AI Startup Funding Guide
                </Link>
                <Link href="/blog/startup-growth-hacking-2025" className="block text-green-600 hover:underline">
                  Growth Hacking Strategies
                </Link>
                <Link href="/resources/startup-pricing-strategy-2025" className="block text-green-600 hover:underline">
                  Pricing Strategy Templates
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">☁️</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cloud & DevOps</h3>
                  <p className="text-sm text-gray-600">Infrastructure & Deployment</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/cloud-native-architecture-2025" className="block text-blue-600 hover:underline">
                  Cloud-Native Architecture
                </Link>
                <Link href="/blog/ai-mlops-best-practices-2025" className="block text-blue-600 hover:underline">
                  MLOps Best Practices
                </Link>
                <Link href="/resources/ai-implementation-checklist-2025" className="block text-blue-600 hover:underline">
                  Implementation Checklist
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Data & Analytics</h3>
                  <p className="text-sm text-gray-600">AI Data Strategy & Insights</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/ai-data-strategy-2025" className="block text-purple-600 hover:underline">
                  AI Data Strategy Guide
                </Link>
                <Link href="/blog/ai-performance-optimization-2025" className="block text-purple-600 hover:underline">
                  Performance Optimization
                </Link>
                <Link href="/resources/ai-transformation-readiness-assessment-2025" className="block text-purple-600 hover:underline">
                  Readiness Assessment
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Sustainability</h3>
                  <p className="text-sm text-gray-600">Green Tech & AI Ethics</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <Link href="/blog/ai-sustainability-green-tech-2025" className="block text-green-600 hover:underline">
                  AI for Sustainability
                </Link>
                <Link href="/blog/ai-ethics-responsible-innovation-2025" className="block text-green-600 hover:underline">
                  AI Ethics & Responsibility
                </Link>
                <Link href="/resources/sustainable-ai-playbook-2025" className="block text-green-600 hover:underline">
                  Sustainable AI Playbook
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Content</h2>
            <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ professionals.
            </p>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-sm text-gray-300 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📋 Most Popular Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-productivity-automation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Productivity Automation Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete implementation guide with checklists, templates, and ROI calculator
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">150+ pages</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step checklist for successful AI implementation
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Checklist</span>
                  <span className="text-green-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600">
                  AI Cybersecurity Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Essential security measures for AI systems and implementations
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Security</span>
                  <span className="text-red-600 font-medium group-hover:underline">Download →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Our content is just the beginning. Let us help you implement these insights 
              and transform your organization with AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Get Custom Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}