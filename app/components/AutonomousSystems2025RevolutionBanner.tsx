'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Play, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const AutonomousSystems2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const content = [
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      subtitle: '567% ROI Breakthrough - $2.8B Annual Savings',
      description: 'Discover how Fortune 500 companies are achieving 567% ROI with autonomous AI systems that operate 24/7 without human intervention.',
      type: 'blog',
      readingTime: '18 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '99.7%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      badge: 'NEW',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Systems Transformation',
      subtitle: '$2.8B Annual Savings in 12 Months',
      description: 'How a Fortune 500 manufacturing company achieved $2.8B in annual savings and 567% ROI by implementing autonomous AI systems.',
      type: 'case-study',
      readingTime: '22 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '12 months',
        efficiency: '78%'
      },
      url: '/case-studies/fortune-500-autonomous-systems-transformation-2025',
      badge: 'CASE STUDY',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      id: 'implementation-guide',
      title: 'Autonomous Systems Implementation Guide 2025',
      subtitle: 'From Strategy to 567% ROI - Complete Guide',
      description: 'Complete step-by-step guide to implementing autonomous enterprise systems that deliver 567% ROI. Includes frameworks, checklists, and real-world case studies.',
      type: 'resource',
      readingTime: '35 min read',
      metrics: {
        roi: '567%',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      url: '/resources/autonomous-enterprise-systems-implementation-guide-2025',
      badge: 'GUIDE',
      badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, content.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-systems-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-systems-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">LIVE</span>
            <span className="text-sm text-gray-300">Autonomous Systems Revolution 2025</span>
          </div>
          <button
            onClick={dismissBanner}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentContent.badgeColor} text-white`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-gray-300">{currentContent.type.toUpperCase()}</span>
                  <span className="text-sm text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentContent.readingTime}
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-xl text-purple-200 mb-4 font-semibold">
                    {currentContent.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium text-gray-300">ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium text-gray-300">Savings</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                  </Link>
                </div>
              </div>

              {/* Visual Section */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">Revolutionary Results</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-gray-300">Average ROI</span>
                          <span className="text-2xl font-bold text-green-400">567%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-gray-300">Annual Savings</span>
                          <span className="text-2xl font-bold text-blue-400">$2.8B</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-gray-300">Efficiency</span>
                          <span className="text-2xl font-bold text-purple-400">99.7%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-gray-300">Success Rate</span>
                          <span className="text-2xl font-bold text-pink-400">98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-4 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isAutoPlaying ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousSystems2025RevolutionBanner;