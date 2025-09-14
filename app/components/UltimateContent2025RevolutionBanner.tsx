'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$3.2B',
        efficiency: '340%',
        accuracy: '99.8%'
      },
      readingTime: '25 min read',
      featured: true,
      description: 'Transform your business with the most comprehensive AI automation guide. Achieve 1,500% ROI and $3.2B in annual savings.'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Automation Transformation: $3.2B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$3.2B',
        efficiency: '340%',
        accuracy: '99.8%'
      },
      readingTime: '20 min read',
      featured: true,
      description: 'Discover how a Fortune 500 manufacturing giant achieved unprecedented results through AI automation transformation.'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,000x faster'
      },
      readingTime: '18 min read',
      featured: true,
      description: 'Explore the quantum computing revolution that\'s transforming industries with 1,200% ROI and $100B market opportunity.'
    },
    {
      id: 'implementation-framework',
      title: 'AI Automation Implementation Ultimate Framework 2025',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-framework-2025',
      metrics: {
        roi: '1,500%',
        successRate: '94%',
        implementationTime: '18 months',
        projects: '500+ Success Stories'
      },
      readingTime: '15 min read',
      featured: true,
      description: 'Complete roadmap to 1,500% ROI and $3.2B annual savings with our proven implementation framework.'
    }
  ];

  useEffect(() => {
    const savedDismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
    if (savedDismissed === 'true') {
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
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold">🚀 ULTIMATE 2025 CONTENT REVOLUTION</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Revolutionary AI Content Collection
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Discover the most comprehensive collection of AI automation guides, case studies, and frameworks. 
                Achieve unprecedented ROI and transform your business with proven strategies.
              </p>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Average ROI</span>
                </div>
                <div className="text-2xl font-bold text-green-400">1,500%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Total Savings</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">$3.2B+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Efficiency</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">340%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">Success Stories</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">500+</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Explore All Resources
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Content Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Featured Content</span>
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

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-white/70">{currentContent.readingTime}</span>
                </div>

                <h3 className="text-lg font-semibold line-clamp-2">
                  {currentContent.title}
                </h3>

                <p className="text-sm text-white/80 line-clamp-3">
                  {currentContent.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(currentContent.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded p-2">
                      <div className="text-xs text-white/70 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm font-semibold text-yellow-400">{value}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentContent.url}
                  className="block w-full bg-white text-purple-900 py-2 px-4 rounded-lg font-semibold text-center hover:bg-white/90 transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;