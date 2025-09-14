'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Complete Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-complete-guide',
      description: 'Transform your business with our comprehensive AI implementation framework. Achieve 500%+ ROI within 18 months.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success: $2.8B Company Achieves 1,000% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      description: 'Real-world success story of a Fortune 500 company that achieved unprecedented 1,000% ROI through AI transformation.',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        revenue: '$1.2B',
        efficiency: '89%'
      },
      readingTime: '12 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      description: 'The ultimate framework for AI implementation success. Based on analysis of 500+ successful enterprise transformations.',
      metrics: {
        successRate: '94%',
        averageRoi: '500%',
        implementationTime: '67% faster',
        projects: '500+'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEW 2025 CONTENT REVOLUTION</span>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Title and Description */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Ultimate AI 2025 Content Revolution
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
                Discover the most comprehensive AI implementation guides, success stories, and frameworks. 
                Join 500+ enterprises achieving 500%+ ROI with our proven methodologies.
              </p>
            </div>

            {/* Featured Content Carousel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">Featured Content</span>
                    {currentContent.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Previous content"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Next content"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Content Info */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentContent.type.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1 text-sm opacity-80">
                        <Clock className="w-4 h-4" />
                        <span>{currentContent.readingTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {currentContent.title}
                    </h3>
                    
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {currentContent.description}
                    </p>

                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <span>Read Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentContent.metrics).map(([key, value], index) => (
                      <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {value}
                        </div>
                        <div className="text-sm opacity-80 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Success Statistics */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
                <div className="text-sm opacity-80">Success Stories</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">500%</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">$2.8B</div>
                <div className="text-sm opacity-80">Total Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">94%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Explore All Resources</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  <span>View Success Stories</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;