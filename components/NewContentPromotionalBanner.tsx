import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT RELEASED
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI 2025-2026 Content Showcase
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Discover breakthrough AI technologies, quantum computing solutions, and advanced automation 
            delivering unprecedented ROI from 2,500% to 50,000%.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link 
            href="/ai-2025-breakthrough-content-showcase"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-white font-semibold text-sm mb-1">AI 2025 Breakthrough</h3>
              <p className="text-blue-100 text-xs">50,000% ROI Achieved</p>
            </div>
          </Link>

          <Link 
            href="/ai-2026-revolutionary-technology-showcase"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌌</div>
              <h3 className="text-white font-semibold text-sm mb-1">AI 2026 Revolutionary</h3>
              <p className="text-blue-100 text-xs">Infinite ROI Potential</p>
            </div>
          </Link>

          <Link 
            href="/quantum-computing-solutions-2025"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h3 className="text-white font-semibold text-sm mb-1">Quantum Computing</h3>
              <p className="text-blue-100 text-xs">15,000% ROI Success</p>
            </div>
          </Link>

          <Link 
            href="/advanced-automation-solutions-2025"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-white font-semibold text-sm mb-1">Advanced Automation</h3>
              <p className="text-blue-100 text-xs">10,000% ROI Breakthrough</p>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/ai-2025-breakthrough-content-showcase"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Breakthrough Content
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}