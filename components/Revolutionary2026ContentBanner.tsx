import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI trends, implementation guides, and success stories that are transforming enterprises worldwide. Get 300% ROI insights and cutting-edge strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
              <span className="text-sm text-gray-300">20 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
              AI Enterprise Automation Revolution 2026
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Complete implementation guide with 300% ROI strategies, real-world success stories, and proven frameworks for enterprise transformation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Published Jan 20, 2026</div>
              <Link
                href="/blog/ai-2026-enterprise-automation-revolution"
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Trending
              </span>
              <span className="text-sm text-gray-300">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
              AI Trends 2026: Comprehensive Guide
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Explore revolutionary AI technologies, industry transformations, and future predictions that are reshaping the business landscape.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Published Jan 20, 2026</div>
              <Link
                href="/blog/ai-trends-2026-comprehensive-guide"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="group bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Interactive
              </span>
              <span className="text-sm text-gray-300">5 min tool</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
              AI ROI Calculator 2026
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Calculate your potential ROI from AI implementation. Get personalized insights and recommendations for your organization.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Free Tool</div>
              <Link
                href="/tools/ai-roi-calculator"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                Try Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">90%</div>
            <div className="text-gray-300 text-sm">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$2.8M</div>
            <div className="text-gray-300 text-sm">Average Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">85%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/services/ai-consulting"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm">
            Join 10,000+ professionals already transforming their organizations with AI
          </p>
        </div>
      </div>
    </section>
  );
}