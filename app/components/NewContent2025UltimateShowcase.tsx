'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 'neural-architecture-revolution',
      title: 'AI 2025: The Neural Architecture Revolution',
      description: 'Discover how next-generation neural architectures are transforming enterprise operations with 600% ROI and 99.9% accuracy.',
      type: 'blog',
      url: '/blog/ai-2025-neural-architecture-revolution-enterprise-breakthrough',
      metrics: {
        roi: '600%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '156%'
      },
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      description: 'Complete business transformation with 700% ROI and 99.8% automation accuracy across critical business processes.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '700%',
        accuracy: '99.8%',
        savings: '$2.8B',
        efficiency: '200%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'multimodal-intelligence-revolution',
      title: 'AI 2025: The Multimodal Intelligence Revolution',
      description: 'Enterprise breakthrough guide with 800% ROI and 99.95% accuracy across text, image, and voice processing.',
      type: 'blog',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-enterprise-breakthrough',
      metrics: {
        roi: '800%',
        accuracy: '99.95%',
        savings: '$4.8B',
        efficiency: '300%'
      },
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'manufacturing-transformation-ultimate',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 650% ROI',
      description: 'Discover how a global manufacturing leader achieved 650% ROI and $2.8B in operational savings with intelligent automation.',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'financial-services-transformation-breakthrough',
      title: 'AI 2025 Financial Services Transformation: $1.8B Bank Achieves 720% ROI',
      description: 'Learn how a major financial institution achieved 720% ROI and $1.2B in operational savings with intelligent banking.',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-breakthrough',
      metrics: {
        roi: '720%',
        savings: '$1.2B',
        accuracy: '99.7%',
        efficiency: '85%'
      },
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      description: 'The most comprehensive AI implementation roadmap for 2025. Complete step-by-step guide to achieve 800% ROI.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      metrics: {
        roi: '800%',
        successRate: '99%',
        savings: '$173.7M',
        timeToValue: '18 months'
      },
      readingTime: '45 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateShowcase_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateShowcase_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, case studies, and implementation guides that are transforming enterprises worldwide.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentItem.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">
                  {currentItem.readingTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentItem.title}
              </h3>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentItem.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentItem.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{value}</div>
                    <div className="text-sm opacity-75 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentItem.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Success Metrics</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-75">ROI Achievement</span>
                      <span className="text-lg font-bold text-green-400">
                        {currentItem.metrics.roi}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {currentItem.metrics.accuracy || currentItem.metrics.successRate}
                      </div>
                      <div className="text-xs opacity-75">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {currentItem.metrics.savings}
                      </div>
                      <div className="text-xs opacity-75">Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newContent.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-opacity-20 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    NEW
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.type.toUpperCase()}
                  </span>
                </div>
                <span className="text-xs opacity-75">{item.readingTime}</span>
              </div>

              <h4 className="text-lg font-semibold mb-3 line-clamp-2">
                {item.title}
              </h4>

              <p className="text-sm opacity-90 mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-green-400 font-bold">{item.metrics.roi}</span>
                  <span className="opacity-75 ml-1">ROI</span>
                </div>
                <Link
                  href={item.url}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dismiss Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleDismiss}
            className="text-white text-sm opacity-75 hover:opacity-100 transition-opacity"
          >
            Dismiss this showcase
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;