import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest expert insights, case studies, and resources. From AI automation to startup growth strategies, get the knowledge you need to succeed in 2025."
        keywords="AI insights, business resources, case studies, AI automation, startup growth, technology trends, expert content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ FRESH CONTENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Fresh Content Just Dropped
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies, get the knowledge you need to succeed in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI & Business Insights for 2025
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              New this week: AI Productivity Automation, Governance Frameworks, Customer Support Automation, 
              and comprehensive implementation guides. Expert insights to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold mb-2">AI Productivity Automation 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 40% efficiency gains</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-governance-in-practice-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold mb-2">AI Governance in Practice 2025</h3>
                <p className="text-sm opacity-90 mb-3">Controls that reduce risk without blocking delivery</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>12 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-customer-support-automation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎧</div>
                <h3 className="text-lg font-semibold mb-2">AI Customer Support Automation</h3>
                <p className="text-sm opacity-90 mb-3">80% faster response times, 60% cost reduction</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-governance-blueprint-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Governance Blueprint 2025</h3>
                <p className="text-sm opacity-90 mb-3">150+ pages with frameworks and templates</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Automation
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Productivity Automation 2025: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your business productivity with AI automation. Learn proven strategies, 
                    tools, and implementation frameworks that deliver 40% efficiency gains and 60% cost reduction.
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

            <Link href="/blog/ai-governance-in-practice-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Governance
                    </span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Governance in Practice 2025: Controls That Reduce Risk Without Blocking Delivery
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn how to implement effective AI governance frameworks that balance innovation with risk management. 
                    Practical strategies for 2025 that enable responsible AI deployment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-customer-support-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎧</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Customer Support
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Customer Support Automation 2025: 80% Faster Response Times
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your customer support with AI automation. Learn how to achieve 80% faster response times, 
                    60% cost reduction, and 95% customer satisfaction.
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
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-governance-blueprint-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Governance Blueprint 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete governance framework with templates, checklists, and implementation guides.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>150+ pages</span>
                  <span className="text-blue-600 font-medium">Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Implementation Checklist 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150+ actionable items for successful AI implementation across your organization.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Checklist</span>
                  <span className="text-blue-600 font-medium">Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Automation ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on investment for your AI automation projects.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Interactive Tool</span>
                  <span className="text-blue-600 font-medium">Free Access</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories & Case Studies</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏭</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      AI Automation in Manufacturing
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Fortune 500 manufacturing company achieves 40% cost reduction and 60% faster processing times 
                      with AI automation implementation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Fortune 500</span>
                      <span>•</span>
                      <span>$2.3M savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏦</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                      Financial Services AI Transformation
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Major financial institution achieves $50M cost savings and 300% efficiency gains 
                      through comprehensive AI transformation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Enterprise</span>
                      <span>•</span>
                      <span>$50M savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Stay Ahead with AI Insights
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}