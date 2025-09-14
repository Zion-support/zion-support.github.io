'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Target, Zap } from 'lucide-react';

interface BreakthroughContent {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    accuracy: string;
  };
}

const BreakthroughTechnologies2025PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const breakthroughContent: BreakthroughContent[] = [
    {
      id: 'breakthrough-technologies-revolution',
      title: 'AI 2025: The Breakthrough Technologies Revolution - Ultimate Guide to 5,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-breakthrough-technologies-revolution-ultimate-guide',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B+',
        accuracy: '99.97%'
      }
    },
    {
      id: 'fortune-500-breakthrough-technologies-5000-roi-success',
      title: 'Fortune 500 Breakthrough Technologies Success: $15.8B Annual Savings - 5,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-breakthrough-technologies-5000-roi-success-story',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        accuracy: '99.97%'
      }
    },
    {
      id: 'breakthrough-technologies-implementation-ultimate-guide',
      title: 'Breakthrough Technologies Implementation Ultimate Guide 2025: Complete Roadmap to 5,000% ROI',
      type: 'resource',
      url: '/resources/breakthrough-technologies-implementation-ultimate-guide-2025',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        accuracy: '97%'
      }
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('breakthrough-technologies-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % breakthroughContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, breakthroughContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('breakthrough-technologies-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = breakthroughContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-semibold">BREAKTHROUGH TECHNOLOGIES 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-4 w-4 text-green-400" />
                <span className="text-xs font-medium">5,000% ROI</span>
              </div>
            </div>

            {/* Main content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Revolutionary Breakthrough Technologies Transforming Enterprise Operations
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span>5,000% ROI</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <Target className="h-4 w-4 text-blue-400" />
                  <span>$15.8B+ Savings</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <span>99.97% Accuracy</span>
                </div>
              </div>

              {/* Current content showcase */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-purple-300 uppercase tracking-wide">
                        {currentContent.type === 'blog' ? 'Blog Post' : 
                         currentContent.type === 'case-study' ? 'Case Study' : 'Resource Guide'}
                      </span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {currentContent.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span>ROI: {currentContent.metrics.roi}</span>
                      <span>Savings: {currentContent.metrics.savings}</span>
                      <span>Accuracy: {currentContent.metrics.accuracy}</span>
                    </div>
                  </div>
                  <Link
                    href={currentContent.url}
                    className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex items-center space-x-2">
                {breakthroughContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Call to action */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/blog/ai-2025-breakthrough-technologies-revolution-ultimate-guide"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>Read Ultimate Guide</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/case-studies/fortune-500-breakthrough-technologies-5000-roi-success-story"
            className="border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>View Success Story</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/resources/breakthrough-technologies-implementation-ultimate-guide-2025"
            className="border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>Get Implementation Guide</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/5 to-transparent"></div>
    </div>
  );
};

export default BreakthroughTechnologies2025PromotionBanner;