import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg mb-6 animate-pulse">
            🚀 NEW: ULTIMATE CONTENT SHOWCASE 2025
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              & Breakthrough Solutions
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive library of AI breakthroughs, quantum computing innovations, 
            and future technology predictions that are transforming industries worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
              <div className="text-blue-100">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15,000%</div>
              <div className="text-blue-100">ROI Potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-blue-100">Future Possibilities</div>
            </div>
          </div>

          {/* Content Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">AI 2025 Breakthroughs</h3>
              <p className="text-blue-100 text-sm">Revolutionary AI innovations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-blue-100 text-sm">Error-corrected quantum systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Automation Mastery</h3>
              <p className="text-blue-100 text-sm">Intelligent process automation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-lg font-bold text-white mb-2">Future Predictions</h3>
              <p className="text-blue-100 text-sm">AI 2026-2030 insights</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#ultimate-content-showcase"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Ultimate Content
            </Link>
            <Link
              href="/ai-2025-revolutionary-breakthrough-announcement"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              View Breakthroughs
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025PromotionBanner;