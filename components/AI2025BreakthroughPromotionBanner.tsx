import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Users, Award } from 'lucide-react';

export default function AI2025BreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <div className="flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4 mr-1" />
                BREAKTHROUGH INNOVATION
              </div>
              <div className="flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 mr-1" />
                JUST RELEASED
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              AI 2025 Breakthrough Innovations: Revolutionary Technologies
            </h2>
            
            <p className="text-sm md:text-base opacity-90 mb-4 max-w-2xl">
              Discover the most groundbreaking AI innovations of 2025 that are revolutionizing 
              industries with unprecedented efficiency, accuracy, and ROI.
            </p>
            
            {/* Key metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">2,500% Average ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-semibold">500+ Companies</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span className="font-semibold">99.7% Accuracy</span>
              </div>
            </div>
          </div>
          
          {/* Right content - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-breakthrough-innovations"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies/ai-2025-global-tech-giant-transformation"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center group"
            >
              <span>View Success Story</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}