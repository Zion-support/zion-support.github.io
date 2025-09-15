import React from 'react';
import Link from 'next/link';

export default function UltimateBreakthrough2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-lg mb-8 animate-bounce">
          🚀 ULTIMATE BREAKTHROUGH 2025
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AI 2025 Revolutionary
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Breakthrough Announcement
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover the most advanced AI technology ever created. Quantum-neural fusion systems 
          delivering <span className="text-yellow-400 font-bold">10,000%+ ROI</span> and 
          transforming businesses worldwide.
        </p>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-white font-bold text-lg">1,000,000x Faster</div>
            <div className="text-gray-300 text-sm">Processing Power</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-white font-bold text-lg">99.9% Accuracy</div>
            <div className="text-gray-300 text-sm">Autonomous Operations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-white font-bold text-lg">10,000%+ ROI</div>
            <div className="text-gray-300 text-sm">Proven Results</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/ai-2025-ultimate-breakthrough-announcement"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            Explore Breakthrough
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Early Access
          </Link>
        </div>
        
        {/* Urgency Message */}
        <div className="mt-8 text-yellow-400 font-semibold text-lg">
          ⏰ Limited Early Access Available - 'Don', 't Miss Out!
        </div>
      </div>
    </div>
  );
}