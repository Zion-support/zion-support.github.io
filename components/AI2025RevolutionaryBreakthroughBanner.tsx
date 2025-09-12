import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, Rocket, TrendingUp, Star, ArrowRight, Sparkles } from 'lucide-react';

const AI2025RevolutionaryBreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2025-breakthrough-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai2025-breakthrough-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Animated icon */}
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 animate-pulse">
                <Sparkles className="w-6 h-6 text-white animate-spin" />
              </div>
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                NEW
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-yellow-300" />
                  AI 2025 Revolutionary Breakthroughs
                </h3>
                <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-yellow-300" />
                  <span className="text-sm font-semibold">BREAKTHROUGH</span>
                </div>
              </div>
              
              <p className="text-sm text-white/90 mb-3">
                Discover the most revolutionary AI technologies of 2025 with <strong>2000%+ ROI</strong> potential. 
                Get our comprehensive implementation guide and ROI calculator.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  <span>2000% ROI</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  <span>Revolutionary Tech</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3" />
                  <span>Expert Guide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 ml-6">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 group"
            >
              <span>Read Breakthroughs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Toolkit
            </Link>

            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
            >
              Calculate ROI
            </Link>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;