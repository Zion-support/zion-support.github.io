import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('ai2025-revolutionary-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }

    // Add animation effect
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('ai2025-revolutionary-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              {/* Main content */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                  <Zap className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-bold">BREAKTHROUGH ANNOUNCEMENT</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold">2000%+ ROI</span>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-semibold">99.7% Accuracy</span>
                </div>
              </div>

              {/* Main message */}
              <div className="flex-1 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  🚀 AI 2025 Revolutionary Breakthrough is Here!
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  Discover the most significant AI innovation of 2025 - transforming industries worldwide
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <Link 
                  href="/blog/ai-2025-revolutionary-breakthrough-announcement"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link 
                  href="/case-studies/ai-2025-revolutionary-breakthrough-success"
                  className="bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2"
                >
                  <Award className="w-3 h-3" />
                  Success Stories
                </Link>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold">2000%+ ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-semibold">500+ Clients</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link 
                  href="/blog/ai-2025-revolutionary-breakthrough-announcement"
                  className="bg-white/20 text-white px-3 py-1 rounded text-xs font-semibold"
                >
                  Learn More
                </Link>
                <Link 
                  href="/case-studies/ai-2025-revolutionary-breakthrough-success"
                  className="bg-white text-red-600 px-3 py-1 rounded text-xs font-semibold"
                >
                  Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
        <div className="h-full bg-white animate-pulse" style={{ width: '100%' }}></div>
      </div>
    </div>
  );
}