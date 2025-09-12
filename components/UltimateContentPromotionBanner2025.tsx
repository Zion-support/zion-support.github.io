import React from 'react';
import Link from 'next/link';

export default function UltimateContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm font-bold rounded-full mb-6 animate-bounce shadow-lg">
            🚀 ULTIMATE CONTENT REVOLUTION 2025
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            BREAKTHROUGH CONTENT SHOWCASE
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs of 2025. 
            <span className="text-yellow-400 font-bold"> 5000%+ ROI guaranteed</span> with our proven implementation strategies.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">5000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">99.7%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">$2.5B</div>
              <div className="text-sm text-gray-300">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Companies Transformed</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Breakthrough Content
            </Link>
            <Link 
              href="/ai-2026-2030-future-predictions-showcase" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Future Predictions
            </Link>
            <Link 
              href="/quantum-computing-solutions-advanced" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Quantum Solutions
            </Link>
          </div>
          
          {/* Featured Content Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success" 
              className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg border border-green-500/30 hover:border-green-400/60 transition-all duration-300"
            >
              <div className="text-green-400 font-bold text-sm mb-2">🏆 ULTIMATE SUCCESS</div>
              <div className="text-white text-sm">5000% ROI Breakthrough Case Study</div>
            </Link>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions" 
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
            >
              <div className="text-purple-400 font-bold text-sm mb-2">🔮 REVOLUTIONARY TRENDS</div>
              <div className="text-white text-sm">AI 2025 Predictions & Insights</div>
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit" 
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
            >
              <div className="text-blue-400 font-bold text-sm mb-2">🛠️ IMPLEMENTATION TOOLKIT</div>
              <div className="text-white text-sm">Ultimate AI Implementation Guide</div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse delay-3000"></div>
    </div>
  );
}