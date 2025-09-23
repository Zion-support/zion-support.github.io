'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025TrendsRevolutionaryBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ai-2025-future-trends',
      title: 'AI 2025: The Future Trends Revolutionary Breakthrough',
      description: 'Ultimate Guide to 15,000% ROI Through Revolutionary AI Trends',
      type: 'blog',
      url: '/blog/ai-2025-future-trends-revolutionary-breakthrough-ultimate-guide',
      metrics: {
        roi: '15,000%',
        savings: '$200B+',
        efficiency: '2,400%',
        accuracy: '99.97%'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-trends-success',
      title: 'Fortune 500 AI Trends Success Story',
      description: '$200B Annual Savings - 15,000% ROI Achievement',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-trends-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$200B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-trends-implementation-guide',
      title: 'AI 2025 Trends Implementation Ultimate Guide',
      description: 'Complete Roadmap to 15,000% ROI',
      type: 'resource',
      url: '/resources/ai-2025-trends-implementation-ultimate-guide',
      metrics: {
        roi: '15,000%',
        success: '99.7%',
        timeline: '18 months',
        guide: '45 min read'
      },
      readingTime: '45 min read',
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
    localStorage.setItem('ai2025TrendsBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025TrendsBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW AI 2025 TRENDS BREAKTHROUGH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Trends Delivering 15,000% ROI
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the breakthrough AI trends that are transforming Fortune 500 companies worldwide
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {currentContent.readingTime}
                </span>
                {currentContent.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentContent.title}
              </h3>

              <p className="text-lg text-blue-100">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-sm text-blue-100">ROI Achievement</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-sm text-blue-100">Annual Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentContent.metrics.efficiency || currentContent.metrics.timeline}
                  </div>
                  <div className="text-sm text-blue-100">
                    {currentContent.metrics.efficiency ? 'Efficiency Gain' : 'Timeline'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentContent.metrics.accuracy || currentContent.metrics.satisfaction || currentContent.metrics.success}
                  </div>
                  <div className="text-sm text-blue-100">
                    {currentContent.metrics.accuracy ? 'Accuracy' : 
                     currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : 
                             currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Implementation Support
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-2xl font-bold text-white mb-2">AI 2025 Trends</div>
                  <div className="text-lg text-blue-100">Revolutionary Breakthrough</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-indigo-500/30 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.map((item, index) => (
            <Link
              key={item.id}
              href={item.url}
              className={`bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-200">
                  {item.type.toUpperCase()}
                </span>
                <span className="text-xs text-blue-300">
                  {item.readingTime}
                </span>
              </div>
              <h4 className="font-semibold text-white mb-2 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-sm text-blue-100 line-clamp-2">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Dismiss Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white text-sm transition-colors duration-300"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI2025TrendsRevolutionaryBanner;