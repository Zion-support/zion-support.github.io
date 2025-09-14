'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  XMarkIcon, 
  StarIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  ClockIcon,
  BoltIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const EdgeComputingRevolutionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'edge-computing-revolution-guide',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Business Transformation Guide',
      description: 'Discover how Fortune 500 companies are achieving 450% ROI and $3.2B in annual savings through strategic edge AI implementation.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '450%',
        savings: '$3.2B',
        latency: '95%',
        uptime: '99.9%'
      },
      readingTime: '18 min read',
      featured: true,
      icon: <CpuChipIcon className="h-6 w-6" />
    },
    {
      id: 'fortune-500-edge-transformation',
      title: 'Fortune 500 Edge Computing Transformation: $3.2B Annual Savings - Ultimate Success Story',
      description: 'Explore how a $45B manufacturing giant achieved 567% ROI and revolutionized operations with edge computing in just 18 months.',
      url: '/case-studies/edge-computing-fortune-500-transformation-ultimate-success',
      type: 'Case Study',
      metrics: {
        roi: '567%',
        savings: '$3.2B',
        timeline: '18 months',
        reliability: '99.9%'
      },
      readingTime: '22 min read',
      featured: true,
      icon: <ChartBarIcon className="h-6 w-6" />
    },
    {
      id: 'edge-implementation-guide',
      title: 'Edge Computing Implementation Ultimate Guide 2025: Complete Roadmap to 567% ROI',
      description: 'Master the complete framework for implementing edge computing solutions that deliver extraordinary results and transform your business.',
      url: '/resources/edge-computing-implementation-ultimate-guide-2025',
      type: 'Resource',
      metrics: {
        roi: '567%',
        payback: '8.2 months',
        reliability: '99.9%',
        efficiency: '95%'
      },
      readingTime: '25 min read',
      featured: true,
      icon: <BoltIcon className="h-6 w-6" />
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isDismissed, featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('edge-computing-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('edge-computing-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <CpuChipIcon className="h-8 w-8 text-cyan-400" />
              <StarIcon className="h-6 w-6 text-yellow-400" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400/20 to-blue-400/20 px-4 py-2 rounded-full border border-cyan-400/30">
              🚀 EDGE COMPUTING REVOLUTION 2025
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Showcase */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The Edge Computing Revolution That's Transforming Business
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover how leading enterprises are achieving <span className="text-cyan-400 font-semibold">567% ROI</span> and <span className="text-green-400 font-semibold">$3.2B in annual savings</span> through strategic edge computing implementation.
              </p>
            </div>

            {/* Current Featured Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    {currentContent.icon}
                  </div>
                  <div>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {currentContent.type}
                    </span>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {currentContent.readingTime}
                    </div>
                  </div>
                </div>
                {currentContent.featured && (
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <ChartBarIcon className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {currentContent.metrics.savings}
                    </div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <span>Explore Content</span>
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Statistics & Call-to-Action */}
          <div className="space-y-10">
            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl font-bold text-green-400 mb-2">567%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-2">$3.2B</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-blue-200">System Uptime</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-sm text-blue-200">Faster Response</div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="space-y-6">
              <Link
                href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-5 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-2">
                  <CpuChipIcon className="h-6 w-6" />
                  <span>Start Your Edge Computing Journey</span>
                </div>
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/case-studies/edge-computing-fortune-500-transformation-ultimate-success"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-2"
                >
                  <ChartBarIcon className="h-5 w-5" />
                  <span>Success Stories</span>
                </Link>
                <Link
                  href="/resources/edge-computing-implementation-ultimate-guide-2025"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-2"
                >
                  <BoltIcon className="h-5 w-5" />
                  <span>Implementation Guide</span>
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheckIcon className="h-6 w-6 text-green-400" />
                <span className="text-lg font-semibold text-blue-200">
                  Trusted by Fortune 500 Companies
                </span>
              </div>
              <div className="flex justify-center space-x-6 text-sm text-blue-300">
                <span className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span>Verified Results</span>
                </span>
                <span className="flex items-center space-x-1">
                  <BoltIcon className="h-4 w-4 text-cyan-400" />
                  <span>Expert Authored</span>
                </span>
                <span className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4 text-blue-400" />
                  <span>Updated 2025</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeComputingRevolutionBanner2025;