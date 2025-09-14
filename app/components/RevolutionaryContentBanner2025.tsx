'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-banner-2025-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-banner-2025-dismissed', 'true');
  };

  const contentSlides = [
    {
      id: 'advanced-automation',
      title: 'AI 2025: The Advanced Automation Revolution',
      subtitle: 'Ultimate Guide to 600% ROI',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with advanced AI automation. Complete implementation guide with real-world success stories.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '99.8%'
      },
      type: 'blog',
      readingTime: '22 min read',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      featured: true
    },
    {
      id: 'transformation-success',
      title: 'AI Transformation Success Story',
      subtitle: '$3.2B Company Achieves 600% ROI in 12 Months',
      description: 'Real implementation details, challenges overcome, and lessons learned from a Fortune 500 manufacturing company.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '99.7%'
      },
      type: 'case-study',
      readingTime: '18 min read',
      url: '/case-studies/ai-transformation-600-roi-success-story-2025',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Framework 2025',
      subtitle: 'From Strategy to 600% ROI',
      description: 'The complete, battle-tested framework for AI implementation success. Proven methodologies used by Fortune 500 companies.',
      metrics: {
        roi: '600%',
        successRate: '95%',
        timeToValue: '67% faster',
        projects: '500+'
      },
      type: 'resource',
      readingTime: '35 min read',
      url: '/resources/ai-implementation-ultimate-framework-2025',
      featured: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentSlides.length) * 100}%` }}
        ></div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">REVOLUTIONARY CONTENT 2025</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {currentContent.title}
              <span className="block text-yellow-300">
                {currentContent.subtitle}
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                <div className="text-sm opacity-80">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                <div className="text-sm opacity-80">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">
                  {currentContent.metrics.accuracy || currentContent.metrics.efficiency || currentContent.metrics.successRate}
                </div>
                <div className="text-sm opacity-80">
                  {currentContent.metrics.accuracy ? 'Accuracy' : 
                   currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">
                  {currentContent.metrics.satisfaction || currentContent.metrics.timeToValue || currentContent.metrics.projects}
                </div>
                <div className="text-sm opacity-80">
                  {currentContent.metrics.satisfaction ? 'Satisfaction' : 
                   currentContent.metrics.timeToValue ? 'Faster' : 'Projects'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Read Full Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Assessment
              </Link>
            </div>

            {/* Reading Time */}
            <div className="flex items-center text-sm opacity-80">
              <Clock className="w-4 h-4 mr-2" />
              {currentContent.readingTime}
              <span className="mx-2">•</span>
              <span className="capitalize">{currentContent.type.replace('-', ' ')}</span>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Content Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                {/* Type Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">
                      {currentContent.type === 'blog' ? '📝' : 
                       currentContent.type === 'case-study' ? '📊' : '📚'}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {currentContent.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {currentContent.featured && (
                    <div className="flex items-center bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Preview */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    {currentContent.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-white/80">ROI</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-300">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-white/80">Savings</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={currentContent.url}
                  className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;