import React from 'react';
import Link from 'next/link';
import { ArrowRight, Atom, Star, TrendingUp, Brain, Zap, Target } from 'lucide-react';

export default function AI2026QuantumNeuralPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-6 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1 animate-pulse"></div>
        <div className="absolute top-4 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-1/3 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <Atom className="w-6 h-6 mr-2 text-yellow-300 animate-spin" />
            <span className="text-sm font-bold bg-yellow-300 text-purple-800 px-4 py-2 rounded-full">
              QUANTUM BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ⚛️ AI 2026 Quantum-Neural Fusion
          </h2>
          <p className="text-base md:text-lg text-purple-100 mb-4">
            The ultimate breakthrough combining quantum computing with neural networks 
            to achieve 15,000% ROI and transform entire industries.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-300" />
              <span>15,000% ROI</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1 text-green-300" />
              <span>1000x Faster</span>
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-1 text-blue-300" />
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-1 text-purple-300" />
              <span>∞ Scalability</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
          >
            <span>Read Full Article</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/case-studies/ai-2026-quantum-neural-fusion-success"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center group"
          >
            <span>View Success Story</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Floating quantum elements */}
      <div className="absolute top-2 right-4 text-2xl animate-bounce">⚛️</div>
      <div className="absolute bottom-2 left-8 text-xl animate-pulse">🧠</div>
      <div className="absolute top-1/2 right-8 text-lg animate-ping">⚡</div>
      <div className="absolute top-1/4 left-1/4 text-sm animate-bounce">🔬</div>
    </div>
  );
}