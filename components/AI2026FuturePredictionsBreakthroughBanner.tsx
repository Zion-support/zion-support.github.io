import React from 'react';
import Link from 'next/link';

export default function AI2026FuturePredictionsBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-500/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-indigo-500/30 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔮 BREAKTHROUGH
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              💰 20,000% ROI
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2026 Future Predictions Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-4xl mx-auto">
            Explore the groundbreaking AI predictions for 2026. Discover quantum-neural fusion, 
            consciousness AI, and revolutionary technologies that will reshape the future!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2026-future-predictions-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔮 Explore Future Predictions
            </Link>
            
            <Link
              href="/resources/ai-2026-implementation-guide"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              📚 Download Guide
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-sm text-cyan-100">Universal Problem Solver</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-cyan-100">Emotion Recognition</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-cyan-100">Future Prediction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-cyan-100">Universal Translation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}