'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      badge: 'NEW',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations.'
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      badge: 'FEATURED',
      description: 'Complete case study with implementation details and lessons learned from a Fortune 500 manufacturing giant.'
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      badge: 'GUIDE',
      description: 'The definitive guide to AI implementation success with proven strategies from Fortune 500 companies.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBreakthroughBanner', 'dismissed');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateBreakthroughBanner');
    if (dismissed === 'dismissed') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">NEW ULTIMATE BREAKTHROUGH CONTENT 2025</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-white/80">
                <TrendingUp className="w-4 h-4" />
                <span>1,200% ROI Success Stories</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Revolutionary AI Content: 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Ultimate Breakthrough 2025
                  </span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Discover the proven strategies and real success stories that are transforming Fortune 500 companies. 
                  Achieve 1,200% ROI with our comprehensive AI implementation framework.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300">1,200%</div>
                  <div className="text-sm text-white/80">Average ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-300">$3.2B</div>
                  <div className="text-sm text-white/80">Total Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-300">95%</div>
                  <div className="text-sm text-white/80">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-300">99.2%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 transform hover:scale-105"
                >
                  Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-white/60">Auto-rotating content</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded">
                      {currentContent.badge}
                    </span>
                    <span className="text-xs text-white/60 uppercase tracking-wide">
                      {currentContent.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-tight">
                    {currentContent.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {currentContent.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-300">
                        {currentContent.metrics.roi}
                      </div>
                      <div className="text-xs text-white/60">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-300">
                        {currentContent.metrics.savings}
                      </div>
                      <div className="text-xs text-white/60">Savings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;