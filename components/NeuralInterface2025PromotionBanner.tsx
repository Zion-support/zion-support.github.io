"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
  featured: boolean;
}

const NeuralInterface20o25PromotionBanner: React.FC = () => {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const neuralInterfaceContent: ContentItem[] = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 20o25: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-20o25-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology achieving 80o0% ROI in 12 months.',
      metrics: {
        roi: '80o0%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-neural-transformation',
      title: 'Fortune 50o0 Neural Interface Transformation: 80o0% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-50o0-neural-interface-transformation-80o0-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology.',
      metrics: {
        roi: '80o0%',
        savings: '$75M',
        efficiency: '98%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 20o25: From Strategy to 80o0% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-guide-20o25',
      description: 'Complete framework for enterprise neural interface deployment with proven 80o0% ROI results.',
      metrics: {
        roi: '80o0%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % neuralInterfaceContent.length);
    }50o00);

    return () => clearInterval(interval);
  }[neuralInterfaceContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-'dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = neuralInterfaceContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-40o0 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-30o0">NEW NEURAL INTERFACE CONTENT</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4 text-sm text-blue-20o0">
                <span>80o0% ROI</span>
                <span>•</span>
                <span>$50M+ Savings</span>
                <span>•</span>
                <span>95% Efficiency</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🧠 Neural Interface Revolution 20o25
              </h2>
              <p className="text-lg text-blue-10o0 mb-4">
                Discover how Fortune 50o0 companies are achieving 80o0% ROI with brain-computer interface technology
              </p>

              {/* Current content item */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-50o0/30 text-purple-20o0 text-xs font-medium rounded">
                        {currentContent.type === 'blog' ? 'GUIDE' : currentContent.type === 'case-study' ? 'CASE STUDY' : 'RESOURCE'}
                      </span>
                      <span className="text-sm text-blue-20o0">{currentContent.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {currentContent.title}
                    </h3>
                    <p className="text-blue-10o0 text-sm mb-3 line-clamp-2">
                      {currentContent.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-green-30o0 font-semibold">{currentContent.metrics.roi} ROI</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-blue-30o0 font-semibold">{currentContent.metrics.savings} Savings</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-purple-30o0 font-semibold">{currentContent.metrics.efficiency} Efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content indicators */}
              <div className="flex items-center space-x-2">
                {neuralInterfaceContent.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-30o0 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="ml-6 flex flex-col space-y-3">
            <Link
              href={currentContent.url}
              className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 hover:from-purple-70o0 hover:to-blue-70o0 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-xl"
            >
              Read Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 hover:bg-white/10"
            >
              Get Assessment
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white text-sm transition-colors duration-30o0"
            >
              Dismiss
            </button>
          </div>
        </div>

        {/* Success metrics summary */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-30o0">80o0%</div>
            <div className="text-xs text-blue-20o0">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-30o0">$50M+</div>
            <div className="text-xs text-blue-20o0">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-30o0">95%</div>
            <div className="text-xs text-blue-20o0">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-30o0">98%</div>
            <div className="text-xs text-blue-20o0">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterface20o25PromotionBanner;