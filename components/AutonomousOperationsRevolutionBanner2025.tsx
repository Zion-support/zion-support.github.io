'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
}

const AutonomousOperationsRevolutionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-business-operations',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-operations-revolution',
      metrics: {
        roi: '340%',
        savings: '$2.8B',
        efficiency: '78%'
      },
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Operations Success: 650% ROI',
      type: 'case-study',
      url: '/case-studies/autonomous-operations-success-fortune-500-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        efficiency: '78%'
      },
      readingTime: '22 min read'
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Operations Implementation Guide 2025',
      type: 'resource',
      url: '/resources/autonomous-operations-implementation-guide-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        efficiency: '78%'
      },
      readingTime: '30 min read'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-operations-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-operations-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">🚀 AUTONOMOUS OPERATIONS REVOLUTION 2025</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Business with Autonomous AI Operations
            </h2>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-yellow-300">650%</span>
                <span className="text-sm opacity-90">ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-300">$2.8B</span>
                <span className="text-sm opacity-90">Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-300">78%</span>
                <span className="text-sm opacity-90">Efficiency</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                  <div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                      {currentItem.type.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                </div>
                <span className="text-sm opacity-75">{currentItem.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {currentItem.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-yellow-300">{currentItem.metrics.roi}</span>
                  <span className="opacity-75">ROI</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-green-300">{currentItem.metrics.savings}</span>
                  <span className="opacity-75">Savings</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-blue-300">{currentItem.metrics.efficiency}</span>
                  <span className="opacity-75">Efficiency</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read {currentItem.type === 'case-study' ? 'Case Study' : currentItem.type === 'resource' ? 'Guide' : 'Article'}
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="space-y-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white bg-opacity-20 rounded-full h-1">
          <div 
            className="bg-white h-1 rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
          />
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
    </div>
  );
};

export default AutonomousOperationsRevolutionBanner2025;