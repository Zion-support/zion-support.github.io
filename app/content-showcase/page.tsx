import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase: Latest AI & Business Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Expert analysis, proven strategies, and actionable guides to accelerate your AI transformation in 2025."
        keywords="AI content, AI insights, AI case studies, AI resources, AI trends, AI implementation, AI strategy"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Fresh AI & Business Content Just Dropped
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies and manufacturing automation, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Governance Framework */}
          <Link href="/blog/ai-2025-enterprise-ai-governance-framework" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
              <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                AI Governance
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                AI Governance Framework 2025
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete implementation guide for enterprise AI governance. Master risk management, 
                compliance, ethics, and implementation strategies for AI success.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>25 min read</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>

          {/* AI Cost Optimization */}
          <Link href="/blog/ai-cost-optimization-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💰</div>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                AI Engineering
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                AI Cost Optimization 2025
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master AI cost optimization with proven strategies to reduce costs by 40-60% while 
                improving performance and delivery speed.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>18 min read</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>

          {/* Global Logistics Case Study */}
          <Link href="/case-studies/ai-transformation-global-logistics-giant-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📦</div>
              <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Case Study
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Global Logistics AI Success
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                $2.3B revenue impact and 45% cost reduction through comprehensive AI transformation. 
                Real results, proven strategies.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Case Study</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>

          {/* AI Implementation Checklist */}
          <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📋</div>
              <div className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Free Download
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                AI Implementation Master Checklist
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                200+ actionable items for successful AI deployment. Complete guide with templates, 
                checklists, and best practices.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Free Download</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>

          {/* AI Retail Transformation */}
          <Link href="/case-studies/ai-retail-transformation-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🛍️</div>
              <div className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Case Study
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                AI Retail Transformation 2025
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                $50M revenue increase and 40% customer satisfaction improvement through 
                AI-powered personalization and automation.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Case Study</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>

          {/* AI Manufacturing Automation */}
          <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏭</div>
              <div className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Case Study
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                AI Manufacturing Automation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                $15M cost savings, 45% efficiency improvement, and 60% defect reduction 
                through intelligent automation systems.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Case Study</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  New
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog Articles</h3>
              <p className="text-gray-700 mb-6">
                Expert insights, analysis, and practical guides on AI trends, implementation strategies, 
                and business transformation.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-700 mb-6">
                Real-world success stories showcasing AI transformations, ROI achievements, 
                and implementation best practices.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h3>
              <p className="text-gray-700 mb-6">
                Downloadable guides, checklists, templates, and tools to accelerate your 
                AI implementation and success.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Trends */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trending This Week</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Automation</h3>
              <p className="text-sm text-gray-600">Enterprise automation strategies</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-sm text-gray-600">AI cost reduction techniques</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Governance</h3>
              <p className="text-sm text-gray-600">Responsible AI frameworks</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Strategies</h3>
              <p className="text-sm text-gray-600">Maximizing AI investment returns</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
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
      </div>
    </div>
  );
}