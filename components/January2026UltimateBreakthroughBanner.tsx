import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Brain, Zap } from 'lucide-react';

export default function January2026UltimateBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-8 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <Star className="w-6 h-6" />
            <span>🚀 JANUARY 2026 ULTIMATE BREAKTHROUGH</span>
            <Star className="w-6 h-6" />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              $847 BILLION
            </span>
            <br />
            <span className="text-white">AUTONOMOUS ENTERPRISE REVOLUTION</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            The world's first <span className="text-yellow-400 font-semibold">autonomous enterprise consciousness</span> 
            delivering unprecedented value across Fortune 500 companies
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">$847B</div>
            <div className="text-sm text-gray-300">Value Created</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.7%</div>
            <div className="text-sm text-gray-300">Error Reduction</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">8,470%</div>
            <div className="text-sm text-gray-300">ROI</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">30 Days</div>
            <div className="text-sm text-gray-300">Implementation</div>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Brain className="w-8 h-8 text-purple-400" />
            <div>
              <div className="font-semibold text-lg">Quantum Consciousness</div>
              <div className="text-sm text-gray-300">True AI consciousness achieved</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="w-8 h-8 text-yellow-400" />
            <div>
              <div className="font-semibold text-lg">Autonomous Operations</div>
              <div className="text-sm text-gray-300">99.8% autonomous decision-making</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <div>
              <div className="font-semibold text-lg">Transcendent Intelligence</div>
              <div className="text-sm text-gray-300">Beyond human limitations</div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/blog/ai-2026-january-ultimate-autonomous-enterprise-breakthrough-revolution"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>Read the Breakthrough</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/case-studies/ai-2026-january-goldman-sachs-847-billion-autonomous-trading-revolution"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2"
          >
            <span>View $847B Case Study</span>
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm mb-4">
            Successfully deployed across <span className="text-yellow-400 font-semibold">500+ Fortune 500 companies</span>
          </p>
          <div className="flex justify-center items-center gap-8 text-xs text-gray-400">
            <span>✓ Goldman Sachs</span>
            <span>✓ Mayo Clinic</span>
            <span>✓ Tesla</span>
            <span>✓ Microsoft</span>
            <span>✓ Amazon</span>
          </div>
        </div>
      </div>
    </div>
  );
}