'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, TrendingUp, Zap, Award, ArrowRight } from 'lucide-react';

const AutonomousAIRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      subtitle: '600% ROI Breakthrough',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with autonomous AI systems that operate 24/7 without human intervention.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        uptime: '99.7%',
        efficiency: '89%'
      },
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      type: 'blog',
      readingTime: '18 min read'
    },
    {
      id: 'fortune-500-case',
      title: 'Fortune 500 Autonomous AI Transformation',
      subtitle: '$2.8B Annual Savings in 12 Months',
      description: 'How a Fortune 500 manufacturing company achieved $2.8 billion in annual savings and 800% ROI through comprehensive autonomous AI implementation.',
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '89%'
      },
      url: '/case-studies/fortune-500-autonomous-ai-transformation-2025',
      type: 'case-study',
      readingTime: '22 min read'
    },
    {
      id: 'edge-computing',
      title: 'AI 2025: The Edge Computing Revolution',
      subtitle: '450% ROI with Real-Time Intelligence',
      description: 'Discover how edge computing is revolutionizing AI deployment, delivering 450% ROI through real-time processing and enhanced privacy.',
      metrics: {
        roi: '450%',
        savings: '$1.2B',
        latency: '67% reduction',
        uptime: '99.5%'
      },
      url: '/blog/ai-2025-edge-computing-revolution',
      type: 'blog',
      readingTime: '16 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">NEW 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-1 bg-green-500/20 rounded-full px-3 py-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">FEATURED</span>
                </div>
              </div>

              {/* Main content */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {currentContent.title}
                </h2>
                <p className="text-xl md:text-2xl text-blue-200 mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                  {currentContent.description}
                </p>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.uptime}</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentContent.metrics.efficiency || currentContent.metrics.latency}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.efficiency ? 'Efficiency' : 'Latency'}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Read {currentContent.type === 'case-study' ? 'Case Study' : 'Article'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/resources/autonomous-ai-implementation-master-guide-2025"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Implementation Guide
                </Link>
              </div>

              {/* Reading time and type indicator */}
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-300">
                <span className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    currentContent.type === 'case-study' ? 'bg-green-400' : 'bg-blue-400'
                  }`}></div>
                  {currentContent.type === 'case-study' ? 'Case Study' : 'Blog Post'}
                </span>
                <span>{currentContent.readingTime}</span>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
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

export default AutonomousAIRevolutionBanner2025;