'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, TrendingUp, DollarSign, Zap } from 'lucide-react';

const UltimateAutonomousEnterpriseRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      subtitle: 'Complete Guide to 15,000% ROI',
      description: 'Transform your business with complete operational autonomy. Fortune 500 companies are achieving $50+ billion in annual savings.',
      metrics: {
        roi: '15,000%',
        savings: '$52.8B',
        accuracy: '99.97%',
        efficiency: '3,500%'
      },
      cta: 'Get Ultimate Guide',
      link: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      type: 'blog',
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Success: $52.8B Annual Savings',
      subtitle: '15,000% ROI in 18 Months',
      description: 'Real case study of how a Fortune 500 manufacturing giant achieved unprecedented success through autonomous enterprise transformation.',
      metrics: {
        roi: '15,000%',
        savings: '$52.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      cta: 'Read Case Study',
      link: '/case-studies/fortune-500-ultimate-autonomous-enterprise-transformation-15000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read'
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Roadmap',
      subtitle: 'From Strategy to 15,000% ROI',
      description: 'Step-by-step guide to implementing autonomous enterprise transformation with proven methodologies and real-world success stories.',
      metrics: {
        roi: '15,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      cta: 'Get Roadmap',
      link: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-ultimate-breakthrough',
      type: 'resource',
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
            aria-label="Close banner"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200">
                    🚀 ULTIMATE BREAKTHROUGH
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200">
                    {currentContent.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-200 mb-3">
                  {currentContent.subtitle}
                </p>

                <p className="text-gray-200 mb-4 max-w-2xl">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">ROI</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentContent.metrics.roi}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Savings</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentContent.metrics.savings}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">Accuracy</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentContent.metrics.accuracy}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300">Efficiency</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentContent.metrics.efficiency || '99.7%'}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.cta}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>

                <div className="mt-2 text-sm text-gray-300">
                  {currentContent.readingTime}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex flex-col space-y-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseRevolutionBanner;