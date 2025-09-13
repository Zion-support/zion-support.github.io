import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2025() {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16 border border-purple-500/30">
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold mb-4">
          🚀 NEW CONTENT
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Fresh AI Content & Resources
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover our latest AI insights, case studies, and implementation guides designed to accelerate your success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* New Blog Post */}
        <Link href="/blog/ai-2025-revolutionary-trends-comprehensive-analysis" className="group">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              AI 2025 Revolutionary Trends
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Comprehensive analysis of breakthrough technologies delivering 10,000%+ ROI
            </p>
            <div className="flex items-center text-blue-400 text-sm font-semibold">
              Read More
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* New Case Study */}
        <Link href="/case-studies/ai-2025-quantum-breakthrough-50000-roi" className="group">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Quantum AI Breakthrough
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Fortune 500 company achieves 50,000% ROI in 6 months with quantum AI
            </p>
            <div className="flex items-center text-purple-400 text-sm font-semibold">
              View Case Study
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* New Tutorial */}
        <Link href="/tutorials/ai-implementation-step-by-step-masterclass" className="group">
          <div className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
              AI Implementation Masterclass
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete step-by-step guide to achieving 10,000%+ ROI
            </p>
            <div className="flex items-center text-pink-400 text-sm font-semibold">
              Start Learning
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* New Resource */}
        <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
          <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              Ultimate Implementation Toolkit
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              50+ resources, templates, and tools for AI implementation success
            </p>
            <div className="flex items-center text-green-400 text-sm font-semibold">
              Download Toolkit
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Featured Content */}
        <Link href="/blog/ai-2025-quantum-consciousness-breakthrough" className="group">
          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-yellow-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
              Quantum Consciousness
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary AI consciousness breakthrough transforming industries
            </p>
            <div className="flex items-center text-yellow-400 text-sm font-semibold">
              Explore Now
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Trending Content */}
        <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="group">
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group-hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              <span className="text-red-400 text-sm font-semibold">TRENDING</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              Fortune 500 Transformation
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              15,000% ROI achieved in 4 months with AI transformation
            </p>
            <div className="flex items-center text-indigo-400 text-sm font-semibold">
              Read Success Story
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-300 mb-6">
          Stay updated with the latest AI breakthroughs and implementation strategies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            View All Content
          </Link>
          <Link 
            href="/newsletter" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Subscribe to Updates
          </Link>
        </div>
      </div>
    </div>
  );
}