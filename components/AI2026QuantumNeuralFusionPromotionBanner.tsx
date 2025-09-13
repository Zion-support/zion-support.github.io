import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, TrendingUp, Star } from 'lucide-react';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                15,000% ROI
              </span>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                FUTURE
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              🚀 AI 2026 Quantum-Neural Fusion Breakthrough
            </h2>
            
            <p className="text-lg opacity-90 mb-4">
              Revolutionary quantum-neural fusion technology delivering 15,000% ROI and 99.7% accuracy
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4" />
                <span>99.7% Accuracy</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Quantum Fusion</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>15,000% ROI</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Star className="w-4 h-4" />
              Explore Breakthrough
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-3 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-1000"></div>
    </div>
  );
}