import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025TrendsPredictionsPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
            <span className="text-blue-300 font-semibold text-sm animate-pulse">🔮 EXPERT ANALYSIS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            AI 2025 Revolutionary Trends & Predictions
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Expert analysis of the most revolutionary AI trends and breakthrough predictions for 2025. Discover the technologies that will reshape industries and create unprecedented opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">⚛️</div>
              <div className="text-sm text-gray-300">Quantum-AI Fusion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">🧠</div>
              <div className="text-sm text-gray-300">Neural Interfaces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">🤖</div>
              <div className="text-sm text-gray-300">Autonomous Systems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">🔮</div>
              <div className="text-sm text-gray-300">Predictive Intelligence</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2025-revolutionary-trends-predictions" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Analysis
            </a>
            <a 
              href="/resources/ai-2025-revolutionary-implementation-guide" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Get Implementation Guide
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            Comprehensive 15-minute read with actionable insights
          </div>
        </div>
      </div>
    </div>
  );
}