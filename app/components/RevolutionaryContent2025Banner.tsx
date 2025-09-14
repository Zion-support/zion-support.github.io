'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BannerContent {
  id: string;
  title: string;
  description: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    satisfaction: string;
  };
  type: 'blog' | 'case-study' | 'resource';
  isNew?: boolean;
}

const RevolutionaryContent2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent: BannerContent[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      type: 'blog',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'How a global manufacturing giant achieved 1,200% ROI with comprehensive AI implementation',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '96%'
      },
      type: 'case-study',
      isNew: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: 'How Quantum AI is transforming business with 1,200% ROI and $100B market opportunity',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        roi: '1,200%',
        savings: '$100B Market',
        satisfaction: '99.97%'
      },
      type: 'blog',
      isNew: true
    }
  ];

  const typeIcons = {
    blog: '📝',
    'case-study': '📊',
    resource: '📚'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [bannerContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the Ultimate AI Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Fortune 500 companies are achieving unprecedented results with our proven AI frameworks
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{typeIcons[bannerContent[currentSlide].type]}</span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                {bannerContent[currentSlide].type.replace('-', ' ').toUpperCase()}
              </span>
              {bannerContent[currentSlide].isNew && (
                <span className="px-3 py-1 bg-red-500 bg-opacity-80 rounded-full text-sm font-medium">
                  NEW
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              {bannerContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {bannerContent[currentSlide].title}
          </h3>

          <p className="text-lg opacity-90 mb-6">
            {bannerContent[currentSlide].description}
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.roi}</div>
              <div className="text-sm opacity-80">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.savings}</div>
              <div className="text-sm opacity-80">Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.satisfaction}</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={bannerContent[currentSlide].url}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Full Story →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="w-64 bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / bannerContent.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {bannerContent.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-white bg-opacity-10 hover:bg-opacity-15'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{typeIcons[item.type]}</span>
                <span className="text-sm opacity-80">{item.type.replace('-', ' ').toUpperCase()}</span>
                {item.isNew && (
                  <span className="px-2 py-1 bg-red-500 bg-opacity-80 rounded-full text-xs">
                    NEW
                  </span>
                )}
              </div>
              <h4 className="font-semibold mb-2 line-clamp-2">{item.title}</h4>
              <div className="text-sm opacity-80">
                ROI: <span className="font-semibold">{item.metrics.roi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;