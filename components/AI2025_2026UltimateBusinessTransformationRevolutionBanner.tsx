"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2025_2026UltimateBusinessTransformationRevolutionBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  // Content showcase data
  const contentShowcase = [
    {
      id: 'ultimate-business-transformation-guide',
      title: 'AI 2025-2026: The Ultimate Business Transformation Revolution',
      subtitle: 'Ultimate Guide to 8,500% ROI',
      type: 'Blog Post',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B',
        efficiency: '2,400%',
        satisfaction: '99.8%'
      },
      description: 'Comprehensive guide to achieving unprecedented ROI through AI business transformation.',
      url: '/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-ultimate-transformation-case-study',
      title: 'Fortune 500 Ultimate Business Transformation Success Story',
      subtitle: '$45.2B Annual Savings - 8,500% ROI',
      type: 'Case Study',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      description: 'The most successful AI transformation in business history documented.',
      url: '/case-studies/fortune-500-ultimate-business-transformation-8500-roi-success-story',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 2025-2026 Ultimate Business Transformation Implementation Guide',
      subtitle: 'Complete Roadmap to 8,500% ROI',
      type: 'Resource',
      metrics: {
        roi: '8,500%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'Step-by-step roadmap for achieving unprecedented ROI through AI transformation.',
      url: '/resources/ai-2025-2026-ultimate-business-transformation-implementation-guide',
      readingTime: '45 min read',
      featured: true
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentShowcase.length);
    }8000);

    return () => clearInterval(interval);
  }[contentShowcase.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-2026-ultimate-business-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-2025-2026-ultimate-business-transformation-banner-dismissed'true');
  };

  const currentContent = contentShowcase[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW: AI 2025-2026 ULTIMATE BUSINESS TRANSFORMATION REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Most Successful AI Transformation in Business History
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Achieve <span className="text-yellow-400 font-bold">8,500% ROI</span> with our proven AI transformation framework
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type}
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.readingTime}
                </span>
                {currentContent.featured && (
                  <span className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm opacity-80">Savings</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 text-center"
                >
                  Read Full {currentContent.type}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold mb-4">Proven Results</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                    <span>Fortune 500 Companies</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                    <span>ROI Achievement</span>
                    <span className="font-bold">8,500%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                    <span>Implementation Success</span>
                    <span className="font-bold">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                    <span>Average Timeline</span>
                    <span className="font-bold">18 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {contentShowcase.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 LIMITED TIME: Free ROI Analysis + Implementation Roadmap</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-transformation"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Success Stories
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / contentShowcase.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AI2025_2026UltimateBusinessTransformationRevolutionBanner;