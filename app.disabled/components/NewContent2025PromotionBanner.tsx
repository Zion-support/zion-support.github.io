'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Clock, Users } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    accuracy?: string;
    timeframe?: string;
  };
  readingTime: string;
  tags: string[];
}

const NewContent2025PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: "advanced-automation-revolution",
      title: "AI 2025: The Advanced Automation Revolution - Ultimate Guide to 750% ROI",
      type: "blog",
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      metrics: {
        roi: "750%",
        savings: "$3.2M annually",
        efficiency: "340%",
        accuracy: "99.7%",
        timeframe: "18 months"
      },
      readingTime: "22 min read",
      tags: ["AI Automation", "Enterprise Transformation", "ROI", "Process Optimization"]
    },
    {
      id: "manufacturing-transformation-900-roi",
      title: "AI 2025 Manufacturing Transformation: $3.8B Company Achieves 900% ROI in 15 Months",
      type: "case-study",
      url: "/case-studies/ai-2025-manufacturing-transformation-900-roi-success",
      metrics: {
        roi: "900%",
        savings: "$4.2M annually",
        efficiency: "450%",
        accuracy: "99.8%",
        timeframe: "15 months"
      },
      readingTime: "18 min read",
      tags: ["Manufacturing AI", "Case Study", "ROI Success", "Enterprise Transformation"]
    },
    {
      id: "implementation-ultimate-roadmap",
      title: "AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,000% ROI in 18 Months",
      type: "resource",
      url: "/resources/ai-2025-implementation-ultimate-roadmap",
      metrics: {
        roi: "1,000%",
        savings: "$4.2M annually",
        efficiency: "450%",
        accuracy: "94%",
        timeframe: "18 months"
      },
      readingTime: "20 min read",
      tags: ["AI Implementation", "ROI Roadmap", "Enterprise Transformation", "Strategic Planning"]
    },
    {
      id: "edge-computing-revolution",
      title: "AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI",
      type: "blog",
      url: "/blog/ai-2025-edge-computing-revolution-ultimate-guide",
      metrics: {
        roi: "450%",
        savings: "$2.3M annually",
        efficiency: "67%",
        accuracy: "99.7%",
        timeframe: "12 months"
      },
      readingTime: "18 min read",
      tags: ["Edge Computing", "AI", "ROI", "Latency", "Cost Optimization"]
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newContent.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    setIsAutoPlaying(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Star className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">NEW CONTENT 2025</span>
              </div>
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                {getTypeIcon(currentContent.type)}
                <span className="capitalize">{currentContent.type.replace('-', ' ')}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {currentContent.title}
            </h3>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="font-medium text-gray-900">{currentContent.metrics.roi} ROI</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-gray-600">Savings:</span>
                <span className="font-medium text-gray-900">{currentContent.metrics.savings}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">{currentContent.readingTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentContent.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={currentContent.url}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Now
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Previous content"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Progress indicators */}
            <div className="flex space-x-1">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
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
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;