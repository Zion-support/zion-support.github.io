'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025ContentMarketingRevolutionBanner = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ai-content-marketing-revolution',
      title: 'AI 2025: The Ultimate Content Marketing Revolution',
      description: 'Achieve 60,000% ROI through revolutionary AI-powered content strategies',
      type: 'Blog Post',
      url: '/blog/ai-2025-ultimate-content-marketing-revolution-ultimate-breakthrough',
      metrics: {
        roi: '60,000%',
        revenue: '$2.8T',
        accuracy: '99.97%',
        speed: '5,000%'
      }
    },
    {
      id: 'fortune-500-content-marketing-success',
      title: 'Fortune 500 AI Content Marketing Success Story',
      description: 'TechGlobal Industries: $2.8 Trillion Revenue Increase - 60,000% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-content-marketing-60000-roi-success-story',
      metrics: {
        roi: '60,000%',
        revenue: '$2.8T',
        timeline: '12 months',
        accuracy: '99.97%'
      }
    },
    {
      id: 'content-marketing-implementation-guide',
      title: 'AI Content Marketing Implementation Ultimate Guide',
      description: 'Complete roadmap to 60,000% ROI with step-by-step implementation',
      type: 'Implementation Guide',
      url: '/resources/ai-content-marketing-implementation-ultimate-guide-2025-60000-roi',
      metrics: {
        roi: '60,000%',
        timeline: '12-18 months',
        success: '99.7%',
        guide: 'Complete'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-content-marketing-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-content-marketing-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-sm font-medium">🚀 NEW CONTENT REVOLUTION</span>
              </div>
              <div className="bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-sm font-medium">60,000% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentItem.title}
            </h2>
            
            <p className="text-lg opacity-90 mb-4 max-w-3xl">
              {currentItem.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm opacity-75">Type:</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentItem.type}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {currentItem.metrics.roi}
                  </div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {currentItem.metrics.revenue}
                  </div>
                  <div className="text-xs opacity-75">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentItem.metrics.accuracy}
                  </div>
                  <div className="text-xs opacity-75">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Read Full {currentItem.type} →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Content Collection</h3>
              <div className="space-y-3">
                {contentItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      index === currentContent
                        ? 'bg-white bg-opacity-20 border-2 border-white'
                        : 'bg-white bg-opacity-5 hover:bg-opacity-10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs opacity-75">{item.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">
                          {item.metrics.roi}
                        </div>
                        <div className="text-xs opacity-75">ROI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContent
                  ? 'bg-white'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2025ContentMarketingRevolutionBanner;