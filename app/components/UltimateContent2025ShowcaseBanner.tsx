'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Transform your business with cutting-edge AI technology and achieve unprecedented results.',
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      description: 'How a global manufacturing giant achieved 567% ROI with comprehensive AI implementation.',
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      description: 'How Quantum AI is reshaping enterprise operations and delivering 1,200% ROI.',
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-guide-2025',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The comprehensive blueprint for enterprise AI success with proven methodologies.',
      readingTime: '15 min read',
      isNew: true
    }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">500%+ ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
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
                Discover the ultimate collection of AI transformation guides, success stories, and implementation strategies that are delivering unprecedented results for Fortune 500 companies.
              </p>
            </div>

            {/* Featured Content Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {currentContent.type.toUpperCase()}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-blue-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2 justify-center">
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

          {/* Right Side - Statistics and CTA */}
          <div className="space-y-8">
            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm text-blue-200">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Join 500+ companies that have achieved 500%+ ROI with our proven AI transformation strategies.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-4 rounded-lg font-bold text-center hover:from-yellow-400 hover:to-orange-400 transition-all"
                >
                  Get Your Free AI Strategy Consultation
                </Link>
                
                <div className="flex space-x-4">
                  <Link
                    href="/resources"
                    className="flex-1 bg-white/20 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-white/30 transition-colors"
                  >
                    Browse All Resources
                  </Link>
                  <Link
                    href="/case-studies"
                    className="flex-1 bg-white/20 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-white/30 transition-colors"
                  >
                    View Success Stories
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">500+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;