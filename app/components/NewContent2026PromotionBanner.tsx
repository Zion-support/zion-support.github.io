'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  featured: boolean;
  isNew: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    impact?: string;
  };
}

const NewContent2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      metrics: {
        roi: '400%',
        savings: '$3.2B',
        impact: '90 Days'
      }
    },
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Revenue Impact in 2026',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2026-success',
      excerpt: 'How a Fortune 500 manufacturing company achieved $5.2B in additional revenue through comprehensive AI transformation.',
      featured: true,
      isNew: true,
      metrics: {
        roi: '450%',
        savings: '$5.2B',
        impact: '18 Months'
      }
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI Implementation Master Guide 2026: Complete Roadmap to 400% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI in your organization. Step-by-step roadmap to achieve 400% ROI within 90 days.',
      featured: true,
      isNew: true,
      metrics: {
        roi: '400%',
        savings: '$10M+',
        impact: '90 Days'
      }
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('newContent2026BannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContent.length);
    }, 5000);

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

  if (!isVisible || isDismissed) return null;

  const currentContent = newContent[currentIndex];

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
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  NEW 2026 CONTENT
                </span>
              </div>
              <div className="flex space-x-1">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                  {getTypeIcon(currentContent.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                    {currentContent.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {currentContent.isNew && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-white/90 mb-4 text-sm md:text-base leading-relaxed">
                  {currentContent.excerpt}
                </p>

                {/* Success Metrics */}
                {currentContent.metrics && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {currentContent.metrics.roi} ROI
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {currentContent.metrics.savings} Savings
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {currentContent.metrics.impact} Timeline
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link
                    href="/content"
                    className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    <span>View All Content</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="flex-shrink-0 ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;