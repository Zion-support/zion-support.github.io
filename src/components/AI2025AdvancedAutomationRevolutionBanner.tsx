"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { X, ArrowRight, TrendingUp, DollarSign, Zap, Target } from 'lucide-react';

const AI2025AdvancedAutomationRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2025-advanced-automation-banner-dismissed');
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
    localStorage.setItem('ai2025-advanced-automation-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ai-2025-advanced-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '2,000%',
        savings: '$8.5B+',
        efficiency: '1,200%',
        accuracy: '99.9%'
      },
      description: 'Achieve unprecedented ROI with our revolutionary AI automation framework',
      badge: 'NEW BREAKTHROUGH'
    },
    {
      id: 'fortune-500-advanced-automation-2000-roi-success-story',
      title: 'Fortune 500 Advanced Automation Success: $8.5B Annual Savings',
      type: 'Case Study',
      url: '/case-studies/fortune-500-advanced-automation-2000-roi-success-story',
      metrics: {
        roi: '2,000%',
        savings: '$8.5B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      description: 'Real-world success story from Fortune 500 manufacturing giant',
      badge: 'SUCCESS STORY'
    },
    {
      id: 'ai-2025-advanced-automation-implementation-ultimate-guide',
      title: 'AI 2025 Advanced Automation Implementation Ultimate Guide',
      type: 'Implementation Guide',
      url: '/resources/ai-2025-advanced-automation-implementation-ultimate-guide',
      metrics: {
        roi: '2,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '500+'
      },
      description: 'Complete roadmap to 2,000% ROI in 18 months',
      badge: 'IMPLEMENTATION GUIDE'
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {currentContent.badge}
                </span>
                <span className="text-sm text-blue-200">{currentContent.type}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg text-blue-100 mb-4 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-sm font-medium text-green-400">ROI</span>
                  </div>
                  <div className="text-xl font-bold text-white">{currentContent.metrics.roi}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-sm font-medium text-green-400">Savings</span>
                  </div>
                  <div className="text-xl font-bold text-white">{currentContent.metrics.savings}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-yellow-400">Efficiency</span>
                  </div>
                  <div className="text-xl font-bold text-white">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Target className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-sm font-medium text-blue-400">Success</span>
                  </div>
                  <div className="text-xl font-bold text-white">{currentContent.metrics.accuracy || currentContent.metrics.success}</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  Read Full {currentContent.type}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10"
                >
                  Get Implementation Guide
                </a>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AdvancedAutomationRevolutionBanner;