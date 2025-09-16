'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution Ultimate Breakthrough',
      description: '1000% ROI in 6 months - Transform your business with revolutionary AI implementations',
      metrics: {
        roi: '1000%',
        savings: '$500M+',
        efficiency: '95%',
        success: '99.7%'
      },
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      type: 'Blog Post',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success: $2.8B Annual Savings',
      description: 'Real-world case study showing how a global manufacturing leader achieved 1000% ROI',
      metrics: {
        roi: '1000%',
        savings: '$2.8B',
        efficiency: '156%',
        quality: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-1000-roi-success',
      type: 'Case Study',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Transformation Ultimate Implementation Guide 2025',
      description: 'Complete roadmap from strategy to 1000% ROI - Step-by-step implementation guide',
      metrics: {
        roi: '1000%',
        timeline: '6 months',
        success: '99.7%',
        projects: '500+'
      },
      url: '/resources/ai-transformation-ultimate-implementation-guide-2025',
      type: 'Resource',
      readingTime: '25 min read',
      featured: true
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
    localStorage.setItem('ultimateBreakthroughBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateBreakthroughBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  <Zap className="w-4 h-4" />
                  <span>NEW 2025 BREAKTHROUGH</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  <Star className="w-4 h-4" />
                  <span>1000% ROI GUARANTEED</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {currentContent.title}
                </h2>
                <p className="text-lg text-gray-200 mb-4 max-w-3xl">
                  {currentContent.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                    <div className="text-sm text-gray-300">Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency}</div>
                    <div className="text-sm text-gray-300">Efficiency</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.success}</div>
                    <div className="text-sm text-gray-300">Success Rate</div>
                  </div>
                </div>

                {/* Content type and reading time */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {currentContent.readingTime}
                  </span>
                  {currentContent.featured && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Get Your 1000% ROI Assessment
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
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

export default NewContent2025UltimateBreakthroughBanner;