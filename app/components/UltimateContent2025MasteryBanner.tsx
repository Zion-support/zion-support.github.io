'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const UltimateContent2025MasteryBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-mastery-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-mastery-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <span className="text-sm font-medium bg-yellow-400/20 px-2 py-1 rounded-full">
              ULTIMATE MASTERY CONTENT 2025
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Title and Description */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Master AI Implementation with Our Ultimate 2025 Content Collection
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Discover the proven strategies, real-world case studies, and step-by-step roadmaps 
                that Fortune 500 companies use to achieve <span className="text-yellow-400 font-bold">800% ROI</span> with AI.
              </p>
            </div>

            {/* Content Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">FEATURED CONTENT</span>
                </div>
                <div className="flex space-x-1">
                  {contentPieces.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-yellow-400 w-6' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-500/30 px-3 py-1 rounded-full text-sm font-medium">
                      {currentContent.type.toUpperCase()}
                    </span>
                    <span className="text-yellow-400 text-sm">⭐ FEATURED</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {currentContent.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-yellow-400">
                        {currentContent.metrics.roi}
                      </div>
                      <div className="text-sm text-blue-100">ROI</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-400">
                        {currentContent.metrics.savings}
                      </div>
                      <div className="text-sm text-blue-100">Savings</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">
                      📖 {currentContent.readingTime}
                    </span>
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      <span>Read Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-bold mb-4 text-center">Success Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm">ROI Achievement</span>
                      </div>
                      <span className="font-bold text-green-400">
                        {currentContent.metrics.roi}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">Cost Savings</span>
                      </div>
                      <span className="font-bold text-yellow-400">
                        {currentContent.metrics.savings}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Success Rate</span>
                      </div>
                      <span className="font-bold text-blue-400">
                        {currentContent.metrics.success || currentContent.metrics.accuracy || currentContent.metrics.efficiency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Content Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {contentPieces.map((content, index) => (
                <div
                  key={content.id}
                  className={`bg-white/5 rounded-lg p-4 cursor-pointer transition-all ${
                    index === currentSlide ? 'ring-2 ring-yellow-400 bg-white/10' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-500/30 px-2 py-1 rounded text-xs font-medium">
                      {content.type.toUpperCase()}
                    </span>
                    {content.featured && (
                      <span className="text-yellow-400 text-xs">⭐ FEATURED</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                    {content.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-blue-200">
                    <span>📖 {content.readingTime}</span>
                    <span className="font-bold text-yellow-400">
                      {content.metrics.roi} ROI
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/resources"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <span>Explore All Resources</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Get Expert Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Join 500+ companies achieving extraordinary results with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025MasteryBanner;