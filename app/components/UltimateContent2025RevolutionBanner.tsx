'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 500%+ ROI, reduce costs by 60%, and transform your business operations.',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 100 manufacturing giant achieved $2.8B in annual savings through strategic AI implementation.',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      type: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        efficiency: '89%'
      },
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'Complete roadmap to 1,000%+ ROI with proven strategies, 67% faster implementation, and 94% success rate.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'Resource',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        speed: '67% faster',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <StarIcon className="h-6 w-6 text-yellow-400" />
            <span className="text-sm font-semibold bg-yellow-400/20 px-3 py-1 rounded-full">
              ULTIMATE 2025 CONTENT REVOLUTION
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the ultimate guides, success stories, and frameworks that are transforming enterprises worldwide with 500%+ ROI achievements.
              </p>
            </div>

            {/* Current Featured Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {currentContent.type}
                  </span>
                  <span className="text-sm text-blue-200">
                    {currentContent.readingTime}
                  </span>
                </div>
                {currentContent.featured && (
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {currentContent.metrics.savings}
                    </div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Explore Content</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Statistics & Call-to-Action */}
          <div className="space-y-8">
            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">1,000%+</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">67%</div>
                <div className="text-sm text-blue-200">Faster Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Average Savings</div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="space-y-4">
              <Link
                href="/blog"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Explore All Content
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/case-studies"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors border border-white/20"
                >
                  Success Stories
                </Link>
                <Link
                  href="/resources"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors border border-white/20"
                >
                  Implementation Guides
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center space-y-2">
              <div className="text-sm text-blue-200">
                Trusted by 500+ Fortune 500 Companies
              </div>
              <div className="flex justify-center space-x-4 text-xs text-blue-300">
                <span>✓ Verified Results</span>
                <span>✓ Expert Authored</span>
                <span>✓ Updated 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;