'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const UltimateContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution',
      description: 'Ultimate Guide to 400% ROI through AI-powered data transformation',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      type: 'Blog Post',
      readingTime: '18 min read',
      metrics: {
        roi: '400%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success',
      description: '$2.8B Annual Savings in 8 Months - Complete Case Study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'Case Study',
      readingTime: '22 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '78%',
        timeline: '8 months'
      },
      badge: 'FEATURED',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'master-guide',
      title: 'AI Transformation Master Guide 2025',
      description: 'From Strategy to 500% ROI - Ultimate Edition',
      url: '/resources/ai-transformation-master-guide-2025-ultimate',
      type: 'Master Guide',
      readingTime: '35 min read',
      metrics: {
        roi: '500%',
        success: '94%',
        savings: '$2.8M',
        timeline: '18 months'
      },
      badge: 'ULTIMATE',
      badgeColor: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">🚀 Ultimate Content 2025</h2>
                <p className="text-sm opacity-90">New AI transformation content with proven 500% ROI</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Showcase */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentContent.badgeColor}`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm opacity-90">{currentContent.type}</span>
                  <span className="text-sm opacity-90 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentContent.readingTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{currentContent.title}</h3>
                <p className="text-sm opacity-90 mb-4">{currentContent.description}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-300">{currentContent.metrics.roi}</div>
                <div className="text-xs opacity-90">ROI</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-300">{currentContent.metrics.savings}</div>
                <div className="text-xs opacity-90">Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-300">
                  {currentContent.metrics.accuracy || currentContent.metrics.efficiency || currentContent.metrics.success}
                </div>
                <div className="text-xs opacity-90">
                  {currentContent.metrics.accuracy ? 'Accuracy' : 
                   currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-orange-300">
                  {currentContent.metrics.speed || currentContent.metrics.timeline || currentContent.metrics.timeline}
                </div>
                <div className="text-xs opacity-90">
                  {currentContent.metrics.speed ? 'Speed' : 'Timeline'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Read Full Content
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>500+ Success Stories</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Fortune 500 Companies</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4" />
                <span>94% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025Banner;