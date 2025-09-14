'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  readingTime: string;
  featured: boolean;
}

const UltimateContentShowcase2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Complete Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-complete-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '340%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: '1000-percent-roi-success',
      title: 'AI Transformation Ultimate Success: $2.8B Company Achieves 1,000% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        satisfaction: '99.8%',
        efficiency: '78%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      metrics: {
        roi: '340%',
        satisfaction: '98%',
        efficiency: '67%'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

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

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the most comprehensive AI transformation resources with proven 500%+ ROI results
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getTypeIcon(currentContent.type)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold leading-tight">
                {currentContent.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-blue-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Now →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Successful Projects</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">340%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">$2.8B</div>
                <div className="text-sm opacity-90">Total Savings</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center space-x-2 mb-6">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">{getTypeIcon(content.type)}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                  {content.type.toUpperCase()}
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                {content.title}
              </h4>
              <div className="text-xs text-blue-200">
                {content.readingTime} • {content.metrics.roi} ROI
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free AI Consultation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Join 500+ companies achieving 340% ROI with our AI solutions
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;