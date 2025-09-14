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

const UltimateContent2025RevolutionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

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

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
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
          >
            <X className="w-5 h-5" />
          </button>
        </div>

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
            </div>
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;