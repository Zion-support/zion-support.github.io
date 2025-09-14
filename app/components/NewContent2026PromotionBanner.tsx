'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

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
    impact?: string;
    readers?: string;
  };
}

const NewContent2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('content2026-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Auto-rotate content every 5 seconds
  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  const featuredContent: ContentItem[] = [
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
        impact: '$5.2B',
        readers: '50K+'
      }
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Impact in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      excerpt: 'How a Fortune 500 manufacturing company achieved $5.2B in additional revenue through comprehensive AI transformation.',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Revenue Growth'],
      metrics: {
        roi: '512%',
        impact: '$5.2B',
        readers: '25K+'
      }
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI in your organization. Step-by-step roadmap to achieve 500% ROI within 12 months.',
      featured: true,
      isNew: true,
      tags: ['Implementation Guide', 'AI', 'ROI', 'Best Practices'],
      metrics: {
        roi: '500%',
        impact: '1K+',
        readers: '100K+'
      }
    }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('content2026-banner-dismissed', 'true');
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

  if (isDismissed || !isVisible) {
    return null;
  }

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  NEW 2026 CONTENT
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Trending Now</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    {getTypeIcon(currentContent.type)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                      {currentContent.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-medium">
                      NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {currentContent.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3 line-clamp-2">
                    {currentContent.excerpt}
                  </p>
                  
                  {/* Metrics */}
                  {currentContent.metrics && (
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-300" />
                        <span className="text-sm font-medium">{currentContent.metrics.roi} ROI</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm font-medium">{currentContent.metrics.impact} Impact</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-300" />
                        <span className="text-sm font-medium">{currentContent.metrics.readers} Readers</span>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {currentContent.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-2 mt-4">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;