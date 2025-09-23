'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  readingTime?: string;
}

const NewContent2025IntelligenceBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-intelligence-revolution',
      title: 'AI 2025: The Enterprise Intelligence Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-intelligence-revolution-ultimate-guide',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        satisfaction: '99.7%',
        efficiency: '340%'
      },
      readingTime: '28 min read'
    },
    {
      id: 'enterprise-intelligence-success',
      title: '$3.2B Company Achieves 750% ROI with AI-Powered Intelligence Systems',
      type: 'case-study',
      url: '/case-studies/ai-2025-enterprise-intelligence-750-roi-success-story',
      metrics: {
        roi: '750%',
        savings: '$240M',
        satisfaction: '99.8%',
        efficiency: '67%'
      },
      readingTime: '22 min read'
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 650% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      metrics: {
        roi: '650%',
        savings: '$4.2M',
        satisfaction: '99%',
        efficiency: '89%'
      },
      readingTime: '32 min read'
    },
    {
      id: 'customer-experience-implementation',
      title: 'AI 2025 Customer Experience Implementation Master Guide: From Strategy to 650% ROI',
      type: 'resource',
      url: '/resources/ai-2025-customer-experience-implementation-master-guide',
      metrics: {
        roi: '650%',
        savings: '$3.2M',
        satisfaction: '99%',
        efficiency: '89%'
      },
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('intelligence-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('intelligence-banner-dismissed', 'true');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    ));
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Users className="w-4 h-4" />;
      case 'resource': return <ArrowRight className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-blue-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                {getTypeIcon(currentItem.type)}
                <span className="ml-1 capitalize">{currentItem.type.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">NEW 2025</span>
              </div>
              {currentItem.readingTime && (
                <span className="text-sm text-gray-500">{currentItem.readingTime}</span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {currentItem.title}
            </h3>

            {/* Metrics */}
            <div className="flex items-center space-x-6 mb-3">
              {currentItem.metrics.roi && (
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">{currentItem.metrics.roi} ROI</span>
                </div>
              )}
              {currentItem.metrics.savings && (
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-blue-700">{currentItem.metrics.savings} Savings</span>
                </div>
              )}
              {currentItem.metrics.satisfaction && (
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">{currentItem.metrics.satisfaction} Satisfaction</span>
                </div>
              )}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {currentIndex + 1} of {contentItems.length}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 ml-6">
            <div className="flex items-center space-x-1">
              <button
                onClick={handlePrevious}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Previous content"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Next content"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <Link
              href={currentItem.url}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>

            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025IntelligenceBanner;