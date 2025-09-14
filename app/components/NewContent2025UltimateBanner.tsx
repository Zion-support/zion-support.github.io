'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
}

const NewContent2025UltimateBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 900% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      metrics: {
        roi: '900%',
        savings: '$8.2M annually',
        efficiency: '450%',
        satisfaction: '99.9%'
      },
      readingTime: '22 min read'
    },
    {
      id: 'manufacturing-transformation-1200-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-1200-roi-success',
      metrics: {
        roi: '1,200%',
        savings: '$450M annually',
        efficiency: '78%',
        satisfaction: '96%'
      },
      readingTime: '18 min read'
    },
    {
      id: 'implementation-master-roadmap-ultimate',
      title: 'AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-roadmap-ultimate-guide',
      metrics: {
        roi: '1,000%',
        savings: '$5.2M annually',
        efficiency: '94%',
        satisfaction: '94%'
      },
      readingTime: '35 min read'
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      metrics: {
        roi: '750%',
        savings: '$6.8M annually',
        efficiency: '340%',
        satisfaction: '99.8%'
      },
      readingTime: '20 min read'
    },
    {
      id: 'financial-services-transformation-850-roi',
      title: 'AI 2025 Financial Services Transformation: $2.1B Bank Achieves 850% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-850-roi-success',
      metrics: {
        roi: '850%',
        savings: '$180M annually',
        efficiency: '340%',
        satisfaction: '99.5%'
      },
      readingTime: '16 min read'
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlaying, contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
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
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-blue-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">NEW 2025 CONTENT</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                {getTypeIcon(currentItem.type)} {currentItem.type.toUpperCase()}
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {currentItem.title}
            </h3>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">{currentItem.metrics.roi} ROI</span>
              </div>
              {currentItem.metrics.savings && (
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">{currentItem.metrics.savings}</span>
                </div>
              )}
              {currentItem.metrics.efficiency && (
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">{currentItem.metrics.efficiency} Efficiency</span>
                </div>
              )}
              <span className="text-sm text-gray-500">{currentItem.readingTime}</span>
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-1 mb-3">
              {contentItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
            <a
              href={currentItem.url}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Now
            </a>
            <a
              href="/resources"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All Resources
            </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Previous content"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Next content"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;