'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react';

const NewContent2025AnalyticsRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const analyticsContent = [
    {
      id: 'advanced-analytics-guide',
      title: 'AI 2025: Advanced Analytics Revolution',
      description: 'Achieve 450% ROI, $3.2M annual savings, and 99.7% accuracy in data-driven decision making',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'Blog Post',
      readingTime: '22 min read',
      metrics: {
        roi: '450%',
        savings: '$3.2M',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Manufacturing AI Analytics Success',
      description: 'How a global manufacturing leader achieved 450% ROI in 8 months with AI analytics',
      url: '/case-studies/ai-analytics-fortune-500-manufacturing-450-roi-success',
      type: 'Case Study',
      readingTime: '15 min read',
      metrics: {
        roi: '450%',
        savings: '$2.8M',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      badge: 'SUCCESS',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'implementation-guide',
      title: 'AI Analytics Implementation Master Guide 2025',
      description: 'Complete step-by-step guide to implementing AI analytics with 450% ROI',
      url: '/resources/ai-analytics-implementation-master-guide-2025',
      type: 'Implementation Guide',
      readingTime: '28 min read',
      metrics: {
        success: '98%',
        roi: '450%',
        projects: '500+',
        timeline: '6-8 months'
      },
      badge: 'GUIDE',
      badgeColor: 'bg-blue-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % analyticsContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('analytics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('analytics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = analyticsContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  🚀 NEW AI ANALYTICS CONTENT
                </span>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-bold ${currentContent.badgeColor}`}>
                {currentContent.badge}
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {currentContent.title}
                    </h3>
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                      {currentContent.type}
                    </span>
                  </div>
                  
                  <p className="text-white text-opacity-90 mb-4 text-sm leading-relaxed">
                    {currentContent.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-yellow-300">{value}</div>
                        <div className="text-xs text-white text-opacity-75 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Reading Time and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-white text-opacity-75">
                        ⏱️ {currentContent.readingTime}
                      </span>
                      <div className="flex space-x-1">
                        {analyticsContent.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                    >
                      <span>Read Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics Summary */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">450%</div>
                <div className="text-sm text-white text-opacity-75">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">$3.2M</div>
                <div className="text-sm text-white text-opacity-75">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">99.7%</div>
                <div className="text-sm text-white text-opacity-75">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AnalyticsRevolutionBanner;