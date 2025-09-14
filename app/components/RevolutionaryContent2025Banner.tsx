'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Users, Zap, Target, Award } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with AI transformation strategies.',
      type: 'Blog Post',
      url: '/blog/ai-2025-ultimate-business-transformation-complete-guide',
      metrics: {
        roi: '1000%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '99.7%'
      },
      readingTime: '35 min read',
      featured: true,
      icon: '🚀'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $5B Company Achieves 1000% ROI',
      description: 'Complete case study with implementation details, challenges, and results from real-world success.',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      metrics: {
        roi: '1000%',
        savings: '$850M',
        timeline: '12 months',
        efficiency: '89%'
      },
      readingTime: '25 min read',
      featured: true,
      icon: '💼'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1000% ROI',
      description: 'Complete step-by-step roadmap for achieving 1000% ROI through AI implementation.',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi',
      metrics: {
        roi: '1000%',
        success: '99.7%',
        timeline: '12 months',
        projects: '500+'
      },
      readingTime: '45 min read',
      featured: true,
      icon: '📋'
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-1/4 w-12 h-12 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">REVOLUTIONARY 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">1000% ROI ACHIEVED</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">FORTUNE 500 PROVEN</span>
                </div>
              </div>

              {/* Main content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🎯 Revolutionary AI 2025 Content Collection
                </h2>
                <p className="text-xl text-purple-100 mb-6 max-w-3xl">
                  The most comprehensive AI transformation content ever created. Based on real-world Fortune 500 success stories achieving 1000% ROI.
                </p>
              </div>

              {/* Content showcase */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                      {currentContent.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm font-medium text-purple-200 bg-white/20 rounded-full px-3 py-1">
                        {currentContent.type}
                      </span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-300 rounded-full px-3 py-1">
                        {currentContent.readingTime}
                      </span>
                      {currentContent.featured && (
                        <span className="text-xs bg-green-500/20 text-green-300 rounded-full px-3 py-1">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{currentContent.title}</h3>
                    <p className="text-purple-100 mb-6 text-lg">{currentContent.description}</p>
                    
                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      {Object.entries(currentContent.metrics).map(([key, value]) => (
                        <div key={key} className="text-center bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-xs text-purple-200 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={currentContent.url}
                        className="inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
                      >
                        Read Complete Guide
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Link>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-900 transition-colors text-lg"
                      >
                        View All Success Stories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Additional content links */}
              <div className="flex flex-wrap gap-6 text-sm justify-center">
                <Link href="/blog" className="text-purple-200 hover:text-white transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  All Blog Posts →
                </Link>
                <Link href="/resources" className="text-purple-200 hover:text-white transition-colors flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Implementation Guides →
                </Link>
                <Link href="/tools/ai-roi-calculator" className="text-purple-200 hover:text-white transition-colors flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  ROI Calculator →
                </Link>
                <Link href="/contact" className="text-purple-200 hover:text-white transition-colors flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Get Consultation →
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-6 p-3 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;