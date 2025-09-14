'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025RevolutionaryBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with revolutionary AI implementations.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      description: 'How a $50B manufacturing giant achieved 567% ROI with revolutionary AI implementation.',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'Blog Post',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements.',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI - Complete Edition',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '500%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'Complete step-by-step guide to AI implementation with proven frameworks and actionable strategies.',
      readingTime: '35 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const savedDismissed = localStorage.getItem('ultimateContent2025RevolutionaryBanner_dismissed');
    if (savedDismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimateContent2025RevolutionaryBanner_dismissed', 'true');
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">REVOLUTIONARY CONTENT 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">500%+ ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the ultimate collection of AI implementation guides, case studies, and breakthrough insights that are transforming Fortune 500 companies worldwide.
              </p>
            </div>

            {/* Content Carousel */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-300">FEATURED CONTENT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {currentContent.type}
                  </span>
                  <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
                  {currentContent.featured && (
                    <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-blue-200">SAVINGS</div>
                  </div>
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span>Explore Content</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Statistics and CTA */}
          <div className="space-y-6">
            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-sm font-semibold text-green-300">AVERAGE ROI</span>
                </div>
                <div className="text-3xl font-bold text-white">500%+</div>
                <div className="text-sm text-blue-200">Across all implementations</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">SUCCESS RATE</span>
                </div>
                <div className="text-3xl font-bold text-white">94%</div>
                <div className="text-sm text-blue-200">Achieve target ROI</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300">EFFICIENCY</span>
                </div>
                <div className="text-3xl font-bold text-white">78%</div>
                <div className="text-sm text-blue-200">Average improvement</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-300">SATISFACTION</span>
                </div>
                <div className="text-3xl font-bold text-white">99.2%</div>
                <div className="text-sm text-blue-200">Customer satisfaction</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-4">
                Join 500+ Fortune 500 companies achieving 500%+ ROI with our proven AI implementation strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/resources"
                  className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-all duration-200"
                >
                  View All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">$2.8B</div>
              <div className="text-sm text-blue-200">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">18</div>
              <div className="text-sm text-blue-200">Months to ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-blue-200">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.7%</div>
              <div className="text-sm text-blue-200">Quality Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionaryBanner;