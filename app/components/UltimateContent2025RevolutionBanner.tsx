'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      description: 'Discover how Fortune 500 companies are achieving 500%+ ROI with revolutionary AI implementations.',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      image: '/images/ai-revolution-2025.jpg',
      badge: 'NEW'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      description: 'How a $50B manufacturing giant achieved 567% ROI through revolutionary AI implementation.',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%'
      },
      image: '/images/fortune-500-success.jpg',
      badge: 'FEATURED'
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI',
      type: 'Resource',
      description: 'Complete roadmap for AI implementation success with proven strategies and frameworks.',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        success: '98%',
        roi: '500%+',
        timeline: '18 months'
      },
      image: '/images/ai-implementation-guide.jpg',
      badge: 'ULTIMATE'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold">🚀 NEW 2025 CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultimate AI Content Collection 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most comprehensive AI content collection featuring 500%+ ROI success stories, 
            implementation guides, and Fortune 500 transformations.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="relative">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-0 right-0 z-20 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Content info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    currentContent.badge === 'NEW' ? 'bg-green-500' : 
                    currentContent.badge === 'FEATURED' ? 'bg-blue-500' : 
                    'bg-purple-500'
                  }`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm font-medium opacity-80">{currentContent.type}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Read Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="lg:w-80">
                <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl h-48 lg:h-64 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-lg font-semibold">500%+ ROI</div>
                    <div className="text-sm opacity-80">Proven Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-300' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500%+</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">$2.8B</div>
            <div className="text-sm opacity-80">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">18</div>
            <div className="text-sm opacity-80">Months to ROI</div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
          >
            Schedule Your Free AI Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;