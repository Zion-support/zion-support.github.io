'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('newContent2025UltimateBannerDismissed');
    if (!bannerDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBannerDismissed', 'true');
  };

  const contentPieces = [
    {
      id: 'ai-2025-enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-100-ai-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'ai-implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource Guide',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, contentPieces.length]);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-yellow-300 mr-1" />
                <span className="text-sm font-medium">NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4 text-green-300 mr-1" />
                <span className="text-sm font-medium">FEATURED</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm opacity-90">
                <span className="bg-white/20 rounded-full px-3 py-1">
                  {currentContent.type}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center mb-1">
                  <DollarSign className="w-4 h-4 text-green-300 mr-1" />
                  <span className="text-xs font-medium opacity-80">ROI</span>
                </div>
                <div className="text-lg font-bold text-green-300">
                  {currentContent.metrics.roi}
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center mb-1">
                  <TrendingUp className="w-4 h-4 text-blue-300 mr-1" />
                  <span className="text-xs font-medium opacity-80">SAVINGS</span>
                </div>
                <div className="text-lg font-bold text-blue-300">
                  {currentContent.metrics.savings}
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 text-purple-300 mr-1" />
                  <span className="text-xs font-medium opacity-80">SUCCESS</span>
                </div>
                <div className="text-lg font-bold text-purple-300">
                  {currentContent.metrics.success || currentContent.metrics.efficiency}
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center mb-1">
                  <Clock className="w-4 h-4 text-yellow-300 mr-1" />
                  <span className="text-xs font-medium opacity-80">TIMELINE</span>
                </div>
                <div className="text-lg font-bold text-yellow-300">
                  {currentContent.metrics.timeline || '18 months'}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;