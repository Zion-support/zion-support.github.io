'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous Enterprise Revolution',
      description: 'Transform your enterprise with next-generation autonomous AI systems that achieve 4,500% ROI',
      metrics: {
        roi: '4,500%',
        savings: '$28.5B+',
        accuracy: '99.97%',
        efficiency: '2,800%'
      },
      url: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Enterprise Transformation: $28.5B Annual Savings',
      description: 'How a Global Manufacturing Conglomerate achieved 4,500% ROI through autonomous AI systems',
      metrics: {
        roi: '4,500%',
        savings: '$28.5B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-4500-roi-success-story',
      type: 'case-study',
      featured: true
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Enterprise Implementation Ultimate Guide 2025-2026',
      description: 'Complete roadmap to 4,500% ROI with next-generation autonomous AI systems',
      metrics: {
        roi: '4,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      url: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026',
      type: 'resource',
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
    localStorage.setItem('autonomous-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Ultimate Autonomous Enterprise Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Transform your enterprise with next-generation autonomous AI systems that achieve <span className="text-yellow-300 font-bold">4,500% ROI</span> and <span className="text-green-300 font-bold">$28.5B+ in annual savings</span>
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-300">FEATURED CONTENT</span>
            </div>
            <div className="flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-sm font-medium">
                  FEATURED
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300 mb-2">
                  {currentContent.metrics.savings}
                </div>
                <div className="text-sm opacity-90">Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">
                  {currentContent.metrics.accuracy}
                </div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">
                  {currentContent.metrics.efficiency || currentContent.metrics.timeline || currentContent.metrics.success}
                </div>
                <div className="text-sm opacity-90">
                  {currentContent.metrics.efficiency ? 'Efficiency' : 
                   currentContent.metrics.timeline ? 'Timeline' : 'Success Rate'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">4,500%</div>
            <div className="text-lg font-semibold mb-2">Average ROI</div>
            <div className="text-sm opacity-90">Within 18 months</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">$28.5B+</div>
            <div className="text-lg font-semibold mb-2">Annual Savings</div>
            <div className="text-sm opacity-90">Across implementations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">99.97%</div>
            <div className="text-lg font-semibold mb-2">Accuracy</div>
            <div className="text-sm opacity-90">Autonomous decisions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">2,800%</div>
            <div className="text-lg font-semibold mb-2">Efficiency</div>
            <div className="text-sm opacity-90">Improvement</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/case-studies/fortune-500-autonomous-enterprise-transformation-4500-roi-success-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseBanner;