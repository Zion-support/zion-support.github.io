import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Fresh content covering AI automation, enterprise transformation, data strategy, and implementation guides."
        keywords="AI content, technology insights, case studies, resources, AI implementation, 2025 trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FRESH CONTENT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Technology Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our newest insights, case studies, and resources covering the latest trends in AI, 
            automation, and enterprise technology. Fresh content published weekly.
          </p>
        </header>

        {/* Featured Content Banner */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 This Week's Featured Content
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Don't miss our latest deep-dive articles, real-world case studies, and comprehensive implementation guides
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-advanced-automation-workflows" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-lg font-semibold mb-2">AI Advanced Automation Workflows 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 60% cost reduction and 300% productivity gains</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-transformation-retail-giant-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏪</div>
                <h3 className="text-lg font-semibold mb-2">Retail Giant AI Success Story</h3>
                <p className="text-sm opacity-90 mb-3">300% revenue growth and $25M cost savings through AI transformation</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Master Checklist</h3>
                <p className="text-sm opacity-90 mb-3">200+ actionable items for successful AI deployment</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Blog Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Articles</h2>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-advanced-automation-workflows" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🤖</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Automation
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Advanced Automation Workflows 2025
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Master advanced AI automation workflows that reduce costs by 60% and increase productivity by 300%. 
                    Complete implementation guide with real examples and ROI calculations.
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
            
            <Link href="/blog/ai-2025-enterprise-data-strategy" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">📊</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Data & AI Strategy
                    </span>
                    <span className="text-gray-500 text-sm">32 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Enterprise Data Strategy 2025
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Transform your organization into a data-driven powerhouse with 400% ROI, 90% faster insights, 
                    and $10M+ in value creation through strategic data implementation.
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
            
            <Link href="/blog/ai-2025-market-analysis" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">📈</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Market Analysis
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Market Analysis 2025
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    $47B investment surge and industry transformation insights. Complete analysis of AI market 
                    trends, opportunities, and predictions for 2025.
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

        {/* Latest Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories & Case Studies</h2>
            <Link 
              href="/case-studies" 
              className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-transformation-retail-giant-success-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-green-700 mb-1">New Case Study</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                      Retail Giant AI Transformation
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      300% revenue growth and $25M cost savings through comprehensive AI transformation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Global Retail</span>
                      <span>•</span>
                      <span>$50B Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-manufacturing-transformation-success-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-700 mb-1">Featured</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      Manufacturing AI Success
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      60% cost reduction and 300% productivity increase through AI automation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Fortune 500</span>
                      <span>•</span>
                      <span>$2.3M Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-purple-700 mb-1">Popular</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                      Financial Services AI
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      $50M cost savings and 300% efficiency gains in financial services transformation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Banking</span>
                      <span>•</span>
                      <span>$50M Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link 
              href="/resources" 
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-orange-700 mb-1">Free Download</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                      AI Implementation Master Checklist
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      200+ actionable items for successful AI deployment. Used by Fortune 500 companies.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>PDF & Excel</span>
                      <span>•</span>
                      <span>200+ Items</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-enterprise-data-strategy-playbook-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-purple-700 mb-1">New Resource</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                      AI Enterprise Data Strategy Playbook
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Complete framework for building data-driven organizations with 400% ROI
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>150+ Pages</span>
                      <span>•</span>
                      <span>Free Download</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-700 mb-1">Popular</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      AI Automation Implementation Playbook
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Step-by-step guide to implementing AI automation with 60% cost reduction
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>120+ Pages</span>
                      <span>•</span>
                      <span>Free Download</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            📧 Stay Updated with Latest Content
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get weekly updates on new articles, case studies, and resources. Join 10,000+ professionals 
            who trust our content for AI implementation success.
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
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}