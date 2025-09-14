'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, X, Star, TrendingUp, Users, Clock } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  url: string;
  type: 'blog' | 'case-study' | 'resource';
  metrics: {
    roi: string;
    savings: string;
    timeframe?: string;
    companies?: string;
  };
  readingTime: string;
}

const UltimateContent2025Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '750%',
        savings: '$8.2M annually',
        companies: '500+'
      },
      readingTime: '28 min read'
    },
    {
      id: 'blockchain-integration-revolution',
      title: 'AI 2025: The Blockchain Integration Revolution - Ultimate Guide to 900% ROI',
      url: '/blog/ai-2025-blockchain-integration-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '900%',
        savings: '$15.8M annually',
        companies: '300+'
      },
      readingTime: '32 min read'
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $3.8B Company Achieves 1,100% ROI',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,100%',
        savings: '$420M annually',
        companies: 'Fortune 500'
      },
      readingTime: '22 min read'
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Roadmap to 1,000% ROI in 12 Months',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-roadmap',
      type: 'resource',
      metrics: {
        roi: '1,000%',
        savings: '$32.7M annually',
        timeframe: '12 months',
        companies: '500+'
      },
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
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
      case 'resource': return 'Master Guide';
      default: return 'Content';
    }
  };

  if (isDismissed || !isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">NEW 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">UP TO 1,100% ROI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">500+ COMPANIES</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {currentItem.title}
                  </h3>
                  
                  <div className="flex items-center space-x-6 mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">
                        {currentItem.metrics.roi}
                      </span>
                      <span className="text-sm">ROI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-blue-400">
                        {currentItem.metrics.savings}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-300">
                        {currentItem.readingTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                      {getTypeLabel(currentItem.type)}
                    </span>
                    <a 
                      href={currentItem.url}
                      className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Read Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 ml-6">
              {/* Progress indicators */}
              <div className="flex space-x-2">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleDismiss}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success metrics overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
    </div>
  );
};

export default UltimateContent2025Banner;