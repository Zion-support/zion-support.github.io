'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    uptime?: string;
    efficiency?: string;
  };
  readingTime?: string;
}

const AutonomousEnterprise2025BreakthroughBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025: The Autonomous Enterprise Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%'
      },
      readingTime: '18 min read'
    },
    {
      id: 'fortune-500-autonomous-transformation',
      title: 'Fortune 500 Autonomous Transformation: $2.8B Annual Savings with 500% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-transformation-500-percent-roi-success',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%'
      },
      readingTime: '12 min read'
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'AI 2025 Autonomous Enterprise Implementation Master Guide: Complete Roadmap to 500% ROI',
      type: 'resource',
      url: '/resources/ai-2025-autonomous-enterprise-implementation-master-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '78%'
      },
      readingTime: '25 min read'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('autonomous-enterprise-2025-banner-dismissed', 'true');
  };

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

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentContent = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">AUTONOMOUS ENTERPRISE 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>500% ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>$2.8B Savings</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Autonomous Enterprise Revolution is Here
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Discover how Fortune 500 companies are achieving <span className="font-bold text-yellow-400">500% ROI</span> and 
                <span className="font-bold text-green-400"> $2.8B in annual savings</span> with autonomous AI systems.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">500%</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">$2.8B</div>
                <div className="text-sm text-white/80">Annual Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-white/80">System Uptime</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">78%</div>
                <div className="text-sm text-white/80">Efficiency Gain</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ai-transformation-hub"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Autonomous AI</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getTypeIcon(currentContent.type)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentContent.type)}`}>
                    {currentContent.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-white/70">{currentContent.readingTime}</div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4 line-clamp-2">
                {currentContent.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-white/70">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-white/70">Savings</div>
                </div>
              </div>
              
              <Link
                href={currentContent.url}
                className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>Read Full {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                index === currentSlide ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{getTypeIcon(item.type)}</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(item.type)}`}>
                  {item.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <h4 className="text-sm font-medium mb-2 line-clamp-2">{item.title}</h4>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>{item.readingTime}</span>
                <span className="font-semibold text-yellow-400">{item.metrics.roi} ROI</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutonomousEnterprise2025BreakthroughBanner;