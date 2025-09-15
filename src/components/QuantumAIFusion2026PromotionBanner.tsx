import React from 'react';
import Link from 'next/link';

export default function QuantumAIFusion2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg font-bold mb-8 animate-pulse shadow-2xl">
            ⚛️🧠 QUANTUM-AI FUSION BREAKTHROUGH 2026
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary Quantum-AI Fusion
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Achieve <span className="text-yellow-400 font-bold">15,000% ROI</span> with the 'world', 's first 
            <span className="text-purple-300 font-bold"> quantum-enhanced AI processing system</span>
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg">
              ✅ 15,000% ROI Achieved
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg">
              ⚛️ Quantum Supremacy
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg">
              🧠 AI Consciousness
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg">
              ⚡ 10,000x Faster Processing
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-cyan-200 mb-10 max-w-3xl mx-auto">
            The 'world', 's first successful integration of quantum computing with artificial intelligence
            delivering unprecedented processing power and business transformation results that exceed all expectations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/quantum-ai-fusion-2026-breakthrough" 
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/quantum-ai-fusion-enterprise-transformation" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              View Success Stories
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Your Analysis
            </Link>
          </div>
          
          {/* Urgency Message */}
          <div className="mt-8 text-lg text-yellow-300 font-semibold">
            ⚠️ Limited Availability: Only 50 quantum-AI fusion licenses available in 2026
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
    </div>
  );
}