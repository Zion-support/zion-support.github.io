import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, TrendingUp, Star, ArrowRight, Brain, Rocket, Target } from 'lucide-react';

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
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Zap className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                  BREAKTHROUGH
                </span>
                <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                  NEW
                </span>
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  2000% ROI
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                🚀 AI 2025 Revolutionary Breakthroughs Are Here!
              </h2>
              
              <p className="text-sm md:text-base text-blue-100 mb-3 max-w-2xl">
                Discover the most transformative AI technologies of 2025. Quantum-AI fusion, neural interfaces, and autonomous systems delivering unprecedented ROI.
              </p>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <Brain className="w-4 h-4 text-yellow-300" />
                  <span>Quantum-AI Fusion</span>
                </div>
                <div className="flex items-center gap-1">
                  <Rocket className="w-4 h-4 text-yellow-300" />
                  <span>Neural Interfaces</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4 text-yellow-300" />
                  <span>Autonomous Systems</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span>2000%+ ROI</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Star className="w-4 h-4" />
              Read Breakthroughs
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Get Toolkit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 hover:bg-white/20 rounded-full transition-colors ml-2"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-red-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;