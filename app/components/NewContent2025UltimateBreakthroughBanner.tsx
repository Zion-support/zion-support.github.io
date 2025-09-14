'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Zap, Target } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-enterprise-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations.',
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI through comprehensive AI transformation.',
      badge: 'FEATURED',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'quantum-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'Blog Post',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      description: 'Discover how quantum computing is revolutionizing business operations with 400-600% ROI.',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 1,200% ROI in 18 Months',
      type: 'Resource',
      url: '/resources/ai-implementation-roadmap-2025',
      metrics: {
        roi: '1,200%',
        savings: '$5.6B',
        efficiency: '95%',
        timeline: '18 months'
      },
      description: 'Complete step-by-step roadmap for implementing AI and achieving 1,200% ROI.',
      badge: 'GUIDE',
      badgeColor: 'bg-green-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium bg-yellow-400/20 px-3 py-1 rounded-full">
                  NEW CONTENT 2025
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${currentContent.badgeColor}`}>
                {currentContent.badge}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg text-blue-100 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">ROI</span>
                </div>
                <div className="text-xl font-bold text-green-400">{currentContent.metrics.roi}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Savings</span>
                </div>
                <div className="text-xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Efficiency</span>
                </div>
                <div className="text-xl font-bold text-yellow-400">{currentContent.metrics.efficiency || currentContent.metrics.speed}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Timeline</span>
                </div>
                <div className="text-xl font-bold text-purple-400">{currentContent.metrics.timeline || currentContent.metrics.accuracy}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read {currentContent.type}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="hidden lg:block ml-8">
            <div className="grid grid-cols-2 gap-3">
              {featuredContent.map((content, index) => (
                <div
                  key={content.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/15'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">{content.type}</span>
                    <div className={`px-2 py-1 rounded text-xs font-bold ${content.badgeColor}`}>
                      {content.badge}
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold mb-2 line-clamp-2">{content.title}</h4>
                  <div className="text-xs text-gray-300">
                    ROI: <span className="font-bold text-green-400">{content.metrics.roi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;