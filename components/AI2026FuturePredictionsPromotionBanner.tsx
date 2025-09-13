import React from 'react';
import Link from 'next/link';

export default function AI2026FuturePredictionsPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main announcement badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xl mb-8 animate-pulse shadow-lg">
            🔮 AI 2026 FUTURE PREDICTIONS
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            REVOLUTIONARY BREAKTHROUGHS
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Discover the future of AI with quantum-neural fusion, transcendent intelligence, and{' '}
            <span className="text-cyan-400 font-bold text-3xl">20,000% ROI</span>{' '}
            opportunities
          </p>
          
          {/* Key predictions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 p-6 rounded-xl border border-cyan-500/30">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300 mb-2">50,000x faster processing</p>
              <div className="text-cyan-400 font-bold text-sm">95% Probability</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300 mb-2">99.99% accuracy</p>
              <div className="text-purple-400 font-bold text-sm">88% Probability</div>
            </div>
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-6 rounded-xl border border-green-500/30">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">20,000% ROI</h3>
              <p className="text-sm text-gray-300 mb-2">Proven potential</p>
              <div className="text-green-400 font-bold text-sm">92% Probability</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-future-predictions-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔮 View All Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-breakthrough-20000-roi"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 See 20,000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-roadmap"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Get Implementation Roadmap
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>95% Prediction Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>20,000% ROI Potential</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fortune 500 Verified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
      </div>
    </div>
  );
}