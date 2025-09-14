'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, Users, Clock, Star } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  featured: boolean;
  isNew: boolean;
  tags: string[];
  metrics?: {
    roi?: string;
    savings?: string;
    timeToValue?: string;
  };
}

const NewContent2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      type: 'blog',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems.',
      featured: true,
      isNew: true,
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      metrics: {
        roi: '400%',
        savings: '$2.8M',
        timeToValue: '90 days'
      }
    },
    {
      id: 'ai-transformation-500m-revenue',
      title: 'AI Transformation Success: $500M Revenue Increase in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-transformation-500m-revenue-increase',
      excerpt: 'How a Fortune 100 company achieved $500M revenue increase through comprehensive AI transformation.',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'AI Transformation', 'Revenue Growth', 'Enterprise Success'],
      metrics: {
        roi: '500%',
        savings: '$500M',
        timeToValue: '18 months'
      }
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 2026: From Strategy to 400% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to AI implementation in 2026. Step-by-step framework to achieve 400% ROI within 90 days.',
      featured: true,
      isNew: true,
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      metrics: {
        roi: '400%',
        savings: '60-80%',
        timeToValue: '90 days'
      }
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('newContent2026BannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % newContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('newContent2026BannerDismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentContent = newContent[currentItem];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mr-4">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">NEW 2026 CONTENT</span>
              </div>
              <div className="flex items-center text-sm opacity-90">
                <Clock className="w-4 h-4 mr-1" />
                <span>Updated {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{getTypeIcon(currentContent.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mr-3 ${getTypeColor(currentContent.type)}`}>
                      {currentContent.type.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      NEW
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {currentContent.title}
                  </h3>
                  <p className="text-white opacity-90 mb-4 leading-relaxed">
                    {currentContent.excerpt}
                  </p>
                  
                  {/* Metrics */}
                  {currentContent.metrics && (
                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{currentContent.metrics.roi} ROI</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{currentContent.metrics.savings} Savings</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{currentContent.metrics.timeToValue} Timeline</span>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentContent.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentItem ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;