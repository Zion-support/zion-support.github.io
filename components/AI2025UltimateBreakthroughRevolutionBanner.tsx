import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-bounce delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT - NEW
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Revolutionary AI technology delivering <span className="text-yellow-400 font-bold text-2xl">5,000% ROI</span> through quantum-neural fusion and autonomous decision systems
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-yellow-400/50">
              <span className="text-yellow-400 font-bold text-lg">5,000% ROI</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-green-400/50">
              <span className="text-green-400 font-bold text-lg">99.9% Accuracy</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-blue-400/50">
              <span className="text-blue-400 font-bold text-lg">10,000x Faster</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-purple-400/50">
              <span className="text-purple-400 font-bold text-lg">24/7 Autonomous</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📊 View Success Stories
            </Link>
            <Link 
              href="/webinars/ai-2025-breakthrough-demo" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🎥 Watch Demo
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            ⚡ Limited Time: Get 50% off implementation for the first 100 enterprises
          </div>
        </div>
      </div>
    </div>
  );
}