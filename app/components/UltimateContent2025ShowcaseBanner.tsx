'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Award, Zap, Clock, X } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months - Complete Guide',
      type: 'Blog Post',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented results with strategic AI implementation.',
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: '567% ROI in 18 Months - Ultimate Success Story',
      type: 'Case Study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '95%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      description: 'Learn how a Fortune 500 manufacturing giant achieved transformational results through strategic AI implementation.',
      readingTime: '15 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      type: 'Resource',
      metrics: {
        roi: '800%',
        savings: '$4.8M',
        efficiency: '90%',
        satisfaction: '95%'
      },
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      description: 'Complete step-by-step guide for implementing AI to achieve unprecedented business results.',
      readingTime: '15 min read',
      isNew: true,
      featured: true
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
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content That's Transforming Businesses
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest AI strategies, success stories, and implementation guides that are helping companies achieve unprecedented results.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentContent.type}
                </div>
                {currentContent.isNew && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    NEW
                  </div>
                )}
                {currentContent.featured && (
                  <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentContent.title}
              </h3>
              <p className="text-lg text-blue-100">
                {currentContent.subtitle}
              </p>
              <p className="text-blue-200">
                {currentContent.description}
              </p>

              <div className="flex items-center space-x-4 text-sm text-blue-200">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </span>
                <span className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  High Impact
                </span>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-blue-200 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {content.type}
                </div>
                {content.isNew && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                )}
              </div>

              <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {content.title}
              </h4>
              <p className="text-sm text-blue-200 mb-4 line-clamp-2">
                {content.subtitle}
              </p>

              <div className="flex items-center justify-between text-xs text-blue-300">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {content.readingTime}
                </span>
                <span className="font-semibold">
                  {content.metrics.roi} ROI
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;