import React from 'react';
import Link from 'next/link';

export default function AI2027ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400 rounded-full opacity-15 animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
                🔮 NEW AI 2027 CONTENT
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                HOT
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Revolutionary AI 2027 Predictions & Implementation Guide
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Discover quantum AI, neural interfaces, and 2000% ROI transformation strategies
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                ⚛️ Quantum AI
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🧠 Neural Interfaces
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🤖 Autonomous Systems
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                💰 2000% ROI
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center animate-pulse"
            >
              🔮 View Predictions
            </Link>
            <Link 
              href="/resources/ai-2027-implementation-master-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              📚 Get Master Guide
            </Link>
            <Link 
              href="/case-studies/ai-2027-automotive-transformation-breakthrough"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
            >
              🚗 View Case Study
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-2 right-4 text-2xl animate-bounce">🚀</div>
      <div className="absolute bottom-2 left-4 text-xl animate-pulse">⚡</div>
    </div>
  );
}