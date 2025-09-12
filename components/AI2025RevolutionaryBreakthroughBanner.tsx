import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight, TrendingUp, Brain, Rocket, Star } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <Star className="w-4 h-4 text-yellow-300" />
                <Star className="w-4 h-4 text-yellow-300" />
                <Star className="w-4 h-4 text-yellow-300" />
                <Star className="w-4 h-4 text-yellow-300" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                BREAKTHROUGH CONTENT
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              🚀 AI 2025 Revolutionary Breakthroughs
            </h2>
            
            <p className="text-lg md:text-xl text-pink-100 mb-4 max-w-2xl">
              Discover the most transformative AI innovations of 2025 that are reshaping industries 
              and delivering <span className="font-bold text-yellow-300">extraordinary ROI</span>.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>2000% ROI Potential</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Brain className="w-4 h-4" />
                <span>Quantum-Neural Fusion</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Rocket className="w-4 h-4" />
                <span>Autonomous Systems</span>
              </div>
            </div>
          </div>
          
          {/* Right content - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
            >
              <Zap className="w-5 h-5" />
              Read Breakthroughs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 group"
            >
              <TrendingUp className="w-5 h-5" />
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Additional content links */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Implementation Toolkit
            </Link>
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              ROI Calculator
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Live Webinar
            </Link>
            <Link 
              href="/contact"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}