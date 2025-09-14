'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, SparklesIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const AI2025AdvancedAutomationMasteryBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation solutions. Achieve 1,200% ROI with our proven framework.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Automation Transformation: $2.8B Annual Savings',
      description: 'How a global manufacturing giant achieved 1,200% ROI with comprehensive AI automation implementation.',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success',
      type: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '15 min read',
      isNew: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Automation Implementation Ultimate Framework 2025',
      description: 'The complete guide to achieving 1,200% ROI with enterprise AI automation. Proven methodology from 500+ implementations.',
      url: '/resources/ai-automation-implementation-ultimate-framework-2025',
      type: 'Resource',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
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
    localStorage.setItem('ai-2025-advanced-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-advanced-automation-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-6 w-6 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">NEW CONTENT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                AI 2025: Advanced Automation Mastery
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Transform your business with cutting-edge AI automation solutions. 
                Achieve <span className="text-yellow-400 font-bold">1,200% ROI</span> with our proven framework.
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">1,200%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">$2.8B</div>
                <div className="text-sm text-gray-300">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">340%</div>
                <div className="text-sm text-gray-300">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">99.7%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Read Ultimate Guide
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies/fortune-500-ai-automation-transformation-ultimate-success"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>

          {/* Featured Content Showcase */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
                    {currentContent.type}
                  </span>
                  {currentContent.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {currentContent.readingTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {currentContent.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                {currentContent.description}
              </p>

              {/* Content Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-gray-300">Savings</div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium text-sm"
              >
                Read More
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/resources/ai-automation-implementation-ultimate-framework-2025"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <ChartBarIcon className="h-4 w-4 mr-2" />
              Implementation Framework
            </Link>
            <Link
              href="/tools/ai-automation-roi-calculator"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              ROI Calculator
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <SparklesIcon className="h-4 w-4 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AdvancedAutomationMasteryBanner;