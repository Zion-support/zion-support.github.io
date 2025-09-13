import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white text-sm font-bold mb-6 animate-bounce">
            🔥 BREAKTHROUGH ANNOUNCEMENT 2025
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The most revolutionary AI breakthrough in human history. Experience 5,000% ROI with our transcendent intelligence platform that transforms reality itself.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-bold text-yellow-400">Transcendent Intelligence</div>
              <div className="text-sm text-gray-300">99.9% Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="font-bold text-orange-400">Quantum Integration</div>
              <div className="text-sm text-gray-300">10,000x Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-bold text-red-400">5,000% ROI</div>
              <div className="text-sm text-gray-300">Guaranteed Returns</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              See 5,000% ROI Success
            </Link>
          </div>
          
          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/resources/ai-2025-ultimate-implementation-guide" className="text-yellow-400 hover:text-yellow-300 underline">
              📚 Implementation Guide
            </Link>
            <Link href="/ai-2026-ultimate-breakthrough-predictions" className="text-orange-400 hover:text-orange-300 underline">
              🔮 AI 2026 Predictions
            </Link>
            <Link href="/contact" className="text-red-400 hover:text-red-300 underline">
              💬 Get Expert Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}