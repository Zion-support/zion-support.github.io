'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with AI transformation strategies.',
      type: 'Blog Post',
      url: '/blog/ai-2025-ultimate-business-transformation-complete-guide',
      metrics: {
        roi: '1000%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '99.7%'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $5B Company Achieves 1000% ROI',
      description: 'Complete case study with implementation details, challenges, and results from real-world success.',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      metrics: {
        roi: '1000%',
        savings: '$850M',
        timeline: '12 months',
        efficiency: '89%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1000% ROI',
      description: 'Complete step-by-step roadmap for achieving 1000% ROI through AI implementation.',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi',
      metrics: {
        roi: '1000%',
        success: '99.7%',
        timeline: '12 months',
        projects: '500+'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">NEW 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-1 bg-green-500/20 rounded-full px-3 py-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">1000% ROI</span>
                </div>
              </div>

              {/* Main content */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  🚀 Ultimate AI 2025 Content Collection
                </h2>
                <p className="text-lg text-blue-100 mb-4">
                  Discover the complete guide to achieving 1000% ROI through AI transformation
                </p>
              </div>

              {/* Content showcase */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-blue-200">{currentContent.type}</span>
                      <span className="text-xs bg-white/20 rounded-full px-2 py-1">
                        {currentContent.readingTime}
                      </span>
                      {currentContent.featured && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-300 rounded-full px-2 py-1">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{currentContent.title}</h3>
                    <p className="text-blue-100 text-sm mb-4">{currentContent.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {Object.entries(currentContent.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-blue-200 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={currentContent.url}
                        className="inline-flex items-center px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Read Now
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                      >
                        View All Case Studies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex items-center space-x-2 mb-4">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Additional content links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                  All Blog Posts →
                </Link>
                <Link href="/resources" className="text-blue-200 hover:text-white transition-colors">
                  Implementation Guides →
                </Link>
                <Link href="/tools/ai-roi-calculator" className="text-blue-200 hover:text-white transition-colors">
                  ROI Calculator →
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025Banner;