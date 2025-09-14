'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025AdvancedAIAutomationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ai-automation-mastery',
      title: 'AI 2025: Advanced AI Automation Enterprise Mastery',
      description: 'Ultimate Guide to 2,000% ROI - Transform your enterprise with cutting-edge AI automation',
      url: '/blog/ai-2025-advanced-ai-automation-enterprise-mastery-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '2,000%',
        savings: '$8.2B+',
        efficiency: '95%',
        accuracy: '99.7%'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Automation Transformation',
      description: '$8.2B Annual Savings - 2,000% ROI Success Story',
      url: '/case-studies/fortune-500-ai-automation-transformation-2000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '2,000%',
        savings: '$8.2B',
        efficiency: '95%',
        uptime: '99.9%'
      },
      badge: 'FEATURED',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Master Guide 2025',
      description: 'Complete Roadmap from Strategy to 2,000% ROI',
      url: '/resources/ai-automation-master-guide-2025',
      type: 'Resource',
      metrics: {
        roi: '2,000%',
        timeline: '18 months',
        success: '94%',
        projects: '1,000+'
      },
      badge: 'GUIDE',
      color: 'from-indigo-600 to-purple-600'
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
    localStorage.setItem('ai-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-bold">🚀 NEW CONTENT 2025</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-bold">2,000% ROI ACHIEVED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-bold">
                  {currentContent.badge}
                </span>
                <span className="text-sm opacity-90">{currentContent.type}</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Content →
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Featured Content</h3>
            <div className="space-y-3">
              {content.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white bg-opacity-30 scale-105'
                      : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold bg-white bg-opacity-20 rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                    <span className="text-sm opacity-90">{item.type}</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AdvancedAIAutomationBanner;