import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Zap, Brain, Rocket } from 'lucide-react';

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
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-12 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-6 left-16 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-4 right-8 w-10 h-10 bg-white/20 rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>BREAKTHROUGH</span>
              </div>
              <div className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                <span>NEW</span>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
              AI 2025 Revolutionary Breakthroughs: 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                The Future is Here
              </span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-4 max-w-2xl">
              Discover the most revolutionary AI breakthroughs of 2025 that are transforming 
              industries worldwide. From quantum AI to neural interfaces, explore cutting-edge 
              technologies reshaping our future.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>2000% ROI Achieved</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>99.7% Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Brain className="w-4 h-4 text-purple-300" />
                <span>15,000% Efficiency Gains</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link 
                href="/blog/ai-2025-revolutionary-breakthroughs"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Rocket className="w-5 h-5" />
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Star className="w-5 h-5" />
                View Success Story
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
    </div>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;