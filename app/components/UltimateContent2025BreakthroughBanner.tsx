'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime: string;
  featured: boolean;
}

const UltimateContent2025BreakthroughBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$2.8B+',
        efficiency: '95%',
        satisfaction: '94%'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed, featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-breakthrough-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Zap className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">ULTIMATE BREAKTHROUGH CONTENT 2025</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">1,200% ROI GUARANTEED</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Revolutionary AI Content That Delivers
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    1,200% ROI
                  </span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Discover the breakthrough strategies that Fortune 500 companies use to achieve 
                  unprecedented success with AI. Get the complete roadmap to transformation.
                </p>
              </div>

              {/* Featured content card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentContent.type)}`}>
                      {getTypeIcon(currentContent.type)}
                      <span className="uppercase">{currentContent.type.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">FEATURED</span>
                    </div>
                  </div>
                  <div className="text-sm text-white/70">
                    {currentContent.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-white/70">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-sm text-white/70">Savings</div>
                  </div>
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Content navigation dots */}
              <div className="flex justify-center space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-yellow-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Success metrics */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-6">Proven Success Metrics</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">1,200%</div>
                      <div className="text-sm text-white/70">Average ROI</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">$3.2B</div>
                      <div className="text-sm text-white/70">Average Savings</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">95%</div>
                      <div className="text-sm text-white/70">Efficiency Gain</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">99.2%</div>
                      <div className="text-sm text-white/70">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
                <div className="text-center">
                  <h4 className="text-lg font-bold mb-2">Ready to Transform Your Business?</h4>
                  <p className="text-white/90 mb-4">
                    Get the complete AI implementation framework that delivers 1,000%+ ROI
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/resources/ai-implementation-ultimate-success-framework-2025"
                      className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <span>Get Framework</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                    >
                      <span>Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025BreakthroughBanner;