import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Target, Award, TrendingUp } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4" />
                BREAKTHROUGH ANNOUNCEMENT
              </div>
              <div className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                <Zap className="w-4 h-4" />
                NEW
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              AI 2025 Revolutionary Breakthrough
            </h2>
            
            <p className="text-lg lg:text-xl mb-4 opacity-90">
              Neural interfaces, quantum computing, and autonomous systems delivering 
              <span className="font-bold text-yellow-300"> 2,000%+ ROI</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4 text-green-300" />
                <span>95% Accuracy</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-blue-300" />
                <span>10,000x Performance</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-yellow-300" />
                <span>99.8% Autonomy</span>
              </div>
            </div>
          </div>
          
          {/* Right content - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-announcement"
              className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Read Announcement
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link 
              href="/case-studies/ai-2025-revolutionary-breakthrough-success"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              <Award className="w-5 h-5 mr-2" />
              See 2,000% ROI Case Study
            </Link>
          </div>
        </div>
        
        {/* Additional content links */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link 
              href="/resources/ai-2025-revolutionary-breakthrough-implementation-guide"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Implementation Guide
            </Link>
            <Link 
              href="/ai-implementation-guide-2025"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Target className="w-4 h-4" />
              AI 2025 Master Guide
            </Link>
            <Link 
              href="/contact"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}