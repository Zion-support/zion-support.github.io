'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  tags: string[];
}

const NewContent2025PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      roi: '750%',
      savings: '$8.2M annually',
      readingTime: '22 min read',
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Predictive Intelligence']
    },
    {
      id: 'manufacturing-transformation-900-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 900% ROI in 20 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-900-roi-success',
      roi: '900%',
      savings: '$28.7M annually',
      readingTime: '18 min read',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-master-roadmap',
      title: 'AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-roadmap-ultimate-guide',
      roi: '1,000%',
      savings: '$4.2M annually',
      readingTime: '35 min read',
      tags: ['Implementation Roadmap', 'AI Strategy', 'ROI', 'Master Guide']
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 650% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      roi: '650%',
      savings: '$5.8M annually',
      readingTime: '20 min read',
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization']
    },
    {
      id: 'financial-services-1200-roi',
      title: 'AI 2025 Financial Services Transformation: $1.8B Bank Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-1200-roi-success',
      roi: '1,200%',
      savings: '$23.8M annually',
      readingTime: '16 min read',
      tags: ['Financial Services', 'Banking', 'AI Transformation', 'ROI']
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('newContent2025BannerDismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDismissed, contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('newContent2025BannerDismissed', 'true');
    }
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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  if (isDismissed) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 transform -skew-y-1"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Close Button */}
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
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                  New Content 2025
                </span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                {getTypeLabel(currentItem.type)}
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {currentItem.title}
            </h3>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-green-600">{currentItem.roi} ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-blue-600">{currentItem.savings}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-purple-600" />
                <span className="font-semibold text-purple-600">{currentItem.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {currentItem.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white bg-opacity-60 text-xs font-medium text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href={currentItem.url}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Read Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={handlePrevious}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous content"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next content"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${((currentIndex + 1) / contentItems.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;