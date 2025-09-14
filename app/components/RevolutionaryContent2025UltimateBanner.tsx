'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const RevolutionaryContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const revolutionaryContent = [
    {
      id: 'ultimate-breakthrough-guide',
      title: 'AI 2025: The Enterprise Automation Ultimate Breakthrough - Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with revolutionary AI automation.',
      url: '/blog/ai-2025-enterprise-automation-ultimate-breakthrough-complete-guide',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      category: 'Ultimate Guide'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings with 1,200% ROI',
      description: 'Complete case study showing how a $50B company achieved unprecedented results.',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '89%'
      },
      readingTime: '18 min read',
      featured: true,
      category: 'Success Story'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,200% ROI',
      description: 'The definitive framework for achieving 1,200% ROI with AI implementation.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'resource',
      metrics: {
        roi: '1,200%',
        success: '94%',
        efficiency: '67%',
        satisfaction: '89%'
      },
      readingTime: '30 min read',
      featured: true,
      category: 'Framework'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-ultimate-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const content = revolutionaryContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="text-sm font-medium bg-yellow-400/20 px-3 py-1 rounded-full">
                  REVOLUTIONARY CONTENT 2025
                </span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Content showcase */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Revolutionary AI Content Collection
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  The most comprehensive collection of AI transformation content, featuring 
                  <span className="text-yellow-400 font-bold"> 1,200% ROI success stories</span> and 
                  proven implementation frameworks.
                </p>
              </div>

              {/* Featured content card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-medium bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                      {content.type.toUpperCase()}
                    </span>
                    <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4 text-gray-300" />
                      <span className="text-xs text-gray-300">{content.readingTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs text-yellow-400">FEATURED</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-200 mb-6 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <ChartBarIcon className="h-5 w-5 text-green-400" />
                    <div>
                      <div className="text-green-400 font-bold text-lg">{content.metrics.roi}</div>
                      <div className="text-xs text-gray-300">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CurrencyDollarIcon className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-blue-400 font-bold text-lg">{content.metrics.savings}</div>
                      <div className="text-xs text-gray-300">Savings</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
                >
                  <span>Read Complete Guide</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>

              {/* Content navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {revolutionaryContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentContent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentContent ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  {currentContent + 1} of {revolutionaryContent.length}
                </div>
              </div>
            </div>

            {/* Right side - Statistics and additional content */}
            <div className="space-y-6">
              {/* Impact statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Content Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Content</span>
                    <span className="text-lg font-bold text-yellow-400">18+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Success Stories</span>
                    <span className="text-lg font-bold text-green-400">6+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Implementation Guides</span>
                    <span className="text-lg font-bold text-blue-400">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Reading Time</span>
                    <span className="text-lg font-bold text-purple-400">260+ min</span>
                  </div>
                </div>
              </div>

              {/* Additional content links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">More Revolutionary Content</h3>
                {revolutionaryContent.filter((_, index) => index !== currentContent).map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="block p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-yellow-400 transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-400">{item.readingTime}</span>
                          <span className="text-xs text-green-400">{item.metrics.roi} ROI</span>
                        </div>
                      </div>
                      <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Call to action */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-lg font-semibold mb-2">Ready to Transform?</h3>
                <p className="text-sm text-gray-200 mb-4">
                  Get your personalized AI implementation roadmap and start achieving 1,200% ROI.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 text-sm"
                >
                  <span>Get Free Consultation</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;