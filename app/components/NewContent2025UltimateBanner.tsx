'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '78%',
        satisfaction: '98%'
      },
      description: 'Master enterprise automation with AI in 2025. Achieve 500%+ ROI with our comprehensive implementation framework and proven strategies.',
      readingTime: '18 min read'
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Discover how a Fortune 100 company achieved unprecedented success with AI transformation, delivering 1,200% ROI and $2.8B in annual savings.',
      readingTime: '12 min read'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'Master AI implementation with our proven framework. Achieve 1,000%+ ROI with step-by-step guidance, best practices, and real-world success strategies.',
      readingTime: '25 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 transform -skew-y-1"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">NEW: Ultimate AI Success Content 2025</h2>
              <p className="text-purple-100 text-sm md:text-base">Revolutionary guides, case studies, and frameworks</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-purple-200 transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Showcase */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Content Info */}
            <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type}
                </span>
                <span className="text-purple-200 text-sm">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-purple-100 mb-4 text-sm md:text-base leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-purple-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-purple-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                  <div className="text-xs text-purple-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">{currentContent.metrics.timeline || currentContent.metrics.projects}</div>
                  <div className="text-xs text-purple-200">Timeline/Projects</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                >
                  Read {currentContent.type}
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="w-full lg:w-80">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-semibold text-lg">Success Metrics</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average ROI</span>
                    <span className="font-bold text-yellow-300">1,000%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Savings</span>
                    <span className="font-bold text-green-300">$2.8B+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Success Rate</span>
                    <span className="font-bold text-blue-300">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Implementation Time</span>
                    <span className="font-bold text-pink-300">18 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-purple-200 text-sm">
            Join 1,000+ companies achieving extraordinary results with our proven AI implementation strategies
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;