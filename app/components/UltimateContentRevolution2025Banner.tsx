'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution',
      description: 'Achieve 2,500% ROI through AI-powered content strategies that are reshaping entire industries',
      metrics: '2,500% ROI • $45.2M Savings • 1,200% Content Increase',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      readingTime: '30 min read',
      featured: true
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Content Revolution Success',
      description: '$45.2M Annual Savings - 2,500% ROI Success Story from Global Media Conglomerate',
      metrics: '2,500% ROI • $45.2M Savings • 1,500% Content Output',
      type: 'case-study',
      url: '/case-studies/fortune-500-content-revolution-2500-roi-success-story',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide',
      description: 'Complete Roadmap to 2,500% ROI - Ultimate Implementation Guide for Content Transformation',
      metrics: '2,500% ROI • Complete Roadmap • 45 min Guide',
      type: 'resource',
      url: '/resources/ai-content-revolution-implementation-ultimate-guide-2025',
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem('ultimate-content-revolution-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Ultimate Content Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Transform your content operations with AI and achieve unprecedented 2,500% ROI
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">FEATURED CONTENT</span>
            </div>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentItem.type.toUpperCase()}
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="text-sm text-gray-300">{currentItem.readingTime}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-lg text-gray-200 mb-6">
                {currentItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">2,500%</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">$45.2M</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">1,200%</div>
                  <div className="text-sm text-gray-300">Content Increase</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Guide →
                </Link>
                <Link
                  href="/content-revolution"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore All Content
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h4 className="text-xl font-bold mb-4">Content Revolution Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Content Creation Speed</span>
                      <span className="text-lg font-bold text-green-400">1,200% Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Content Quality</span>
                      <span className="text-lg font-bold text-blue-400">99.7% Consistency</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cost Reduction</span>
                      <span className="text-lg font-bold text-purple-400">78% Lower</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Engagement</span>
                      <span className="text-lg font-bold text-yellow-400">450% Higher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🏢</div>
            <h4 className="text-lg font-bold mb-2">Fortune 500 Success</h4>
            <p className="text-sm text-gray-300 mb-3">Global Media Conglomerate achieved 2,500% ROI</p>
            <div className="text-2xl font-bold text-green-400">$45.2M</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="text-lg font-bold mb-2">Content Volume</h4>
            <p className="text-sm text-gray-300 mb-3">Massive increase in content production</p>
            <div className="text-2xl font-bold text-blue-400">1,500%</div>
            <div className="text-sm text-gray-300">Content Increase</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-lg font-bold mb-2">Engagement</h4>
            <p className="text-sm text-gray-300 mb-3">Dramatic improvement in audience engagement</p>
            <div className="text-2xl font-bold text-purple-400">560%</div>
            <div className="text-sm text-gray-300">Engagement Boost</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Content Revolution
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
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

export default UltimateContentRevolution2025Banner;