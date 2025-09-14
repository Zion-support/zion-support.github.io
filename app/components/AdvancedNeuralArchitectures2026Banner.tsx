'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AdvancedNeuralArchitectures2026Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'neural-architectures-breakthrough',
      title: 'AI 2026: Advanced Neural Architectures Revolution',
      subtitle: '2,800% ROI Through Next-Generation Intelligence',
      description: 'Transform your enterprise with cutting-edge neural architectures delivering unprecedented performance and intelligence.',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B+',
        accuracy: '99.97%',
        efficiency: '1,500%'
      },
      cta: 'Explore Neural Architectures',
      link: '/blog/ai-2026-advanced-neural-architectures-revolution-ultimate-breakthrough',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Neural Architecture Success',
      subtitle: '$4.2B Annual Savings - 2,800% ROI',
      description: 'How a leading Fortune 500 company achieved unprecedented transformation with advanced neural architectures.',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      cta: 'Read Success Story',
      link: '/case-studies/fortune-500-advanced-neural-architectures-transformation-2800-roi-success-story',
      badge: 'CASE STUDY'
    },
    {
      id: 'implementation-guide',
      title: 'Neural Architecture Implementation Guide',
      subtitle: 'Complete Roadmap to 2,800% ROI',
      description: 'The definitive guide to implementing advanced neural architectures in your enterprise with proven methodologies.',
      metrics: {
        roi: '2,800%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      cta: 'Download Guide',
      link: '/resources/advanced-neural-architectures-implementation-master-guide-2026',
      badge: 'GUIDE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-architectures-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-architectures-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                {currentContent.badge}
              </span>
              <span className="text-sm text-blue-200">NEW 2026 CONTENT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
              {currentContent.subtitle}
            </p>
            
            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.accuracy || currentContent.metrics.timeline}</div>
                <div className="text-sm text-gray-300">{currentContent.metrics.accuracy ? 'Accuracy' : 'Timeline'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                <div className="text-sm text-gray-300">{currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentContent.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralArchitectures2026Banner;