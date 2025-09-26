'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AdvancedNeuralArchitecturesPromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: Advanced Neural Architectures - Enterprise Breakthrough",
      description: "Transform your business with cutting-edge neural architectures. Achieve 450% ROI within 12 months.",
      metrics: "450% ROI • 300% Performance • 67% Cost Reduction",
      url: "/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough",
      type: "Blog Post",
      readingTime: "14 min read"
    },
    {
      title: "Fortune 500 Neural Architecture Success Story",
      description: "How a $12B company achieved 567% ROI with advanced neural architectures in 18 months.",
      metrics: "567% ROI • $180M Savings • 78% Efficiency",
      url: "/case-studies/ai-2025-advanced-neural-architectures-fortune-500-success-story",
      type: "Case Study",
      readingTime: "12 min read"
    },
    {
      title: "Complete Neural Architecture Implementation Guide",
      description: "Master the implementation of advanced neural architectures with our comprehensive guide.",
      metrics: "25 min read • Complete Roadmap • Best Practices",
      url: "/resources/ai-2025-advanced-neural-architectures-implementation-guide",
      type: "Implementation Guide",
      readingTime: "25 min read"
    },
    {
      title: "Edge Computing Revolution - Enterprise Transformation",
      description: "Leverage edge AI for real-time processing and enhanced privacy. Achieve 340% ROI.",
      metrics: "340% ROI • 67% Latency Reduction • 89% Real-time",
      url: "/blog/ai-2025-edge-computing-revolution-enterprise-transformation",
      type: "Blog Post",
      readingTime: "8 min read"
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
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">NEW CONTENT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentContent?.type}
              </span>
              <span className="text-gray-300 text-sm">{currentContent?.readingTime}</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
              {currentContent?.title}
            </h2>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              {currentContent?.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              {currentContent?.metrics?.split(' • ').map((metric, index) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {metric}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent?.url || '#'}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">450%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">300%</div>
                <div className="text-sm text-gray-300">Performance Gain</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">67%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">89%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralArchitecturesPromotionBanner;