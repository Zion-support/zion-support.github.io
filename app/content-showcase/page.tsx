import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest AI insights, case studies, implementation guides, and resources. Fresh content published weekly to help you succeed with AI in 2025."
        keywords="AI content, business insights, case studies, implementation guides, AI resources, latest articles"
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
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies and manufacturing automation, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 This Week's Featured Content
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Expert insights, real-world case studies, and actionable resources to accelerate your AI transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h3 className="text-lg font-semibold mb-2">AI Enterprise Implementation Masterclass</h3>
                <p className="text-sm opacity-90 mb-3">Complete 45-minute guide to implementing AI in enterprise environments</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>45 min read</span>
                  <span className="mx-2">•</span>
                  <span>Masterclass</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Success Story</h3>
                <p className="text-sm opacity-90 mb-3">$50M savings and 300% ROI in 18 months - complete case study</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Master Checklist</h3>
                <p className="text-sm opacity-90 mb-3">150+ actionable items for successful AI deployment</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>150+ items</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                <h3 className="text-lg font-semibold mb-2">AI Market Disruption Analysis 2025</h3>
                <p className="text-sm opacity-90 mb-3">How AI is reshaping every industry with real impact data</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Latest Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">📚 Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            
            <div className="space-y-6">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Masterclass</span>
                        <span className="text-gray-500 text-sm">45 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Enterprise Implementation Masterclass 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Complete guide to implementing AI in enterprise environments. Learn proven strategies, 
                        frameworks, and real-world case studies for successful AI transformation.
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-market-disruption-analysis" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Analysis</span>
                        <span className="text-gray-500 text-sm">25 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        AI Market Disruption Analysis 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        How AI is reshaping every industry with real impact data. Discover which sectors are 
                        being transformed and what it means for your business.
                      </p>
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-enterprise-ai-governance-framework" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Framework</span>
                        <span className="text-gray-500 text-sm">30 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                        AI Enterprise Governance Framework 2025
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Complete framework for responsible AI governance in enterprise environments. 
                        Ensure compliance, ethics, and risk management.
                      </p>
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">🏆 Case Studies</h2>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            
            <div className="space-y-4">
              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                        Fortune 500 AI Success Story
                      </h3>
                      <p className="text-gray-600 text-xs">$50M savings, 300% ROI</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-retail-transformation-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🛍️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                        AI Retail Transformation 2025
                      </h3>
                      <p className="text-gray-600 text-xs">$50M revenue increase, 40% satisfaction</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-manufacturing-automation-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏭</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                        AI Manufacturing Automation 2025
                      </h3>
                      <p className="text-gray-600 text-xs">$15M savings, 45% efficiency</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">📋 Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Master Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150+ actionable items for successful AI deployment across all phases of implementation.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Download Free →
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on AI investments with our comprehensive ROI calculator tool.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Try Calculator →
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-readiness-assessment" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Readiness Assessment
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Evaluate your organization's AI readiness across data, technology, talent, and governance.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Start Assessment →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔥 Trending Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">AI Enterprise Implementation</h3>
              <p className="text-gray-600 text-sm">Complete guides for enterprise AI transformation</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">AI Cost Optimization</h3>
              <p className="text-gray-600 text-sm">Strategies to reduce AI implementation costs</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">AI Governance & Ethics</h3>
              <p className="text-gray-600 text-sm">Responsible AI implementation frameworks</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">AI Market Analysis</h3>
              <p className="text-gray-600 text-sm">Industry trends and disruption insights</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content. 
            Join 10,000+ AI professionals who trust our insights.
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
    </div>
  );
}