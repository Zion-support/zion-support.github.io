'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateSuccessBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateSuccessBanner_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('newContent2025UltimateSuccessBanner_dismissed', 'true');
  };

  if (isDismissed) return null;

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '89%',
        satisfaction: '98%'
      },
      description: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success: $2.8B Company Achieves 1,000% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        efficiency: '89%'
      },
      description: 'Real-world success story revealing the exact strategies that delivered unprecedented results',
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      metrics: {
        roi: '500%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The complete roadmap to achieving 500%+ ROI with AI transformation',
      readingTime: '35 min read',
      isNew: true,
      featured: true
    }
  ];

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">NEW ULTIMATE SUCCESS CONTENT</span>
            </div>
            <div className="hidden sm:flex items-center bg-green-500/20 rounded-full px-4 py-2">
              <ChartBarIcon className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-semibold">500%+ ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the proven frameworks, strategies, and success stories that Fortune 500 companies use to achieve unprecedented AI transformation results.
              </p>
            </div>

            {/* Featured Content Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {currentContent.type.toUpperCase()}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {currentContent.featured && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {currentContent.readingTime}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Read Full Content
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success Statistics */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Proven Success Metrics</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500%+</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$2.8B+</div>
                <div className="text-sm text-blue-200">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">89%</div>
                <div className="text-sm text-blue-200">Efficiency Gains</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-3">Ready to Transform Your Business?</h4>
              <p className="text-blue-100 mb-4 text-sm">
                Get personalized consultation and ROI analysis for your AI transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/consultation"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/resources"
                  className="flex-1 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-200 hover:bg-white/10"
                >
                  View All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">More Ultimate Success Content</h3>
            <p className="text-blue-200">Explore our complete collection of AI transformation resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                href={content.url}
                className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-300 uppercase">
                    {content.type}
                  </span>
                  <ChevronRightIcon className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h4 className="text-sm font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-200">
                  {content.title}
                </h4>
                <div className="flex items-center text-xs text-blue-300">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  {content.readingTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateSuccessBanner;