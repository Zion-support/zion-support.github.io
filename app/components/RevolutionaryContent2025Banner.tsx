'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  excerpt: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    time?: string;
  };
  isNew?: boolean;
}

const RevolutionaryContent2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      excerpt: 'Discover how leading enterprises are achieving 500% ROI, reducing costs by 60%, and transforming operations with AI automation.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months'
      },
      isNew: true
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      excerpt: 'Real case study: How a Fortune 500 company achieved 500% ROI, $200M annual savings, and 400% productivity gains in 12 months.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months'
      },
      isNew: true
    },
    {
      id: 'ai-automation-implementation-guide',
      title: 'AI Automation Implementation Guide 2025: From Strategy to 500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      excerpt: 'Complete step-by-step guide to implementing AI automation. Achieve 500% ROI, reduce costs by 60%, and transform your business.',
      metrics: {
        roi: '500%',
        savings: '60%',
        satisfaction: '98%',
        time: '6-12 months'
      },
      isNew: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('revolutionary-content-2025-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-dismissed', 'true');
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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource Guide';
      default:
        return 'Content';
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    REVOLUTIONARY CONTENT 2025
                  </span>
                </div>
                {currentItem.isNew && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    NEW
                  </span>
                )}
              </div>

              {/* Content showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-blue-200">
                    <span>{getTypeIcon(currentItem.type)}</span>
                    <span>{getTypeLabel(currentItem.type)}</span>
                    <span>•</span>
                    <span>Just Published</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {currentItem.title}
                  </h2>
                  
                  <p className="text-lg text-blue-100 leading-relaxed">
                    {currentItem.excerpt}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentItem.metrics.roi && (
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-300">{currentItem.metrics.roi}</div>
                        <div className="text-xs text-blue-200">ROI</div>
                      </div>
                    )}
                    {currentItem.metrics.savings && (
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-yellow-300">{currentItem.metrics.savings}</div>
                        <div className="text-xs text-blue-200">Savings</div>
                      </div>
                    )}
                    {currentItem.metrics.satisfaction && (
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-300">{currentItem.metrics.satisfaction}</div>
                        <div className="text-xs text-blue-200">Satisfaction</div>
                      </div>
                    )}
                    {currentItem.metrics.time && (
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-300">{currentItem.metrics.time}</div>
                        <div className="text-xs text-blue-200">Timeline</div>
                      </div>
                    )}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={currentItem.url}
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Read Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/content"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                    >
                      View All Content
                    </Link>
                  </div>
                </div>

                {/* Content preview cards */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-200 mb-4">Featured Content</h3>
                  <div className="space-y-3">
                    {contentItems.map((item, index) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                          index === currentIndex
                            ? 'border-white bg-white/20'
                            : 'border-white/30 bg-white/5 hover:bg-white/10'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{getTypeIcon(item.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-blue-200">
                                {getTypeLabel(item.type)}
                              </span>
                              {item.isNew && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                  NEW
                                </span>
                              )}
                            </div>
                            <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">
                              {item.title}
                            </h4>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-blue-200">
                              {item.metrics.roi && (
                                <span className="flex items-center space-x-1">
                                  <TrendingUp className="h-3 w-3" />
                                  <span>{item.metrics.roi} ROI</span>
                                </span>
                              )}
                              {item.metrics.savings && (
                                <span className="flex items-center space-x-1">
                                  <CheckCircle className="h-3 w-3" />
                                  <span>{item.metrics.savings}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;