'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Zap, Target } from 'lucide-react';

const UltimateContent2025RevolutionaryBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // New revolutionary content pieces
  const contentPieces = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      subtitle: 'Enterprise Breakthrough Guide',
      description: 'Transform Fortune 500 companies with 1,500% ROI through revolutionary AI automation',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '400%'
      },
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-breakthrough',
      type: 'blog',
      featured: true,
      readingTime: '28 min read'
    },
    {
      id: 'fortune-500-2500-roi-success',
      title: 'Fortune 500 AI Transformation: 2,500% ROI Success',
      subtitle: 'Ultimate Success Story',
      description: '$2.8B annual savings with 2,500% ROI in just 10 months - the most successful AI transformation in corporate history',
      metrics: {
        roi: '2,500%',
        savings: '$2.8B',
        timeline: '10 months',
        satisfaction: '98.7%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2500-roi-success-story',
      type: 'case-study',
      featured: true,
      readingTime: '22 min read'
    },
    {
      id: 'ultimate-implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'Complete Guide to 2,000% ROI',
      description: 'The definitive step-by-step guide for enterprise AI transformation success with proven 98% success rate',
      metrics: {
        roi: '2,000%',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide',
      type: 'resource',
      featured: true,
      readingTime: '35 min read'
    }
  ];

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolutionary-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-revolutionary-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentPieces.length) % contentPieces.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">🚀 REVOLUTIONARY AI CONTENT 2025</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Ultimate AI Transformation Content
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the most successful AI implementations delivering 1,500% - 2,500% ROI
            </p>
          </div>

          {/* Content showcase */}
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous content"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next content"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full">
                      {currentContent.type.toUpperCase()}
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                      FEATURED
                    </div>
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {currentContent.readingTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {currentContent.title}
                  </h3>
                  <p className="text-lg text-blue-200 mb-4">
                    {currentContent.subtitle}
                  </p>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {currentContent.description}
                  </p>

                  {/* Success metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium text-gray-300">ROI</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        {currentContent.metrics.roi}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {currentContent.metrics.savings}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">Accuracy</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {currentContent.metrics.accuracy || currentContent.metrics.success || currentContent.metrics.timeline}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-gray-300">Efficiency</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        {currentContent.metrics.efficiency || currentContent.metrics.satisfaction || currentContent.metrics.projects}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105"
                  >
                    Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Visual elements */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Star className="w-12 h-12 text-black" />
                      </div>
                      <h4 className="text-xl font-bold mb-4">Revolutionary AI Content</h4>
                      <p className="text-gray-300 mb-6">
                        The most successful AI implementations delivering unprecedented ROI
                      </p>
                      
                      {/* Progress indicators */}
                      <div className="flex justify-center gap-2 mb-6">
                        {contentPieces.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentSlide
                                ? 'bg-yellow-400 scale-125'
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      <div className="text-sm text-gray-400">
                        {currentSlide + 1} of {contentPieces.length} featured content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-300 mb-4">
              Ready to achieve similar results with AI transformation?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
              >
                View All Resources
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionaryBanner;