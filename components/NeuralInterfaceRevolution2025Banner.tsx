'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolution2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const neuralContent = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology - 800% ROI in 12 months',
      tags: ['Neural Interfaces', 'Business Revolution', 'ROI', 'Enterprise'],
      readingTime: '25 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%',
        satisfaction: '98%'
      }
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: 800% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology',
      tags: ['Case Study', 'Fortune 500', 'Neural Interfaces', 'ROI'],
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%',
        satisfaction: '98%'
      }
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Guide 2025: 800% ROI Framework',
      type: 'resource',
      url: '/resources/neural-interface-implementation-guide-2025',
      description: 'Complete enterprise implementation strategy for neural interface technology',
      tags: ['Implementation Guide', 'Neural Interfaces', 'ROI', 'Framework'],
      readingTime: '15 min read',
      featured: true,
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '12 months',
        savings: '$50M+'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % neuralContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = neuralContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">NEW 2025 CONTENT</span>
              </div>
              <div className="h-4 w-px bg-gray-400"></div>
              <span className="text-sm text-gray-300">Neural Interface Revolution</span>
            </div>

            {/* Main content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                The Neural Interface Revolution is Here
              </h2>
              <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                Transform your business with brain-computer interface technology. 
                Achieve <span className="text-yellow-400 font-semibold">800% ROI</span> and 
                <span className="text-yellow-400 font-semibold"> $50M+ annual savings</span> with 
                proven neural interface implementations.
              </p>

              {/* Current content highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-600 text-xs font-medium rounded">
                        {currentContent.type.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-300">{currentContent.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {currentContent.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {currentContent.description}
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-yellow-400">
                          {currentContent.metrics.roi}
                        </span>
                        <span className="text-sm text-gray-300">ROI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-400">
                          {currentContent.metrics.savings}
                        </span>
                        <span className="text-sm text-gray-300">Savings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-400">
                          {currentContent.metrics.efficiency || currentContent.metrics.success}
                        </span>
                        <span className="text-sm text-gray-300">
                          {currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Read Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content navigation dots */}
              <div className="flex space-x-2 mb-6">
                {neuralContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Neural Interface Assessment
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200"
                >
                  View All Success Stories
                </Link>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Success metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">800%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">$50M+</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">95%</div>
            <div className="text-sm text-gray-300">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">98%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025Banner;