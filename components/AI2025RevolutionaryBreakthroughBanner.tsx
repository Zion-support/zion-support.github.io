import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, TrendingUp, Star, ArrowRight, Brain, Rocket, Target, Users, Award } from 'lucide-react';

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

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Star className="w-4 h-4" />
              Learn More
            </Link>
            <Link 
              href="/case-studies/ai-2025-revolutionary-breakthrough-success"
              className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              View Success Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
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