import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-6 left-1/3 w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-12 right-1/4 w-2 h-2 bg-white rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main announcement */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <span className="text-white text-sm font-semibold animate-pulse">✨ NEW CONTENT RELEASE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI 2025 Content
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Explore our latest breakthrough content featuring cutting-edge AI technologies, 
            <span className="text-yellow-300 font-bold"> proven success stories</span>, and 
            <span className="text-pink-300 font-bold"> future predictions</span> that will transform your business.
          </p>

          {/* Content highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Ultimate Breakthrough Revolution</h3>
              <p className="text-white/80 text-sm mb-4">Discover the most revolutionary AI technologies of 2025</p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2">
                <div className="text-green-400 font-bold text-sm">2,500-5,000% ROI</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Transformation Success</h3>
              <p className="text-white/80 text-sm mb-4">Fortune 500 case study with 10,000% ROI achievement</p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2">
                <div className="text-green-400 font-bold text-sm">10,000% ROI</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-white mb-2">Revolutionary Trends & Predictions</h3>
              <p className="text-white/80 text-sm mb-4">Comprehensive analysis of AI 2025 market opportunities</p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2">
                <div className="text-green-400 font-bold text-sm">$2.5T Market</div>
              </div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
            >
              Read Case Study
            </Link>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
            >
              View Predictions
            </Link>
          </div>

          {/* Additional content links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link 
              href="/blog/ai-2025-comprehensive-trends-analysis"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              📊 Trends Analysis
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              📚 Implementation Guide
            </Link>
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              🧮 ROI Calculator
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              🔥 Webinar Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}