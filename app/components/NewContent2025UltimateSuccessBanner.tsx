'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateSuccessBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateSuccessBanner');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('newContent2025UltimateSuccessBanner', 'true');
  };

  if (isDismissed) return null;

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation solutions. Achieve 1,200% ROI with our proven framework.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      description: 'Real-world case study of how a Fortune 100 manufacturing giant transformed operations with AI automation.',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story-2025',
      type: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        facilities: '47 plants'
      },
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025',
      description: 'Complete roadmap to 1,000%+ ROI with our proven implementation framework used by 1,000+ enterprises.',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      type: 'Resource',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        companies: '1,000+'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 bg-opacity-15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400 bg-opacity-20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">NEW 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
              <ChartBarIcon className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">1,200% ROI PROVEN</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss banner"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ultimate AI Success Content Collection 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the latest AI implementation strategies, success stories, and frameworks that have delivered 
                <span className="font-bold text-yellow-400"> 1,200% ROI</span> for Fortune 500 companies.
              </p>
            </div>

            {/* Current Content Item */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {currentItem.type}
                  </span>
                  {currentItem.featured && (
                    <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-sm text-blue-200">
                  <ClockIcon className="h-4 w-4" />
                  <span>{currentItem.readingTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {currentItem.title}
              </h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentItem.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentItem.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-blue-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={currentItem.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Read Now</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Proven Success Metrics</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1,200%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-green-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Average Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
                <div className="text-sm text-blue-200">Companies</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-black mb-2">
                Ready to Achieve 1,200% ROI?
              </h4>
              <p className="text-black text-opacity-80 mb-4">
                Join 1,000+ companies that have transformed their operations with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/resources"
                  className="bg-white bg-opacity-20 text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
                >
                  Explore All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Preview Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Content Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-yellow-400' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-200">
                    <ClockIcon className="h-4 w-4 inline mr-1" />
                    {item.readingTime}
                  </div>
                  <div className="text-sm font-bold text-yellow-400">
                    {item.metrics.roi} ROI
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateSuccessBanner;