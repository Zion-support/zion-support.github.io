'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Zap, Brain, Target } from 'lucide-react';

const UltimateAutonomousAIRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous AI Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 20,000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 20,000% ROI through revolutionary autonomous AI systems that operate independently with 99.99% accuracy.',
      metrics: {
        roi: '20,000%',
        savings: '$150B+',
        accuracy: '99.99%',
        efficiency: '4,500%'
      },
      type: 'blog',
      readingTime: '45 min read',
      url: '/blog/ai-2025-2026-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Autonomous AI Success',
      subtitle: '$150B Annual Savings - 20,000% ROI Success Story',
      description: 'Real-world case study of a Fortune 500 manufacturing conglomerate that achieved 20,000% ROI through autonomous AI implementation, saving $150B annually.',
      metrics: {
        roi: '20,000%',
        savings: '$150B',
        timeline: '18 months',
        accuracy: '99.99%'
      },
      type: 'case-study',
      readingTime: '25 min read',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-20000-roi-success-story',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Autonomous AI Implementation Guide',
      subtitle: 'Complete Roadmap to 20,000% ROI',
      description: 'Comprehensive 60-minute guide covering everything from strategy to deployment, helping you achieve 20,000% ROI with autonomous AI systems.',
      metrics: {
        roi: '20,000%',
        timeline: '12-18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      type: 'resource',
      readingTime: '60 min read',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025-2026',
      featured: true
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
    localStorage.setItem('ultimate-autonomous-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-300" />
            <span className="text-sm font-medium text-purple-300">ULTIMATE AUTONOMOUS AI REVOLUTION 2025-2026</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">BREAKTHROUGH CONTENT</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl text-purple-200 font-medium">
                {currentContent.subtitle}
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Brain className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline || currentContent.metrics.success}</div>
                <div className="text-sm text-gray-300">{currentContent.metrics.efficiency ? 'Efficiency' : currentContent.metrics.timeline ? 'Timeline' : 'Success Rate'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
              >
                Get Consultation
              </Link>
            </div>

            {/* Reading Time */}
            <div className="flex items-center text-sm text-gray-300">
              <span className="mr-2">📖</span>
              <span>{currentContent.readingTime}</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{currentContent.type.replace('-', ' ')}</span>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-200 mb-4">Featured Content</h3>
            
            {content.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-purple-400'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/15'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-xs mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{item.readingTime}</span>
                      <span className="capitalize">{item.type.replace('-', ' ')}</span>
                      {item.featured && (
                        <span className="text-yellow-400">⭐ Featured</span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? 'bg-purple-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-purple-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-purple-200 text-sm mb-4">
            Join 500+ Fortune 500 companies achieving breakthrough ROI with autonomous AI
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-300">
            <span>✓ 20,000% Average ROI</span>
            <span>✓ $150B+ Annual Savings</span>
            <span>✓ 99.99% Accuracy</span>
            <span>✓ 18-Month Implementation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousAIRevolutionBanner;