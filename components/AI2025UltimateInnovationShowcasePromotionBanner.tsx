import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, TrendingUp } from 'lucide-react';

export default function AI2025UltimateInnovationShowcasePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl my-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Revolutionary Innovation
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI 2025 Ultimate Innovation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Discover the most revolutionary AI breakthroughs, cutting-edge technologies, and transformative solutions reshaping our world in 2025.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Brain className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white font-medium">Neural Interfaces</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-white font-medium">Quantum AI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white font-medium">15,000% ROI</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2025-ultimate-innovation-showcase"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Innovations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/ai-2025-breakthrough-innovations"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Breakthroughs
              </Link>
            </div>
          </div>

          {/* Right content - Visual elements */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Animated circles */}
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center animate-spin-reverse">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}