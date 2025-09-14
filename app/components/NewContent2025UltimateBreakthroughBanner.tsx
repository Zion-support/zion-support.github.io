'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
  featured: boolean;
}

const NewContent2025UltimateBreakthroughBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // New ultimate breakthrough content
  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-breakthrough-2025',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B+',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$5.6B+',
        efficiency: '94%',
        satisfaction: '99%'
      },
      readingTime: '28 min read',
      featured: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('newContent2025UltimateBreakthroughBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDismissed, contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBreakthroughBannerDismissed', 'true');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
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
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-8 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-4 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">NEW ULTIMATE BREAKTHROUGH CONTENT 2025</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 bg-red-500 bg-opacity-90 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold">FEATURED</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Revolutionary AI Content That's Transforming Enterprises
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Discover the ultimate breakthrough strategies that Fortune 500 companies are using to achieve 
                  <span className="font-bold text-yellow-300"> 1,200% ROI</span> and 
                  <span className="font-bold text-green-300"> $3.2B+ in savings</span>.
                </p>
              </div>

              {/* Current content item */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentItem.type)}`}>
                      {currentItem.type.toUpperCase()}
                    </span>
                    {currentItem.featured && (
                      <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-blue-200">
                    <Clock className="w-4 h-4" />
                    <span>{currentItem.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {currentItem.title}
                </h3>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-300">{currentItem.metrics.roi}</div>
                    <div className="text-sm text-blue-200">ROI Achievement</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-300">{currentItem.metrics.savings}</div>
                    <div className="text-sm text-blue-200">Total Savings</div>
                  </div>
                  {currentItem.metrics.efficiency && (
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-300">{currentItem.metrics.efficiency}</div>
                      <div className="text-sm text-blue-200">Efficiency</div>
                    </div>
                  )}
                  {currentItem.metrics.satisfaction && (
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-300">{currentItem.metrics.satisfaction}</div>
                      <div className="text-sm text-blue-200">Satisfaction</div>
                    </div>
                  )}
                </div>

                <Link
                  href={currentItem.url}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Read Now</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Success metrics and CTA */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-4 text-center">Proven Results</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                      <span className="font-semibold">Average ROI</span>
                    </div>
                    <span className="text-2xl font-bold text-yellow-300">1,200%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-green-400" />
                      <span className="font-semibold">Fortune 500 Companies</span>
                    </div>
                    <span className="text-2xl font-bold text-green-300">500+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-blue-400" />
                      <span className="font-semibold">Success Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-300">94%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/resources/ai-implementation-ultimate-success-framework-2025"
                  className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-4 px-6 rounded-lg font-semibold hover:from-green-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
                >
                  Download Complete Implementation Guide
                </Link>
                <Link
                  href="/case-studies"
                  className="block w-full border-2 border-white text-white text-center py-4 px-6 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Explore All Success Stories
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={handlePrevious}
              className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
              aria-label="Previous content"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={handleNext}
              className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
              aria-label="Next content"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;