'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Brain, Zap, TrendingUp, ArrowRight, Star, ArrowRight, Brain } from 'lucide-react';

const NeuralInterfaceRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Ultimate Enterprise Guide to 750% ROI',
      description: 'Transform your business with brain-computer integration. Companies achieving 750% ROI within 18 months.',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        productivity: '156%',
        accuracy: '99.7%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'neural-interface-fortune-500',
      title: 'Fortune 500 Neural Interface Transformation',
      subtitle: '$2.8B Company Achieves 850% ROI',
      description: 'See how a Fortune 500 manufacturing giant achieved 850% ROI with brain-computer integration.',
      metrics: {
        roi: '850%',
        savings: '$67M',
        efficiency: '94%',
        satisfaction: '98%'
      },
      url: '/case-studies/neural-interface-fortune-500-transformation-2025',
      type: 'case-study',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'neural-interface-implementation',
      title: 'Neural Interface Implementation Master Guide',
      subtitle: 'From Strategy to 850% ROI',
      description: 'Complete implementation framework for achieving 850% ROI with neural interface technology.',
      metrics: {
        roi: '850%',
        success: '94%',
        timeline: '15 months',
        savings: '$4.2M'
      },
      url: '/resources/neural-interface-implementation-master-guide-2025',
      type: 'resource',
      readingTime: '35 min read',
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
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/20 to-blue-800/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-purple-300" />
                  <span className="text-sm font-medium text-purple-300 uppercase tracking-wide">
                    Neural Interface Revolution 2025
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-yellow-400">Featured</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <p className="text-lg text-blue-200 mb-4">
                {currentContent.subtitle}
              </p>
              <p className="text-gray-300 mb-6 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.productivity || currentContent.metrics.efficiency}</div>
                  <div className="text-xs text-gray-300">Improvement</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.accuracy || currentContent.metrics.satisfaction}</div>
                  <div className="text-xs text-gray-300">Accuracy/Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Get Neural Interface Consultation
                </Link>
              </div>

              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-300">
                <span className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {currentContent.readingTime}
                </span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {currentContent.type === 'blog' ? 'Blog Post' : currentContent.type === 'case-study' ? 'Case Study' : 'Resource'}
                </span>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="w-80 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <Brain className="h-16 w-16 mx-auto text-purple-300 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Neural Interface Technology</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Direct brain-computer integration for unprecedented business performance
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Implementation ROI:</span>
                      <span className="font-semibold text-green-400">750-850%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Success Rate:</span>
                      <span className="font-semibold text-blue-400">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Value:</span>
                      <span className="font-semibold text-purple-400">15-18 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;