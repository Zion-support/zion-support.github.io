'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
}

const AutonomousEnterprise2025BreakthroughBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'autonomous-enterprise-systems',
      title: 'AI 2025: Next-Generation Autonomous Enterprise Systems - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-next-generation-autonomous-enterprise-systems-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$45.2M',
        efficiency: '99.8%'
      },
      readingTime: '28 min read'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Enterprise Transformation: $8.2B Company Achieves 1,500% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-1500-roi-success',
      metrics: {
        roi: '1,500%',
        savings: '$67M',
        efficiency: '99.8%'
      },
      readingTime: '22 min read'
    },
    {
      id: 'implementation-master-guide',
      title: 'Autonomous Enterprise Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '1,500%',
        savings: '$218M',
        efficiency: '95%'
      },
      readingTime: '35 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-enterprise-2025-banner-dismissed', 'true');
  };

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
      case 'resource': return 'Implementation Guide';
      default: return 'Content';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-blue-900/20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-semibold">🚀 NEW BREAKTHROUGH CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Autonomous Enterprise Systems 2025: 1,500% ROI Breakthrough
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Discover how Fortune 500 companies are achieving unprecedented success with next-generation autonomous enterprise systems
            </p>
          </div>

          {/* Content showcase */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Content preview */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentContent.type)}`}>
                    {getTypeLabel(currentContent.type)}
                  </span>
                  <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-blue-200">ROI Achievement</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-sm text-blue-200">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                    <div className="text-sm text-blue-200">System Efficiency</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Read {getTypeLabel(currentContent.type)}
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    Get Implementation Help
                  </Link>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="lg:w-48 flex lg:flex-col justify-center items-center gap-4">
                <div className="flex lg:flex-col gap-2">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">Content {currentIndex + 1} of {newContent.length}</div>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${((currentIndex + 1) / newContent.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1,500%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
              <div className="text-blue-200">System Reliability</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$45.2M</div>
              <div className="text-blue-200">Average Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">94%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/blog"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                View All Content →
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutonomousEnterprise2025BreakthroughBanner;