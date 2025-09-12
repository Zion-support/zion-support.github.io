import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights | Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest technology trends and implementation guides."
        keywords="AI content, technology insights, case studies, resources, AI implementation, technology trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Content Showcase
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
            Discover our latest AI insights, case studies, and resources. From enterprise transformation 
            to startup strategies, get the knowledge you need to succeed in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔥 Featured This Week
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our most popular and impactful content that's helping thousands of professionals 
              transform their businesses with AI and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-lg font-semibold mb-2">AI 2025 Predictions</h3>
                <p className="text-sm opacity-90 mb-3">15 predictions that will shape technology this year</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>🔥 Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-automation-trends-2025-comprehensive-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-lg font-semibold mb-2">AI Automation Trends 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete guide to business transformation</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>⭐ Popular</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-implementation-master-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">150+ page complete framework</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>📋 Essential</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-personalization-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
                <h3 className="text-lg font-semibold mb-2">Retail AI Success Story</h3>
                <p className="text-sm opacity-90 mb-3">45% conversion increase, $5.8M revenue</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>🏆 Success</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🔮</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Predictions
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI 2025: The Year Ahead - 15 Predictions That Will Shape Technology
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore our comprehensive predictions for AI in 2025, from multimodal breakthroughs 
                    to enterprise transformation. Get insights on what's coming next in artificial intelligence.
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

            <Link href="/blog/ai-automation-trends-2025-comprehensive-guide" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🤖</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Automation
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Automation Trends 2025: The Complete Guide to Business Transformation
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover the latest AI automation trends shaping 2025. From enterprise automation 
                    to cost optimization, learn how to transform your business with cutting-edge AI solutions.
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

            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎯</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Technology
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore the future of AI with multimodal applications that combine text, vision, 
                    audio, and more. Learn implementation strategies and best practices for 2025.
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
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-2025-implementation-master-guide" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Implementation Master Guide 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  150+ page comprehensive framework with checklists, templates, and case studies
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Free Download</span>
                  <span>📋 Essential</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-checklist-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Automation Checklist 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step checklist for successful AI automation implementation
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Free Download</span>
                  <span>✅ Checklist</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI ROI Calculator 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Calculate potential return on investment for your AI projects
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Free Tool</span>
                  <span>🧮 Calculator</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories & Case Studies</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-retail-personalization-success-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Retail Personalization Success
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  45% conversion increase and $5.8M additional revenue through AI personalization
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Retail & E-commerce</span>
                  <span>🏆 Success</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Manufacturing Automation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  40% cost reduction and 60% faster processing times in manufacturing
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Manufacturing</span>
                  <span>📈 Results</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  $50M cost savings and 300% efficiency gains in financial services
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Financial Services</span>
                  <span>💼 Enterprise</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content. 
            Join 10,000+ professionals who trust our insights.
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
      </div>
    </div>
  );
}