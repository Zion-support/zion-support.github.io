"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionPromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'ai-content-revolution-blog',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        speed: '1,200%',
        accuracy: '99.9%'
      },
      description: 'Transform your business with revolutionary AI content strategies that deliver unprecedented results.'
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 AI Content Success: $500B Annual Savings - 25,000% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '18 months',
        accuracy: '99.9%'
      },
      description: 'How TechGlobal Industries achieved extraordinary results with AI content revolution.'
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: Complete Roadmap to 25,000% ROI',
      type: 'Implementation Guide',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'The definitive guide to transforming your content strategy with revolutionary AI technologies.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-content-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🚀 NEW CONTENT REVOLUTION
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                25,000% ROI
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2025: The Ultimate Content Revolution
            </h2>
            
            <p className="text-lg mb-4 text-blue-100">
              Revolutionary AI content strategies delivering unprecedented results
            </p>

            {/* Content showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-200">
                  {currentContent.type}
                </span>
                <div className="flex space-x-1">
                  {contentPieces.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">
                {currentContent.title}
              </h3>
              
              <p className="text-sm text-blue-100 mb-3">
                {currentContent.description}
              </p>

              {/* Metrics display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-xs text-blue-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">
                    {currentContent.metrics.speed || currentContent.metrics.timeline}
                  </div>
                  <div className="text-xs text-blue-200">
                    {currentContent.metrics.speed ? 'Speed' : 'Timeline'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400">
                    {currentContent.metrics.accuracy || currentContent.metrics.success}
                  </div>
                  <div className="text-xs text-blue-200">
                    {currentContent.metrics.accuracy ? 'Accuracy' : 'Success'}
                  </div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentRevolutionPromotionBanner;