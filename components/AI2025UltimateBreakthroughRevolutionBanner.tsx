import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-red-900 to-orange-900 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-red-300 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-semibold mr-4">
                🚀 BREAKTHROUGH 2025
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold">
                ⚡ 5,000% ROI
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI 2025 Ultimate
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Breakthrough Revolution
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              The most revolutionary AI breakthrough of 2025 delivering 
              <span className="text-yellow-400 font-bold"> 5,000% ROI</span> and 
              <span className="text-green-400 font-bold"> 99.9% accuracy</span> in business transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Discover Breakthrough
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/case-studies/ai-2025-breakthrough-success"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5,000%</div>
                <div className="text-lg text-gray-300 mb-4">Guaranteed ROI</div>
                <div className="text-sm text-gray-400">
                  <div className="flex items-center justify-center mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span>99.9% Accuracy</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span>10,000x Faster</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>24/7 Autonomous</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}