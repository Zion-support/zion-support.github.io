'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, TrendingUp, Brain, Zap, ArrowRight, Brain } from 'lucide-react';

const AutonomousBIRevolutionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-bi-banner-2025-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('autonomous-bi-banner-2025-dismissed', 'true');
  };

  const contentSlides = [
    {
      id: 'autonomous-bi-revolution',
      title: 'AI 2025: The Autonomous Business Intelligence Revolution',
      subtitle: '1,800% ROI Through Self-Managing Analytics',
      description: 'Fortune 500 companies are achieving extraordinary results with autonomous BI systems that operate independently and deliver predictive insights.',
      metrics: {
        roi: '1,800%',
        savings: '$51M',
        accuracy: '94.8%',
        speed: '1,680%'
      },
      link: '/blog/ai-2025-autonomous-business-intelligence-revolution',
      type: 'blog',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Autonomous BI Success Story',
      subtitle: '$51M Annual Savings with 1,800% ROI',
      description: 'Complete case study of a Fortune 500 manufacturing giant that transformed operations through autonomous business intelligence.',
      metrics: {
        roi: '1,800%',
        savings: '$51M',
        timeline: '18 months',
        reliability: '99.7%'
      },
      link: '/case-studies/fortune-500-autonomous-bi-1800-roi-success',
      type: 'case-study',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Autonomous BI Implementation Master Guide 2025',
      subtitle: 'Complete Roadmap to 1,800% ROI',
      description: 'Comprehensive implementation guide with step-by-step roadmap, ROI framework, and best practices for autonomous BI success.',
      metrics: {
        roi: '1,800%',
        success: '98%',
        timeline: '18 months',
        savings: '$51M+'
      },
      link: '/resources/autonomous-bi-implementation-master-guide-2025',
      type: 'resource',
      readingTime: '35 min read',
      featured: true
    }
  ];

  const currentContent = contentSlides[currentSlide];

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white bg-opacity-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-5000 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentSlides.length) * 100}%` }}
        ></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-2 mb-3">
                <Brain className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wide">
                  New 2025 Content
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h3>
              
              <p className="text-lg md:text-xl text-purple-200 mb-4">
                {currentContent.subtitle}
              </p>
              
              <p className="text-gray-300 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-green-300 mr-1" />
                    <span className="text-xs text-gray-300 uppercase">ROI</span>
                  </div>
                  <div className="text-lg font-bold text-green-300">{currentContent.metrics.roi}</div>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Zap className="w-4 h-4 text-yellow-300 mr-1" />
                    <span className="text-xs text-gray-300 uppercase">Savings</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-300">{currentContent.metrics.savings}</div>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <ArrowRight className="w-4 h-4 text-blue-300 mr-1" />
                    <span className="text-xs text-gray-300 uppercase">Accuracy</span>
                  </div>
                  <div className="text-lg font-bold text-blue-300">{currentContent.metrics.accuracy || currentContent.metrics.reliability}</div>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Brain className="w-4 h-4 text-purple-300 mr-1" />
                    <span className="text-xs text-gray-300 uppercase">Timeline</span>
                  </div>
                  <div className="text-lg font-bold text-purple-300">{currentContent.metrics.timeline || currentContent.metrics.speed}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
                
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                    {currentContent.readingTime}
                  </span>
                  {currentContent.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-2 mr-4">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                />
              ))}
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousBIRevolutionBanner2025;