import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcaseBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Main Banner Content */}
          <div className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full mb-6 animate-pulse">
            <span className="text-red-400 font-bold text-lg">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies and breakthrough implementations delivering unprecedented ROI and transformation results.
          </p>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-1">5000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">99.7%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">15,000%</div>
              <div className="text-sm text-gray-300">Quantum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>

          {/* Featured Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-red-900/30 to-pink-900/30 border border-red-500/30 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-red-400 font-bold text-lg mb-2">🚀 AI 2025 Ultimate Breakthrough</div>
              <div className="text-gray-300 text-sm">Revolutionary AI implementations with 5000%+ ROI</div>
            </Link>

            <Link 
              href="/ai-2026-2030-future-predictions-showcase"
              className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-purple-400 font-bold text-lg mb-2">🔮 AI 2026-2030 Predictions</div>
              <div className="text-gray-300 text-sm">Future breakthrough technologies and implementations</div>
            </Link>

            <Link 
              href="/quantum-computing-solutions-advanced"
              className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-cyan-400 font-bold text-lg mb-2">⚛️ Quantum Computing Solutions</div>
              <div className="text-gray-300 text-sm">Advanced quantum-AI fusion with 15,000% ROI</div>
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black rounded-lg font-bold text-lg transition-all duration-300"
            >
              Get Implementation
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Watch Webinar
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by 10,000+ companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Global 2000</div>
              <div className="text-2xl font-bold">Startups</div>
              <div className="text-2xl font-bold">Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}