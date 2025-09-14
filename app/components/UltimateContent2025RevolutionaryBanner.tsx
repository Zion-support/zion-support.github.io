'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const UltimateContent2025RevolutionaryBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolutionary-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolutionary-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Complete guide to achieving 1,200% ROI with comprehensive AI transformation',
      badge: 'Ultimate Guide',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-100-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Ultimate success story of comprehensive AI transformation in 24 months',
      badge: 'Success Story',
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        speed: '1,000x',
        accuracy: '99.97%',
        market: '$100B'
      },
      description: 'Ultimate breakthrough guide to quantum computing business transformation',
      badge: 'Revolutionary',
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete-guide',
      metrics: {
        roi: '1,500%',
        success: '98%',
        timeline: '24 months',
        companies: '500+'
      },
      description: 'Complete guide to achieving 1,500% ROI with proven implementation framework',
      badge: 'Framework',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600'
    }
  ];

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-bold">Revolutionary AI Content 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>1,500% ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>$2.8B Savings</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>98% Success</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
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
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover the ultimate collection of AI transformation guides, success stories, and implementation frameworks that have helped 500+ companies achieve extraordinary results.
              </p>
            </div>

            {/* Featured Content Card */}
            <div className={`bg-gradient-to-r ${currentContent.gradient} p-6 rounded-xl shadow-2xl`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.badge}
                  </span>
                  <span className="text-sm text-white/80 capitalize">
                    {currentContent.type.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-white/80 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                <Link
                  href={currentContent.url}
                  className="flex-1 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full Guide
                </Link>
                <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Statistics and CTA */}
          <div className="space-y-8">
            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">1,500%</div>
                <div className="text-sm text-gray-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
                <div className="text-sm text-gray-200">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-gray-200">Companies Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-gray-200 leading-relaxed">
                Join 500+ companies that have achieved extraordinary success with our proven AI transformation framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-center"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all text-center"
                >
                  Explore All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionaryBanner;