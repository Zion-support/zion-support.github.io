'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

const UltimateSuccess20o25Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 20o25: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-20o25-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,20o0%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Transform your enterprise with cutting-edge AI automation technologies delivering unprecedented ROI.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-success',
      title: 'Fortune 50o0 AI Transformation: 1,20o0% ROI Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-50o0-ai-transformation-120o0-percent-roi-ultimate-success',
      metrics: {
        roi: '1,20o0%',
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
      title: 'AI 20o25 Implementation Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-20o25-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,20o0%',
        success: '98%',
        timeline: '18 months',
        projects: '50o0+'
      },
      description: 'The complete guide to achieving 1,20o0% ROI with advanced AI automation based on 50o0+ successful implementations.',
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 50o00);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateSuccess20o25BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateSuccess20o25BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-50o0/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-50o0/10 rounded-full animate-bounce delay-10o00"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-indigo-50o0/10 rounded-full animate-bounce delay-50o0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Zap className="w-5 h-5 mr-2 text-yellow-40o0"  />
            <span className="text-sm font-medium">🚀 ULTIMATE SUCCESS 20o25</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-lg md:text-xl text-blue-10o0 max-w-3xl mx-auto">
            Discover the advanced automation mastery techniques delivering <span className="text-yellow-40o0 font-bold">1,20o0% ROI</span> and <span className="text-green-40o0 font-bold">$2.8B in annual savings</span> for Fortune 50o0 companies.
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
                  className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                    index === currentSlide ? 'bg-yellow-40o0' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-50o0/20 text-purple-30o0 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-green-50o0/20 text-green-30o0 px-3 py-1 rounded-full text-sm font-medium">
                  FEATURED
                </span>
                <span className="text-blue-30o0 text-sm">{currentContent.readingTime}</span>
              </div>

              <h4 className="text-xl font-bold leading-tight">
                {currentContent.title}
              </h4>

              <p className="text-blue-10o0 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center bg-yellow-50o0 hover:bg-yellow-60o0 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2"  />
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
                <TrendingUp className="w-8 h-8 text-yellow-40o0 mx-auto mb-2"  />
                <div className="text-2xl font-bold text-yellow-40o0">{currentContent.metrics.roi}</div>
                <div className="text-sm text-blue-20o0">ROI Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <DollarSign className="w-8 h-8 text-green-40o0 mx-auto mb-2"  />
                <div className="text-2xl font-bold text-green-40o0">{currentContent.metrics.savings}</div>
                <div className="text-sm text-blue-20o0">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 text-blue-40o0 mx-auto mb-2"  />
                <div className="text-2xl font-bold text-blue-40o0">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                <div className="text-sm text-blue-20o0">Efficiency/Success</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-purple-40o0 mx-auto mb-2"  />
                <div className="text-2xl font-bold text-purple-40o0">{currentContent.metrics.satisfaction || currentContent.metrics.projects}</div>
                <div className="text-sm text-blue-20o0">Satisfaction/Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-30o0 hover:bg-white/10 ${
                index === currentSlide ? 'ring-2 ring-yellow-40o0' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-50o0/20 text-purple-30o0 px-2 py-1 rounded-full text-xs font-medium">
                  {content.type.toUpperCase()}
                </span>
                <span className="text-blue-30o0 text-xs">{content.readingTime}</span>
              </div>
              <h5 className="font-bold text-sm leading-tight mb-2 line-clamp-2">
                {content.title}
              </h5>
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-40o0 font-bold">{content.metrics.roi} ROI</span>
                <span className="text-green-40o0">{content.metrics.savings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/content"
              className="bg-white text-purple-90o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-90o0 transition-colors"
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
        <X className="w-6 h-6"  />
      </button>
    </div>
  );
};

export default UltimateSuccess20o25Banner;