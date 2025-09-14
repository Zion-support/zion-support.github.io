'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Brain, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    accuracy: string;
    efficiency: string;
    savings: string;
  };
  readingTime: string;
}

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        efficiency: '800%',
        savings: '$450M'
      },
      readingTime: '22 min read'
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: $1.2B Annual Savings',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,800%',
        accuracy: '99.9%',
        efficiency: '850%',
        savings: '$1.2B'
      },
      readingTime: '18 min read'
    },
    {
      id: 'neural-interface-guide',
      title: 'Neural Interface Implementation Master Guide: From Strategy to 1,200% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        efficiency: '800%',
        savings: '$2.3M'
      },
      readingTime: '35 min read'
    },
    {
      id: 'autonomous-ai-agents',
      title: 'AI 2025: The Autonomous AI Agents Enterprise Revolution - 2,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      metrics: {
        roi: '2,000%',
        accuracy: '99.8%',
        efficiency: '1,200%',
        savings: '$3.2B'
      },
      readingTime: '25 min read'
    },
    {
      id: 'retail-autonomous-ai',
      title: 'Retail Autonomous AI Transformation: $850M Annual Savings - Ultimate Success',
      type: 'case-study',
      url: '/case-studies/retail-autonomous-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '2,400%',
        accuracy: '98.5%',
        efficiency: '1,100%',
        savings: '$850M'
      },
      readingTime: '16 min read'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

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

  if (!isVisible || isDismissed) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <Brain className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-semibold">NEURAL INTERFACE REVOLUTION 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-semibold">NEW CONTENT</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Revolutionary Neural Interface & Autonomous AI Content
                </h2>
                <p className="text-lg text-blue-100 mb-4 max-w-4xl">
                  Discover breakthrough content featuring 1,200-2,400% ROI, 99.9% accuracy, and billions in savings through neural interfaces and autonomous AI systems.
                </p>
              </div>

              {/* Featured Content Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentItem.type)}`}>
                        {currentItem.type.toUpperCase().replace('-', ' ')}
                      </div>
                      <div className="text-sm text-blue-200 mt-1">{currentItem.readingTime}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {contentItems.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {currentItem.title}
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{currentItem.metrics.roi}</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-300">{currentItem.metrics.accuracy}</div>
                    <div className="text-xs text-blue-200">Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-300">{currentItem.metrics.efficiency}</div>
                    <div className="text-xs text-blue-200">Efficiency</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-300">{currentItem.metrics.savings}</div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={currentItem.url}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="text-sm text-blue-200">
                    {currentIndex + 1} of {contentItems.length}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30"
                >
                  <Brain className="w-5 h-5" />
                  <span>Explore All Content</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Target className="w-5 h-5" />
                  <span>Get Implementation Guide</span>
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;