'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
  };
  featured: boolean;
}

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

<<<<<<< HEAD
  const featuredContent: ContentItem[] = [
    {
      id: 'advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution - The Future of Enterprise Intelligence',
      type: 'blog',
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      metrics: {
        roi: '340%',
        accuracy: '99.7%',
        savings: '$2.8M'
      },
      featured: true
    },
    {
      id: 'enterprise-transformation-success',
      title: 'AI 2025 Enterprise Transformation: $2.8B Company Achieves 1,200% ROI - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/ai-2025-enterprise-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      featured: true
    },
    {
      id: 'implementation-ultimate-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '67% faster'
      },
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
  const featuredContent = [
    {
      id: 'ai-2025-ultimate-business-transformation-revolution',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months',
      description: 'Discover how Fortune 500 companies are achieving unprecedented results with cutting-edge AI technologies.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$6.5B',
        efficiency: '89%',
        timeline: '6 months'
      },
      tags: ['Revolution', 'ROI', 'Fortune 500', 'Transformation'],
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: '567% ROI in 18 Months',
      description: 'Real-world case study of a manufacturing giant that revolutionized their operations with AI.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'Manufacturing'],
      featured: true
    },
    {
      id: 'ai-2025-implementation-roadmap-800-roi',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      description: 'Comprehensive step-by-step guide for implementing AI technologies that deliver extraordinary results.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-roadmap-800-roi',
      metrics: {
        roi: '800%',
        savings: '$5.6B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI'],
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
    localStorage.setItem('ultimate-content-2025-revolution-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

<<<<<<< HEAD
  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
<<<<<<< HEAD
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">🚀 AI 2025 Ultimate Content Revolution</h2>
              <p className="text-sm text-white/80">New breakthrough content delivering 1,000%+ ROI</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">NEW CONTENT 2025</span>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

<<<<<<< HEAD
        {/* Content Showcase */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Featured Content Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentContent.type)}`}>
                    {getTypeLabel(currentContent.type)}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">Featured</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {currentContent.metrics.roi && (
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-white/80">ROI</div>
                  </div>
                )}
                {currentContent.metrics.savings && (
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-white/80">Savings</div>
                  </div>
                )}
                {currentContent.metrics.accuracy && (
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                    <div className="text-xs text-white/80">Accuracy</div>
                  </div>
                )}
                {currentContent.metrics.satisfaction && (
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-400">{currentContent.metrics.satisfaction}</div>
                    <div className="text-xs text-white/80">Satisfaction</div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <div className="text-sm text-white/80">
                  {currentSlide + 1} of {featuredContent.length}
                </div>
              </div>
            </div>

            {/* Success Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1,000%+</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-white/80">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$2.8B+</div>
                <div className="text-sm text-white/80">Total Savings</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                View Success Stories
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                Download Resources
              </Link>
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Content Info */}
              <div className="flex-1 pr-8">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">FEATURED CONTENT</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-lg text-blue-200 mb-4 font-semibold">
                  {currentContent.subtitle}
                </p>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-gray-300">Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-400">{currentContent.metrics.timeline}</div>
                    <div className="text-xs text-gray-300">Timeline</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentContent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 hover:bg-white/10 rounded-lg font-semibold transition-all duration-200"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Previous content"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Slide Indicators */}
                <div className="flex flex-col space-y-2">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Next content"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 pb-4">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
=======
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
        {/* Progress Bar */}
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / featuredContent.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;