'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025AutomationRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide to 2,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B+',
        efficiency: '1,200%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ai-automation-transformation-2500-roi-success-story',
      title: 'Fortune 500 AI Automation Transformation: $15.8B Annual Savings - 2,500% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-2500-roi-success-story',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'ai-automation-implementation-ultimate-guide-2025',
      title: 'AI Automation Implementation Ultimate Guide 2025: Complete Roadmap to 2,500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-guide-2025',
      metrics: {
        roi: '2,500%',
        success: '1,000+',
        timeline: '18 months',
        projects: 'Fortune 500'
      },
      readingTime: '25 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-automation-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW AI AUTOMATION REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Enterprise with AI Automation
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving 2,500% ROI with our comprehensive AI automation solutions
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                NEW
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentContent.type.toUpperCase()}
              </span>
            </div>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              {currentContent.title}
            </h3>
            <p className="text-blue-100 text-sm">
              {currentContent.readingTime} • Featured Content
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
              <div className="text-xs text-blue-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
              <div className="text-xs text-blue-200">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {currentContent.metrics.efficiency || currentContent.metrics.timeline}
              </div>
              <div className="text-xs text-blue-200">
                {currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {currentContent.metrics.accuracy || currentContent.metrics.satisfaction || currentContent.metrics.success}
              </div>
              <div className="text-xs text-blue-200">
                {currentContent.metrics.accuracy ? 'Accuracy' : 
                 currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Stories'}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.url}
              className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white/50' : 'hover:bg-white/10'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  NEW
                </span>
                <span className="text-xs text-blue-200">{content.readingTime}</span>
              </div>
              <h4 className="font-semibold text-sm line-clamp-2 mb-2">
                {content.title}
              </h4>
              <div className="text-xs text-blue-200">
                {content.type === 'case-study' ? 'Case Study' : 
                 content.type === 'resource' ? 'Implementation Guide' : 'Blog Post'}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/services/ai-automation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Explore AI Automation Services
            </Link>
            <Link
              href="/case-studies"
              className="text-white hover:text-blue-200 transition-colors"
            >
              View All Success Stories →
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AI2025AutomationRevolutionBanner;