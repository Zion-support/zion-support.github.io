'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Zap, TrendingUp, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const QuantumComputingBreakthroughBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const quantumContent = [
    {
      id: 'quantum-breakthrough',
      title: 'AI 2025: The Quantum Computing Breakthrough That\'s Revolutionizing Enterprise',
      description: 'Discover how quantum computing is transforming enterprise AI, delivering 600% ROI and $500M+ in savings across Fortune 500 companies.',
      url: '/blog/ai-2025-quantum-computing-breakthrough-enterprise',
      metrics: {
        roi: '600%',
        savings: '$500M+',
        accuracy: '99.7%',
        speed: '67% faster'
      },
      type: 'Blog Post',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Quantum Transformation: How a $50B Company Achieved 800% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 800% ROI and $2.8B in savings through strategic quantum computing implementation.',
      url: '/case-studies/fortune-500-quantum-transformation-2025',
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        accuracy: '99.9%',
        speed: '67% reduction'
      },
      type: 'Case Study',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum Computing Implementation Guide 2025: From Strategy to 800% ROI',
      description: 'Complete guide to implementing quantum computing in your enterprise, with proven strategies for achieving 800% ROI and $500M+ in savings.',
      url: '/resources/quantum-computing-implementation-guide-2025',
      metrics: {
        roi: '800%',
        savings: '$500M+',
        accuracy: '99.9%',
        speed: '340% improvement'
      },
      type: 'Resource',
      readingTime: '35 min read',
      featured: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('quantum-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % quantumContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [quantumContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('quantum-banner-dismissed', 'true');
  };

  const currentItem = quantumContent[currentContent];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold">QUANTUM COMPUTING BREAKTHROUGH 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-semibold">800% ROI PROVEN</span>
                </div>
              </div>

              {/* Content showcase */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {currentItem.title}
                </h2>
                <p className="text-lg text-blue-100 mb-4 max-w-4xl">
                  {currentItem.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-300" />
                      <span className="text-sm font-medium">ROI</span>
                    </div>
                    <div className="text-xl font-bold text-green-300">{currentItem.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-blue-300" />
                      <span className="text-sm font-medium">Savings</span>
                    </div>
                    <div className="text-xl font-bold text-blue-300">{currentItem.metrics.savings}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-300" />
                      <span className="text-sm font-medium">Accuracy</span>
                    </div>
                    <div className="text-xl font-bold text-purple-300">{currentItem.metrics.accuracy}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm font-medium">Speed</span>
                    </div>
                    <div className="text-xl font-bold text-yellow-300">{currentItem.metrics.speed}</div>
                  </div>
                </div>

                {/* Content type and reading time */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.type}
                  </span>
                  <span className="text-blue-200 text-sm">
                    {currentItem.readingTime}
                  </span>
                  {currentItem.featured && (
                    <span className="bg-yellow-500/30 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentItem.url}
                  className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/quantum-computing-solutions"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <span>Explore Quantum Solutions</span>
                  <Zap className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex space-x-2">
            {quantumContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  index === currentContent
                    ? 'bg-white'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthroughBanner2025;