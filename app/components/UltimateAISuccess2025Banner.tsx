'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const UltimateAISuccess2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-success-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-success-2025-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '99.8%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      badge: 'Ultimate Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $2.8B savings, and 99.8% efficiency with our comprehensive implementation guide.'
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '99.8%',
        timeline: '24 months'
      },
      readingTime: '18 min read',
      badge: 'Success Story',
      description: 'Discover how a Fortune 100 manufacturing giant transformed their operations with AI automation, achieving $2.8B in annual savings and 1,500% ROI in just 24 months.'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        savings: '$500M+',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '30 min read',
      badge: 'Framework',
      description: 'Master AI implementation with our comprehensive framework. Achieve 1,000%+ ROI, $500M+ savings, and 99% success rate with our proven methodology.'
    }
  ];

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <StarIcon className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI SUCCESS 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with Revolutionary AI
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving <span className="font-bold text-yellow-400">1,500% ROI</span> and 
            <span className="font-bold text-green-400"> $2.8B in savings</span> with our proven AI implementation framework
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/70">
                {currentSlide + 1} of {featuredContent.length}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <ClockIcon className="h-4 w-4" />
              <span>{currentContent.readingTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                  {currentContent.badge}
                </span>
                <span className="text-sm text-white/70 uppercase tracking-wide">
                  {currentContent.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">
                    ROI: <span className="text-green-400 font-bold">{currentContent.metrics.roi}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">
                    Savings: <span className="text-yellow-400 font-bold">{currentContent.metrics.savings}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">
                    Efficiency: <span className="text-blue-400 font-bold">{currentContent.metrics.efficiency}</span>
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 flex items-center"
                >
                  Read Now
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm text-white/70">Average ROI</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {currentContent.metrics.savings}
                </div>
                <div className="text-sm text-white/70">Annual Savings</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {currentContent.metrics.efficiency}
                </div>
                <div className="text-sm text-white/70">Efficiency</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {currentContent.metrics.satisfaction || currentContent.metrics.success || '99%'}
                </div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <p className="text-white/70 mb-4">
            Explore our complete collection of AI success stories, implementation guides, and transformation frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Success Stories
            </Link>
            <Link
              href="/resources"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Implementation Guides
            </Link>
            <Link
              href="/tools"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              AI Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAISuccess2025Banner;