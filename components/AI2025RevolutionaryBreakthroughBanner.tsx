import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Brain, Target } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1 animate-pulse"></div>
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <Zap className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
            <span className="text-sm font-bold bg-yellow-300 text-red-800 px-3 py-1 rounded-full">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            🚀 AI 2025 Revolutionary Breakthroughs
          </h2>
          <p className="text-sm md:text-base text-blue-100 mb-3">
            Discover the most transformative AI innovations of 2025 that are reshaping industries 
            and creating unprecedented opportunities for growth.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-300" />
              <span>2000% ROI</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1 text-green-300" />
              <span>95% Accuracy</span>
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-1 text-purple-300" />
              <span>Quantum-Neural Fusion</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-1 text-blue-300" />
              <span>500+ Deployments</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/blog/ai-2025-revolutionary-breakthroughs"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
          >
            <span>Read Full Article</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center group"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-2 right-4 text-2xl animate-bounce">🚀</div>
      <div className="absolute bottom-2 left-8 text-xl animate-pulse">⚡</div>
      <div className="absolute top-1/2 right-8 text-lg animate-ping">🧠</div>
    </div>
  );
}