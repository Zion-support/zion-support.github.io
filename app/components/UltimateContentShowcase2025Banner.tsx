'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Breakthrough - 1,500% ROI in 6 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$4.8M',
        timeframe: '6 months',
        satisfaction: '99.2%'
      },
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Fortune 500'],
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ai-transformation-1500-roi-ultimate-success',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 1,500% ROI in 6 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success',
      metrics: {
        roi: '1,500%',
        savings: '$67.2M',
        company: '$3.2B',
        timeframe: '6 months'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Manufacturing'],
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide to 700% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      metrics: {
        roi: '700%',
        savings: '$4.2B',
        automation: '95%',
        efficiency: '89%'
      },
      tags: ['Autonomous AI', 'Business Systems', 'ROI', 'Automation'],
      readingTime: '20 min read',
      isNew: true
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
    localStorage.setItem('ultimateContentShowcase2025Banner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContentShowcase2025Banner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultimate AI Transformation Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI transformation strategies achieving 1,500% ROI in 6 months
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Content Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-sm opacity-90">Savings</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentContent.metrics.timeframe || currentContent.metrics.automation}
                  </div>
                  <div className="text-sm opacity-90">
                    {currentContent.metrics.timeframe ? 'Timeframe' : 'Automation'}
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentContent.metrics.satisfaction || currentContent.metrics.efficiency}
                  </div>
                  <div className="text-sm opacity-90">
                    {currentContent.metrics.satisfaction ? 'Satisfaction' : 'Efficiency'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full Article
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="w-full lg:w-96 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-lg font-semibold">AI Transformation</div>
                <div className="text-sm opacity-75">Ultimate Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">1,500%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">$4.8M</div>
            <div className="text-sm opacity-90">Average Savings</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.2%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
        </div>

        {/* Dismiss Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDismiss}
            className="text-white/75 hover:text-white text-sm transition-colors"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;