import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Hub - Latest AI Insights, Case Studies & Resources | Zion Tech Group',
  description: 'Access our comprehensive library of AI insights, breakthrough research, case studies, and implementation guides. Stay ahead with cutting-edge AI knowledge and proven strategies.',
  keywords: 'AI content hub, AI insights, AI case studies, AI research, AI implementation guides, AI trends, enterprise AI resources',
  openGraph: {
    title: 'Content Hub - Latest AI Insights, Case Studies & Resources',
    description: 'Access our comprehensive library of AI insights, breakthrough research, case studies, and implementation guides.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-hub',
    images: [
      {
        url: '/content-hub/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Content Hub',
      },
    ],
  },
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 px-4 py-2 rounded-full text-sm font-semibold text-blue-800 mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Latest Content - January 2025
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Content Hub
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Knowledge & Insights
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover cutting-edge AI research, breakthrough predictions, proven implementation strategies, 
          and real-world success stories that are transforming enterprises worldwide.
        </p>
      </div>

      {/* Featured Content Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
          <p className="text-lg text-gray-600">Our most popular and impactful AI insights</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article 1 */}
          <Link href="/blog/ai-2025-mega-breakthrough-predictions" className="group lg:col-span-2">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-red-300 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                  <div className="text-sm text-gray-500 mt-1">25 min read</div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                AI 2025 Mega Breakthrough Predictions: The Next Frontier of Enterprise Intelligence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Discover the revolutionary AI breakthroughs predicted for 2025 that will transform enterprise operations. 
                From autonomous AI agents to neural interfaces and quantum-enhanced computing achieving 300% productivity gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Published Jan 20, 2025</span>
                  <span>•</span>
                  <span>Featured Content</span>
                </div>
                <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/fortune-500-autonomous-operations-success" className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </span>
                  <div className="text-sm text-gray-500 mt-1">Fortune 500</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                Fortune 500 Autonomous Operations Success: 400% ROI in 18 Months
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover how a Fortune 500 manufacturing company achieved 400% ROI, 90% process automation, 
                and $50M in annual savings through comprehensive autonomous AI operations implementation.
              </p>
              
              {/* Results Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">400%</div>
                  <div className="text-xs text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">90%</div>
                  <div className="text-xs text-gray-600">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$50M</div>
                  <div className="text-xs text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">18</div>
                  <div className="text-xs text-gray-600">Months</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Published Jan 20, 2025</span>
                  <span>•</span>
                  <span>Real Results</span>
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Categories</h2>
          <p className="text-lg text-gray-600">Explore our comprehensive library of AI resources</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog Articles */}
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Blog Articles
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Latest AI insights, trends, and breakthrough predictions from industry experts
              </p>
              <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Explore Articles →
              </div>
            </div>
          </Link>

          {/* Case Studies */}
          <Link href="/case-studies" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Real-world success stories and proven results from enterprise AI implementations
              </p>
              <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                View Studies →
              </div>
            </div>
          </Link>

          {/* Implementation Guides */}
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Implementation Guides
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step guides for implementing AI solutions and achieving measurable results
              </p>
              <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Read Guides →
              </div>
            </div>
          </Link>

          {/* Research & Insights */}
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                Research & Insights
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Cutting-edge research, breakthrough discoveries, and future predictions
              </p>
              <div className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                Explore Research →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-lg text-gray-600">Stay updated with our newest AI insights and research</p>
          </div>
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <Link href="/blog/ai-2025-mega-breakthrough-predictions" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-red-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                AI 2025 Mega Breakthrough Predictions
              </h3>
              <p className="text-gray-600 mb-4">
                Discover revolutionary AI breakthroughs predicted for 2025 that will transform enterprise operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Jan 20, 2025</div>
                <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="/blog/ai-autonomous-business-operations-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Guide
                </span>
                <span className="text-sm text-gray-500">30 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Autonomous Business Operations 2025
              </h3>
              <p className="text-gray-600 mb-4">
                Complete implementation guide for achieving 400% ROI with autonomous AI operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Jan 20, 2025</div>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3 */}
          <Link href="/blog/ai-2026-quantum-breakthrough" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Research
                </span>
                <span className="text-sm text-gray-500">20 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Quantum AI Breakthrough 2026
              </h3>
              <p className="text-gray-600 mb-4">
                Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Jan 20, 2025</div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Get weekly updates on AI trends, breakthrough research, and exclusive content delivered to your inbox.
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
          Join 50,000+ professionals. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}