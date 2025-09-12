import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Insights & Resources | Zion Tech Group"
        description="Discover our latest AI insights, case studies, and resources. Fresh content covering AI trends, implementation guides, and industry analysis."
        keywords="AI content, AI insights, AI resources, AI case studies, AI trends, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium">✨ FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Fresh AI & Business Insights
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise 
            transformation to startup funding strategies, get the knowledge you need to succeed in 2025.
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
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Breakthrough Innovations 2025
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Revolutionary technologies reshaping industries. Discover quantum-enhanced AI, 
              autonomous agents, and multimodal systems that are transforming business.
            </p>
            <Link
              href="/blog/ai-2025-breakthrough-innovations"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-block"
            >
              Read Full Article →
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-6xl">🧠</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Innovation
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Breakthrough Innovations 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Revolutionary technologies reshaping industries. From quantum-enhanced AI to 
                    autonomous agents, discover the innovations that will define the next decade.
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

            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🔮</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Predictions
                    </span>
                    <span className="text-gray-500 text-sm">32 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI 2025 Year Ahead Predictions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    15 trends that will reshape technology. Expert predictions covering generative AI, 
                    edge computing, quantum AI, and regulatory frameworks.
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

            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏢</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Enterprise
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Enterprise Transformation 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete guide to transforming your business with AI. Learn proven strategies 
                    for implementation, change management, and achieving measurable results.
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
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SUCCESS
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Fortune 500
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Fortune 500 AI Transformation Success
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    $50M savings and 300% ROI in 18 months. Discover how a leading manufacturing 
                    company transformed their operations with comprehensive AI implementation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-startup-success-story-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🚀</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    STARTUP
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Startup
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Startup Success Story
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    From idea to $10M ARR in 18 months. Learn how a small team built an AI-powered 
                    platform that disrupted an entire industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$10M</div>
                      <div className="text-sm text-gray-600">ARR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">18</div>
                      <div className="text-sm text-gray-600">Months</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow border border-blue-200">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600">AI Implementation Master Guide</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Complete 150+ page guide covering everything from strategy to execution.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>150+ pages</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-strategy-framework-2025" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow border border-green-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600">AI Strategy Framework</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Proven framework for developing and executing AI strategies.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>80+ pages</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-tools-technologies-guide-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow border border-purple-200">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600">AI Tools & Technologies</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Comprehensive guide to AI tools, platforms, and technologies.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>120+ pages</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow border border-orange-200">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600">AI Implementation Checklist</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Step-by-step checklist for successful AI implementation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Checklist</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Free</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Articles & Insights</h3>
                <p className="text-gray-600 mb-4">Expert analysis and insights on AI trends and technologies</p>
                <div className="text-sm text-gray-500">50+ articles</div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">Case Studies</h3>
                <p className="text-gray-600 mb-4">Real-world success stories and implementation examples</p>
                <div className="text-sm text-gray-500">25+ case studies</div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">Resources & Guides</h3>
                <p className="text-gray-600 mb-4">Templates, checklists, and implementation guides</p>
                <div className="text-sm text-gray-500">50+ resources</div>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600">Services</h3>
                <p className="text-gray-600 mb-4">AI consulting, implementation, and support services</p>
                <div className="text-sm text-gray-500">Expert services</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Fresh Content</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get notified when we publish new articles, case studies, and resources. 
            Join 10,000+ professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}