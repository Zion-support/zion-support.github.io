import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights | Zion Tech Group"
        description="Discover our latest AI insights, case studies, and resources. Expert content covering AI trends, implementation guides, and business transformation strategies."
        keywords="AI content, business insights, AI trends, case studies, resources, AI guides, technology content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh AI & Business Content Just Dropped
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources covering the most 
            important trends in AI, automation, and business growth for 2025.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 This Week's Featured Content
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              New this week: AI Enterprise Implementation Masterclass, Market Disruption Analysis, 
              Fortune 500 Success Story, and comprehensive implementation checklist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2025-enterprise-implementation-masterclass"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources/ai-2025-implementation-master-checklist"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Blog Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎓</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Masterclass
                    </span>
                    <span className="text-gray-500 text-sm">45 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Implementation Masterclass 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete guide to implementing AI in enterprise environments. Learn from real Fortune 500 
                    case studies and achieve 340% ROI with proven strategies.
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

            <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">📈</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Market Analysis
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Market Disruption Analysis 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How AI is reshaping every industry with real impact data. Discover market disruption 
                    patterns and strategic implications for businesses.
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

            <Link href="/blog/ai-cost-optimization-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-8xl">💰</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cost Optimization
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Cost Optimization 2025: Ship Faster, Spend Less
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover proven strategies to reduce AI costs by 60% while improving performance. 
                    Complete guide with tools, frameworks, and real-world case studies.
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

        {/* Featured Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Fortune 500
                    </span>
                    <span className="text-gray-500 text-sm">35 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    Fortune 500 AI Transformation Breakthrough 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete case study of how a Fortune 500 company achieved $50M savings and 300% ROI 
                    in just 18 months through strategic AI transformation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-yellow-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏭</div>
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      Manufacturing
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                    AI Manufacturing Automation: $15M Savings & 45% Efficiency
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how a leading manufacturer achieved $15M in cost savings and 45% 
                    efficiency improvement through AI-powered automation and optimization.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$15M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">45%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">60%</div>
                      <div className="text-sm text-gray-600">Defect Reduction</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-gray-600 font-medium group-hover:underline">
                      Read Case Study →
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
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Implementation Master Checklist
                </h3>
                <p className="text-gray-600 mb-4">
                  150+ actionable items for successful AI deployment in enterprise environments.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Free Download</span>
                  <span>150+ items</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-governance-framework-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Governance Framework
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete framework for AI governance, compliance, and risk management.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Free Download</span>
                  <span>150+ pages</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-roi-calculator" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculate potential return on investment for your AI initiatives.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Free Tool</span>
                  <span>Interactive</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?category=ai-governance" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Governance
                </h3>
                <p className="text-gray-600 text-sm">Compliance, ethics, and risk management</p>
              </div>
            </Link>

            <Link href="/blog?category=ai-optimization" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Optimization
                </h3>
                <p className="text-gray-600 text-sm">Performance, cost, and efficiency</p>
              </div>
            </Link>

            <Link href="/blog?category=ai-trends" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Trends
                </h3>
                <p className="text-gray-600 text-sm">Future predictions and insights</p>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Case Studies
                </h3>
                <p className="text-gray-600 text-sm">Real-world success stories</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}