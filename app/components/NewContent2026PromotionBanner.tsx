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
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Impact in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      excerpt: 'Learn how a Fortune 500 company achieved $5.2B in additional revenue through strategic AI implementation.',
      featured: true,
      isNew: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Revenue Impact'],
      metrics: {
        roi: '500%',
        impact: '$5.2B',
        readers: '75K+'
      }
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI solutions that deliver 500% ROI within 12 months.',
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

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (!isDismissed && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [isDismissed, isVisible, featuredContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('content2026-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Award className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
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

            {/* Content Display */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${getTypeColor(currentContent.type)}`}>
                  {getTypeIcon(currentContent.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {currentContent.title}
                  </h3>
                  <p className="text-white/90 mb-3 text-sm leading-relaxed">
                    {currentContent.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {currentContent.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  {currentContent.metrics && (
                    <div className="flex items-center space-x-4 mb-4">
                      {currentContent.metrics.roi && (
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">ROI:</span>
                          <span className="text-yellow-300 font-bold">{currentContent.metrics.roi}</span>
                        </div>
                      )}
                      {currentContent.metrics.impact && (
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">Impact:</span>
                          <span className="text-green-300 font-bold">{currentContent.metrics.impact}</span>
                        </div>
                      )}
                      {currentContent.metrics.readers && (
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">Readers:</span>
                          <span className="text-blue-300 font-bold">{currentContent.metrics.readers}</span>
                        </div>
                      )}
                    </div>
                  )}

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
            <div className="flex space-x-1 mt-4">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
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