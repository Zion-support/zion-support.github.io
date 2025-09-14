'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      badge: 'NEW',
      description: 'Master advanced AI automation with our comprehensive guide. Learn how Fortune 500 companies achieve 1,200% ROI through intelligent automation strategies.'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      badge: 'FEATURED',
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI and $2.8B annual savings through comprehensive AI transformation in just 18 months.'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      badge: 'ULTIMATE',
      description: 'The definitive guide to AI implementation success. Our proven framework has helped 500+ organizations achieve 1,000%+ ROI through strategic AI deployment.'
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
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">1,200% ROI ACHIEVED</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-blue-200">{currentContent.type}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-lg text-blue-100 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentContent.metrics.efficiency || currentContent.metrics.success}
                  </div>
                  <div className="text-sm text-blue-200">
                    {currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentContent.metrics.timeline || currentContent.metrics.projects}
                  </div>
                  <div className="text-sm text-blue-200">
                    {currentContent.metrics.timeline ? 'Timeline' : 'Projects'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Read Full {currentContent.type}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10"
                >
                  Get Implementation Support
                </Link>
              </div>
            </div>

            {/* Content Preview Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Featured Content Collection</h3>
              <div className="space-y-3">
                {featuredContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? 'border-purple-400 bg-purple-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-medium text-blue-200">
                            {content.type}
                          </span>
                          <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full font-bold">
                            {content.badge}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm leading-tight mb-2">
                          {content.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-xs text-blue-200">
                          <span className="flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {content.metrics.roi} ROI
                          </span>
                          <span className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {content.metrics.savings}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;