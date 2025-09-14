'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'advanced-automation',
      title: 'AI 2025: Advanced Automation Revolution',
      subtitle: '600% ROI • $3.2B Annual Savings • 95% Efficiency',
      description: 'Transform your business with cutting-edge AI automation solutions that deliver unprecedented results.',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '600%',
        savings: '$3.2B',
        efficiency: '95%'
      },
      gradient: 'from-purple-600 to-blue-600'
    },
    {
<<<<<<< HEAD
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$2.8B Company Achieves 600% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-600-roi-success-story',
      description: 'Complete case study of manufacturing giant achieving 600% ROI through AI transformation',
      metrics: {
        roi: '600%',
        company: '$2.8B',
        timeline: '8 months',
        savings: '$340M'
      },
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'autonomous-business-systems',
      title: 'Autonomous Business Systems Revolution',
      subtitle: '700% ROI Through Self-Managing Operations',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution',
      description: 'Self-managing AI systems delivering 700% ROI through autonomous operations',
      metrics: {
        roi: '700%',
        automation: '95%',
        efficiency: '89%',
        savings: '$4.2B'
      },
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'financial-services-transformation',
      title: 'Financial Services AI Transformation',
      subtitle: '$850M Company Achieves 520% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      description: 'Major bank achieving 520% ROI through intelligent banking and AI transformation',
      metrics: {
        roi: '520%',
        company: '$850M',
        satisfaction: '99.8%',
        savings: '$67M'
      },
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredContent.length]);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className={`bg-gradient-to-r ${currentContent.gradient} text-white py-12 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Discover the proven strategies and case studies that are helping companies achieve 600%+ ROI through AI transformation
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <div className="text-xl font-semibold text-yellow-300 mb-4">
                {currentContent.subtitle}
              </div>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="text-sm opacity-75 capitalize">{key.replace('_', ' ')}</div>
                    <div className="text-lg font-bold text-yellow-300">{value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview Grid */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">More Success Stories:</h4>
              {featuredContent.slice(0, 3).map((content, index) => (
                <div
                  key={content.id}
                  className={`bg-white bg-opacity-10 rounded-lg p-4 cursor-pointer transition-all ${
                    index === currentSlide ? 'ring-2 ring-yellow-400 bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-20'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      {content.type.toUpperCase()}
                    </span>
                    <span className="text-yellow-300 font-semibold text-sm">
                      {content.metrics.roi} ROI
                    </span>
                  </div>
                  <h5 className="font-semibold text-sm leading-tight mb-2">
                    {content.title}
                  </h5>
                  <p className="text-xs opacity-75 line-clamp-2">
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">600%</div>
            <div className="text-sm opacity-75">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">94%</div>
            <div className="text-sm opacity-75">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">8</div>
            <div className="text-sm opacity-75">Months to ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">$4.2B</div>
            <div className="text-sm opacity-75">Total Savings</div>
          </div>
        </div>
      </div>
=======
      id: 'tech-giant-success',
      title: 'Tech Giant AI Transformation Success',
      subtitle: '800% ROI • $5.2B Savings • 12 Months',
      description: 'How a Fortune 100 company achieved record-breaking results with strategic AI implementation.',
      url: '/case-studies/tech-giant-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        timeline: '12 months'
      },
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ultimate-playbook',
      title: 'AI Transformation Ultimate Playbook',
      subtitle: 'Complete Guide • 94% Success Rate • 18 Months',
      description: 'The most comprehensive AI transformation guide with step-by-step methodologies and proven frameworks.',
      url: '/resources/ai-transformation-ultimate-playbook-2025',
      type: 'resource',
      metrics: {
        success: '94%',
        savings: '$5.2B',
        timeline: '18 months'
      },
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentSlides.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-90`} />
      <div className="absolute inset-0 bg-black opacity-20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse delay-3000" />
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                  🚀 REVOLUTIONARY CONTENT 2025
                </span>
                <span className="px-4 py-2 bg-red-500 rounded-full text-sm font-semibold animate-pulse">
                  NEW
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {currentContent.title}
              </h1>

              <div className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                {currentContent.subtitle}
              </div>

              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Display */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                      {value}
                    </div>
                    <div className="text-sm md:text-base opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Explore All Content
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">
                    {currentContent.type === 'blog' ? '📝' : 
                     currentContent.type === 'case-study' ? '📊' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {currentContent.type === 'blog' ? 'Ultimate Guide' : 
                     currentContent.type === 'case-study' ? 'Success Story' : 'Complete Playbook'}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {currentContent.type === 'blog' ? 'Comprehensive enterprise guide with proven strategies' : 
                     currentContent.type === 'case-study' ? 'Real-world Fortune 100 transformation results' : 
                     'Step-by-step implementation methodology'}
                  </p>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2 mb-6">
                    {contentSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-yellow-300' : 'bg-white opacity-50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Reading Time */}
                  <div className="text-sm opacity-75">
                    {currentContent.type === 'blog' ? '25 min read' : 
                     currentContent.type === 'case-study' ? '22 min read' : '35 min read'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
>>>>>>> main
    </div>
  );
};

export default RevolutionaryContent2025Banner;