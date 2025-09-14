'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025PredictiveAnalyticsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: The Advanced Predictive Analytics Revolution',
      description: 'Ultimate Guide to 900% ROI with Fortune 500 Success Stories',
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-guide',
      metrics: {
        roi: '900%',
        savings: '$4.2B',
        accuracy: '95%',
        timeline: '18 months'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics Success: $4.2B Company Achieves 900% ROI',
      description: 'Real-world case study of predictive analytics transformation in 18 months',
      url: '/case-studies/fortune-500-predictive-analytics-900-roi-success-story',
      metrics: {
        roi: '900%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      type: 'case-study',
      featured: true
    },
    {
      id: 'predictive-analytics-implementation',
      title: 'AI 2025 Predictive Analytics Implementation Master Guide',
      description: 'Complete roadmap from strategy to 900% ROI with proven methodologies',
      url: '/resources/ai-2025-predictive-analytics-implementation-master-guide',
      metrics: {
        roi: '900%',
        success: '500+',
        timeline: '18 months',
        savings: '$4.2B'
      },
      type: 'resource',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('predictive-analytics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('predictive-analytics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12 px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Predictive Analytics Revolution
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 900% ROI with cutting-edge predictive analytics
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentItem.type.toUpperCase()}
                </span>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {currentItem.title}
              </h3>
              
              <p className="text-blue-100 mb-6 text-lg">
                {currentItem.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentItem.metrics.roi}</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentItem.metrics.savings}</div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
              </div>

              <Link
                href={currentItem.url}
                className="inline-flex items-center bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {contentItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    index === currentSlide
                      ? 'bg-white/20 border-2 border-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-200">
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-green-400 font-semibold">
                      {item.metrics.roi} ROI
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-blue-100">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">900%</div>
            <div className="text-blue-200">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">$4.2B</div>
            <div className="text-blue-200">Cost Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-blue-200">Prediction Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">18</div>
            <div className="text-blue-200">Months Timeline</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link
            href="/predictive-analytics"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            Explore All Predictive Analytics Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PredictiveAnalyticsBanner;