'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,200% ROI in 6 months with our comprehensive AI transformation guide',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        timeline: '6 months',
        success: '97%'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'Real case study showing how a Fortune 100 company achieved 567% ROI in 18 months',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      type: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '156%'
      },
      badge: 'FEATURED',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      description: 'Complete step-by-step guide to achieve 800% ROI within 18 months',
      url: '/resources/ai-2025-implementation-roadmap-800-roi',
      type: 'resource',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      badge: 'GUIDE',
      color: 'from-orange-600 to-red-600'
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-500/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-semibold bg-yellow-400/20 px-3 py-1 rounded-full">
                ULTIMATE CONTENT 2025
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>1,200% ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span>$500M+ Savings</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content That Delivers
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Unprecedented Results
                </span>
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Discover the exact strategies and frameworks used by Fortune 500 companies 
                to achieve extraordinary ROI through AI transformation. Our latest content 
                reveals the secrets to 1,200% ROI in just 6 months.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">1,200%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">$500M+</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">6 Months</div>
                <div className="text-sm text-gray-300">Time to Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">97%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Resources
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentContent.badge === 'NEW' ? 'bg-green-500/20 text-green-400' :
                    currentContent.badge === 'FEATURED' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-gray-300 capitalize">
                    {currentContent.type.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              <p className="text-gray-200 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-xs text-gray-400">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">
                    {currentContent.metrics.timeline}
                  </div>
                  <div className="text-xs text-gray-400">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">
                    {currentContent.metrics.success || currentContent.metrics.efficiency}
                  </div>
                  <div className="text-xs text-gray-400">
                    {currentContent.metrics.success ? 'Success' : 'Efficiency'}
                  </div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>500+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Fortune 500 Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;