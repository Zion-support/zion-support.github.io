import React from 'react';
import Link from 'next/link';

export default function AI2030ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-3 shadow-lg">
              🔮 NEW: AI 2030 VISION SHOWCASE
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Discover the Future of AI
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Explore quantum consciousness, neural mesh networks, and revolutionary AI technologies that will define 2030
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/ai-2030-vision-showcase"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                🚀 Explore AI 2030
              </Link>
              <Link
                href="/case-studies/ai-2030-quantum-ai-breakthrough"
                className="border-2 border-cyan-400 text-cyan-300 px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                📊 5000% ROI Case Study
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5000%</div>
                <div className="text-sm opacity-90 mb-4">ROI Improvement</div>
                <div className="text-xs opacity-75">Quantum AI Breakthrough</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}