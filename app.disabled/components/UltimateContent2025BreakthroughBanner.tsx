'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const UltimateContent2025BreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-breakthrough-dismissed');
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
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-breakthrough-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI solutions.',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'ai-transformation-success',
      title: 'AI Transformation 2025: $3.2B Company Achieves 750% ROI - Ultimate Success Story',
      description: 'How a Fortune 100 manufacturing company transformed operations with AI, achieving 750% ROI.',
      url: '/case-studies/ai-transformation-2025-ultimate-success-story',
      type: 'Case Study',
      metrics: {
        roi: '750%',
        savings: '$2.8B',
        accuracy: '99.8%',
        efficiency: '156%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      description: 'Complete step-by-step guide to implementing AI in your enterprise. Achieve 800% ROI with our proven methodology.',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      type: 'Resource',
      metrics: {
        roi: '800%',
        timeline: '18 months',
        success: '94%',
        value: '$2.8B'
      },
      readingTime: '35 min read',
      isNew: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              <span>NEW BREAKTHROUGH CONTENT</span>
            </div>
            <div className="flex items-center space-x-1 bg-green-500 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              <span>800% ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                🚀 Ultimate AI 2025 Breakthrough Content Collection
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the most comprehensive AI transformation resources ever created. 
                Learn from Fortune 500 success stories and achieve 800% ROI with our proven methodologies.
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">800%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">$2.8B</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-blue-100">Fortune 500</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources/ai-implementation-ultimate-roadmap-2025"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-900 font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                Get Ultimate Roadmap
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-transformation-2025-ultimate-success-story"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Featured Content Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-yellow-400">FEATURED CONTENT</span>
                </div>
                <div className="flex space-x-1">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {currentContent.type}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  <span className="text-blue-200 text-xs">
                    {currentContent.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-blue-100 text-sm leading-relaxed">
                  {currentContent.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">
                      {currentContent.metrics.savings}
                    </div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredContent.map((content, index) => (
            <Link
              key={content.id}
              href={content.url}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white/20 border-yellow-400/50'
                  : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-200">
                  {content.type}
                </span>
                {content.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    NEW
                  </span>
                )}
              </div>
              <h4 className="text-sm font-semibold leading-tight mb-2">
                {content.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-blue-200">
                <span>{content.readingTime}</span>
                <span className="font-semibold text-yellow-400">
                  {content.metrics.roi} ROI
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025BreakthroughBanner;