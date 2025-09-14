'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Users, Award, Zap } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,000% ROI through intelligent automation and advanced business intelligence',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,000%',
        savings: '$2.8B',
        efficiency: '156%',
        accuracy: '99.7%'
      },
      badge: 'Ultimate Guide',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'How a Fortune 500 company achieved 567% ROI in just 18 months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      badge: 'Success Story',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      description: 'Complete guide to achieving 800% ROI in 18 months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      badge: 'Implementation Guide',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  if (isDismissed || !isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">🚀 ULTIMATE AI 2025 CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content That's Transforming Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the most powerful AI strategies, success stories, and implementation guides that are delivering unprecedented ROI across industries.
            </p>
          </div>

          {/* Main Content Showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Preview */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    currentContent.type === 'blog' ? 'bg-blue-500/20 text-blue-300' :
                    currentContent.type === 'case-study' ? 'bg-green-500/20 text-green-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-gray-400 capitalize">{currentContent.type}</span>
                </div>

                <h3 className="text-2xl font-bold leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    Read Full Content
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentContent.color} rounded-2xl p-8 text-center`}>
                  <div className="space-y-6">
                    <div className="text-6xl font-bold text-white/90">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-xl text-white/80">Average ROI</div>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white/90">{currentContent.metrics.savings}</div>
                        <div className="text-sm text-white/70">Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white/90">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                        <div className="text-sm text-white/70">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="w-6 h-6 text-gray-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Success Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">800%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-sm text-gray-300">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <Users className="w-6 h-6 mr-2" />
                Start Your AI Transformation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;