'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

const UltimateSuccess2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Transform your enterprise with cutting-edge AI automation technologies delivering unprecedented ROI.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: 1,200% ROI Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '98.7%'
      },
      description: 'How a $50B manufacturing giant achieved unprecedented results with advanced AI automation.',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,200%',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The complete guide to achieving 1,200% ROI with advanced AI automation based on 500+ successful implementations.',
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateSuccess2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateSuccess2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE SUCCESS 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the advanced automation mastery techniques delivering <span className="text-yellow-400 font-bold">1,200% ROI</span> and <span className="text-green-400 font-bold">$2.8B in annual savings</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Content</h3>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  FEATURED
                </span>
                <span className="text-blue-300 text-sm">{currentContent.readingTime}</span>
              </div>

              <h4 className="text-xl font-bold leading-tight">
                {currentContent.title}
              </h4>

              <p className="text-blue-100 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-blue-200">ROI Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                <div className="text-sm text-blue-200">Efficiency/Success</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.satisfaction || currentContent.metrics.projects}</div>
                <div className="text-sm text-blue-200">Satisfaction/Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                  {content.type.toUpperCase()}
                </span>
                <span className="text-blue-300 text-xs">{content.readingTime}</span>
              </div>
              <h5 className="font-bold text-sm leading-tight mb-2 line-clamp-2">
                {content.title}
              </h5>
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-400 font-bold">{content.metrics.roi} ROI</span>
                <span className="text-green-400">{content.metrics.savings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/content"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default UltimateSuccess2025Banner;