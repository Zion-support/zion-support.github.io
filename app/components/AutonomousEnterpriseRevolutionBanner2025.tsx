'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    satisfaction: string;
  };
  description: string;
  readingTime: string;
}

const AutonomousEnterpriseRevolutionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - 600% ROI Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '99.7%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with autonomous AI systems that run entire business operations without human intervention.',
      readingTime: '18 min read'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Transformation: $3.2B Annual Savings with 700% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-transformation-2025',
      metrics: {
        roi: '700%',
        savings: '$3.2B',
        efficiency: '89%',
        satisfaction: '99.4%'
      },
      description: 'How a Fortune 100 company achieved $3.2B in annual savings and 700% ROI through comprehensive autonomous AI system implementation.',
      readingTime: '22 min read'
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Enterprise Implementation Master Guide 2025: From Strategy to 700% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '700%',
        savings: '$3B+',
        efficiency: '98%',
        satisfaction: '98%'
      },
      description: 'The complete guide to implementing autonomous AI systems in Fortune 500 companies, with proven strategies for achieving 700% ROI.',
      readingTime: '35 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('autonomous-enterprise-banner-dismissed', 'true');
  };

  const currentItem = contentItems[currentIndex];

  if (isDismissed || !isVisible) {
    return null;
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm font-semibold bg-yellow-400/20 px-3 py-1 rounded-full">
                    🚀 AUTONOMOUS ENTERPRISE REVOLUTION 2025
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                  {getTypeIcon(currentItem.type)} {currentItem.type.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {currentItem.title}
                </h2>
                <p className="text-lg text-blue-100 mb-4 max-w-4xl">
                  {currentItem.description}
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-sm font-medium text-green-400">ROI</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentItem.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-sm font-medium text-green-400">Savings</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentItem.metrics.savings}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-sm font-medium text-blue-400">Efficiency</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentItem.metrics.efficiency}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-purple-400 mr-1" />
                      <span className="text-sm font-medium text-purple-400">Satisfaction</span>
                    </div>
                    <div className="text-xl font-bold text-white">{currentItem.metrics.satisfaction}</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-blue-200 mb-4">
                  <span className="mr-2">⏱️</span>
                  <span>{currentItem.readingTime}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentItem.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Read Full {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Get Implementation Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousEnterpriseRevolutionBanner2025;