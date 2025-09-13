import React from 'react';
import Link from 'next/link';

export default function AI2026FuturePredictionsPromotionBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-8 backdrop-blur-sm">
          <span className="text-cyan-300 font-bold text-sm animate-pulse">🔮 FUTURE PREDICTIONS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI 2026 Future
          <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Predictions Breakthrough
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover the revolutionary AI predictions for 2026 that will transform industries with 
          <span className="text-cyan-300 font-bold"> quantum-neural fusion</span>, 
          <span className="text-purple-300 font-bold"> transcendent intelligence</span>, and 
          <span className="text-pink-300 font-bold"> 15,000% ROI</span> capabilities.
        </p>

        {/* Key Predictions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-3">⚛️</div>
            <div className="text-xl font-bold text-cyan-300 mb-2">Quantum-Neural Fusion</div>
            <div className="text-gray-300 text-sm">95% Probability</div>
            <div className="text-gray-400 text-xs mt-2">15,000% ROI Potential</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-3">🧠</div>
            <div className="text-xl font-bold text-purple-300 mb-2">Transcendent Intelligence</div>
            <div className="text-gray-300 text-sm">88% Probability</div>
            <div className="text-gray-400 text-xs mt-2">Universal Problem Solving</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-3">🚀</div>
            <div className="text-xl font-bold text-pink-300 mb-2">Autonomous Systems</div>
            <div className="text-gray-300 text-sm">92% Probability</div>
            <div className="text-gray-400 text-xs mt-2">24/7 Self-Management</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/ai-2026-future-predictions-breakthrough"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🔮 Explore Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2026-quantum-neural-fusion-success"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            📊 View Success Stories
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center">
            <span className="text-cyan-400 mr-2">✓</span>
            <span>Quantum Computing Research</span>
          </div>
          <div className="flex items-center">
            <span className="text-cyan-400 mr-2">✓</span>
            <span>Advanced AI Analysis</span>
          </div>
          <div className="flex items-center">
            <span className="text-cyan-400 mr-2">✓</span>
            <span>Industry Expert Predictions</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}