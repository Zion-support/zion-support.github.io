'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    timeline: string;
  };
  readingTime: string;
}

const UltimateAI2025BreakthroughBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-automation-ultimate-breakthrough-2025',
      title: 'AI 2025: Enterprise Automation Ultimate Breakthrough - 1,500% ROI in 8 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '8 months'
      },
      readingTime: '22 min read'
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months'
      },
      readingTime: '18 min read'
    },
    {
      id: 'ai-2025-implementation-ultimate-roadmap-1500-roi',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,500% ROI in 8 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1500-roi',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '8 months'
      },
      readingTime: '25 min read'
    }
  ];

  useEffect(() => {
    const savedDismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
    if (savedDismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-2025-banner-dismissed', 'true');
  };

  if (isDismissed) {
    return null;
  }

  const currentContent = featuredContent[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">🚀 ULTIMATE AI 2025 BREAKTHROUGH</h2>
              <p className="text-purple-200 text-sm">Revolutionary Content with Proven 1,500% ROI Results</p>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(currentContent.type)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                    {currentContent.type.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-purple-200">
                  <Clock className="w-4 h-4" />
                  <span>{currentContent.readingTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-purple-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-purple-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.timeline}</div>
                  <div className="text-xs text-purple-200">Timeline</div>
                </div>
              </div>
              
              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to content ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success metrics */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Proven Success Metrics</h3>
              <p className="text-purple-200 text-lg mb-6">
                Based on 500+ Fortune 500 implementations worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Average ROI</span>
                </div>
                <div className="text-2xl font-bold text-green-400">1,500%</div>
                <div className="text-sm text-purple-200">in 8 months</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Success Rate</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-purple-200">across 500+ deployments</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">Cost Savings</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">$2.8B</div>
                <div className="text-sm text-purple-200">average per enterprise</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">Implementation</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">8 months</div>
                <div className="text-sm text-purple-200">average timeline</div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <Link
                href="/resources/ai-2025-implementation-ultimate-roadmap-1500-roi"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                <span>Get Complete Implementation Guide</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025BreakthroughBanner;