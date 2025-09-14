import React from 'react';
import Link from 'next/link';
ArrowRightSparklesBrainZapCalendarTrendingUp

export default function NewContent2026UltimatePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-yellow-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NEW 2026 ULTIMATE CONTENT
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Discover the most comprehensive AI predictionsbreakthrough innovationsand revolutionary technologies that will shape the future of humanity.
          </p>

          {/* Content highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
              <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Neural Consciousness</h3>
              <p className="text-sm text-gray-400">Breakthrough AI consciousness predictions</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-purple-300 mb-2">Quantum AI</h3>
              <p className="text-sm text-gray-400">Revolutionary quantum computing integration</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-green-300 mb-2">Future Timeline</h3>
              <p className="text-sm text-gray-400">Detailed 2026 technology roadmap</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-orange-300 mb-2">Market Trends</h3>
              <p className="text-sm text-gray-400">Comprehensive market predictions</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-innovation-showcase" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Innovation Showcase
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/ai-2026-future-predictions-ultimate" 
              className="group border-2 border-pink-400 hover:bg-pink-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Future Predictions
              <Calendar className="inline-block ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Additional content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Latest Blog Posts
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 transition-colors">
              Success Stories
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/guides" className="text-pink-400 hover:text-pink-300 transition-colors">
              Implementation Guides
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors">
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}