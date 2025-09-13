import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 rounded-2xl mb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold mb-4 text-sm">
                🚀 NEW CONTENT AVAILABLE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Fresh AI Content & 
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent"> Resources</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our latest AI insights, breakthrough case studies, and implementation guides 
                designed to accelerate your success and maximize ROI.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">New Blog Posts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Case Studies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Tutorials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Toolkits</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/blog/ai-2025-revolutionary-trends-comprehensive-analysis"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore New Content
                </Link>
                <Link 
                  href="/resources/ai-2025-ultimate-implementation-toolkit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Toolkit
                </Link>
              </div>
            </div>

            {/* Right Content - Featured Items */}
            <div className="space-y-4">
              {/* Featured Blog Post */}
              <Link href="/blog/ai-2025-revolutionary-trends-comprehensive-analysis" className="block group">
                <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">NEW BLOG</span>
                    </div>
                    <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    AI 2025 Revolutionary Trends
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Comprehensive analysis of breakthrough technologies delivering 10,000%+ ROI
                  </p>
                </div>
              </Link>

              {/* Featured Case Study */}
              <Link href="/case-studies/ai-2025-quantum-breakthrough-50000-roi" className="block group">
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">NEW CASE STUDY</span>
                    </div>
                    <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    Quantum AI Breakthrough
                  </h3>
                  <p className="text-gray-300 text-sm">
                    50,000% ROI achieved in 6 months with quantum AI implementation
                  </p>
                </div>
              </Link>

              {/* Featured Tutorial */}
              <Link href="/tutorials/ai-implementation-step-by-step-masterclass" className="block group">
                <div className="bg-gradient-to-r from-pink-900/40 to-red-900/40 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-semibold">NEW TUTORIAL</span>
                    </div>
                    <svg className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    AI Implementation Masterclass
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Complete step-by-step guide to achieving 10,000%+ ROI
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300 text-sm">New Resources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">10,000%+</div>
              <div className="text-gray-300 text-sm">Proven ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-gray-300 text-sm">Months Payback</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}