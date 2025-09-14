'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const UltimateAIContentRevolutionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-content-revolution-banner-2025-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-content-revolution-banner-2025-dismissed', 'true');
  };

  if (isDismissed) return null;

  const featuredContent = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Enterprise Mastery Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-mastery',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with next-generation AI automation.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-100-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Discover how a Fortune 100 technology company transformed their operations with AI automation.',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies.',
      readingTime: '30 min read',
      featured: true
    }
  ];

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the ultimate collection of AI transformation content. Proven strategies, real success stories, and comprehensive frameworks that deliver <span className="text-yellow-400 font-bold">1,000%+ ROI</span>.
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-300">FEATURED CONTENT</span>
            </div>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 bg-purple-500/20 rounded-full">
                  <span className="text-sm font-medium text-purple-200">
                    {currentContent.type.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </div>
              </div>

              <h3 className="text-2xl font-bold leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-lg text-blue-100 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Read Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-center">Success Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {currentContent.metrics.efficiency || currentContent.metrics.success}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {currentContent.metrics.satisfaction || currentContent.metrics.timeline}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.satisfaction ? 'Satisfaction' : 'Timeline'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                index === currentSlide ? 'ring-2 ring-white/30' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="px-3 py-1 bg-purple-500/20 rounded-full">
                  <span className="text-sm font-medium text-purple-200">
                    {content.type.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readingTime}
                </div>
              </div>

              <h4 className="text-lg font-bold mb-3 line-clamp-2">
                {content.title}
              </h4>

              <p className="text-sm text-blue-100 mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-400">
                  {content.metrics.roi}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UltimateAIContentRevolutionBanner2025;