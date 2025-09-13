import React from 'react';
import Link from 'next/link';
import { ArrowRight, Car, Zap, TrendingUp, Star } from 'lucide-react';

export default function AI2028AutomotiveTransformationPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
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
                3,000% ROI
              </span>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                AUTOMOTIVE
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              🚗 AI 2028 Automotive Transformation Breakthrough
            </h2>
            
            <p className="text-lg opacity-90 mb-4">
              Revolutionary automotive AI transformation delivering 3,000% ROI with autonomous vehicles
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Car className="w-4 h-4" />
                <span>100% Safety</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>Autonomous</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>3,000% ROI</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/case-studies/ai-2028-automotive-transformation-breakthrough"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Star className="w-4 h-4" />
              Explore Breakthrough
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/blog/ai-2028-future-predictions-breakthrough"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              View Predictions
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