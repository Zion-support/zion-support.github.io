import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, Download, Zap, Target, Award, TrendingUp } from 'lucide-react';

const UltimateContent2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-content-2026-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2026-banner-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="flex items-center bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-purple-200 text-sm font-medium">🚀 NEW 2026 CONTENT</span>
                </div>
                <div className="flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-200 text-sm font-medium">TRENDING</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                🎯 Ultimate AI 2026 Content Collection
              </h2>
              <p className="text-purple-100 text-lg mb-4 max-w-2xl">
                Get access to our complete library of AI 2026 resources: Enterprise guides, 
                Fortune 500 case studies, implementation toolkits, and ROI calculators.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <Target className="w-4 h-4 text-blue-400 mr-1" />
                  <span>Enterprise Mastery Guide</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <Award className="w-4 h-4 text-green-400 mr-1" />
                  <span>800% ROI Case Study</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <Download className="w-4 h-4 text-purple-400 mr-1" />
                  <span>Ultimate Toolkit</span>
                </div>
              </div>
            </div>

            {/* Right content - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/mega-content-showcase-2026"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore All Content
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link 
                href="/resources/ai-2026-implementation-toolkit-ultimate"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Toolkit
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Animated progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default UltimateContent2026PromotionBanner;