'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Clock, Users } from 'lucide-react';

const AdvancedAutomationRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('advanced-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('advanced-automation-banner-dismissed', 'true');
  };

  const content = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 2025: The Advanced Automation Revolution',
      subtitle: 'Ultimate Guide to 750% ROI',
      description: 'Discover how Fortune 500 companies are achieving 750% ROI through advanced AI automation. Complete implementation guide with real-world success stories.',
      metrics: {
        roi: '750%',
        savings: '$8.2M annually',
        efficiency: '340%',
        satisfaction: '99.2%'
      },
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'intelligent-workflow-revolution',
      title: 'AI 2025: The Intelligent Workflow Revolution',
      subtitle: 'Ultimate Guide to 900% ROI',
      description: 'Discover how intelligent workflows are transforming business operations with 900% ROI. Complete guide to implementing AI-powered workflow automation.',
      metrics: {
        roi: '900%',
        savings: '$12.3M annually',
        efficiency: '560%',
        satisfaction: '99.5%'
      },
      url: '/blog/ai-2025-intelligent-workflow-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-advanced-automation',
      title: 'Fortune 500 Advanced Automation Success',
      subtitle: '$3.2B Company Achieves 750% ROI in 10 Months',
      description: 'How a Fortune 500 manufacturing company transformed operations with advanced AI automation, achieving 750% ROI and $12.8M annual savings.',
      metrics: {
        roi: '750%',
        savings: '$12.8M annually',
        efficiency: '450%',
        satisfaction: '99.2%'
      },
      url: '/case-studies/fortune-500-advanced-automation-750-roi-success',
      type: 'case-study',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'global-enterprise-workflow',
      title: 'Global Enterprise Intelligent Workflow Success',
      subtitle: '$4.1B Company Achieves 900% ROI in 8 Months',
      description: 'How a global enterprise transformed operations with intelligent workflow automation, achieving 900% ROI and $18.7M annual savings.',
      metrics: {
        roi: '900%',
        savings: '$18.7M annually',
        efficiency: '560%',
        satisfaction: '99.5%'
      },
      url: '/case-studies/global-enterprise-intelligent-workflow-900-roi-success',
      type: 'case-study',
      readingTime: '20 min read',
      featured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW ADVANCED AUTOMATION CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Automation Content
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how leading enterprises are achieving 750-900% ROI with advanced AI automation and intelligent workflows
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous content"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next content"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content slide */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-medium">
                    {currentContent.type === 'blog' ? 'Blog Post' : 'Case Study'}
                  </span>
                  <span className="flex items-center text-sm text-blue-200">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentContent.readingTime}
                  </span>
                  {currentContent.featured && (
                    <span className="flex items-center text-sm text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {currentContent.title}
                </h3>
                <p className="text-lg text-blue-100 mb-2">
                  {currentContent.subtitle}
                </p>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                <a
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Read Full Article
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-sm text-blue-200">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {currentContent.metrics.efficiency}
                  </div>
                  <div className="text-sm text-blue-200">Efficiency</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {currentContent.metrics.satisfaction}
                  </div>
                  <div className="text-sm text-blue-200">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional content links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/resources/ai-2025-advanced-automation-implementation-master-guide"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-200">Implementation Guide</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <h4 className="font-semibold mb-1">Advanced Automation Master Guide</h4>
            <p className="text-sm text-blue-300">Complete implementation framework for 750% ROI</p>
          </a>

          <a
            href="/case-studies"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-200">Success Stories</span>
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-1">Real-World Case Studies</h4>
            <p className="text-sm text-blue-300">See how companies achieve 750-900% ROI</p>
          </a>

          <a
            href="/blog"
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-200">Latest Insights</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <h4 className="font-semibold mb-1">AI Automation Blog</h4>
            <p className="text-sm text-blue-300">Expert insights and industry trends</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAutomationRevolutionBanner;