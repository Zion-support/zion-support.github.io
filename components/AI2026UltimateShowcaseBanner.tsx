import React from 'react';
import Link from 'next/link';

export default function AI2026UltimateShowcaseBanner() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2026 Ultimate Showcase
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover revolutionary AI technologies, breakthrough case studies, and comprehensive 
            implementation guides that will transform your business in 2026.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl font-bold">5000%</span>
              <span className="ml-2">Average ROI</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl font-bold">99.9%</span>
              <span className="ml-2">Success Rate</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl font-bold">10x</span>
              <span className="ml-2">Faster Processing</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-showcase" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Showcase
            </Link>
            <Link 
              href="/case-studies/ai-2026-space-exploration-breakthrough" 
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}