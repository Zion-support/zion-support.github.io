'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
      featured: true
    }
  ];

  useEffect(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
<<<<<<< HEAD
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold text-sm">🚀 NEW BREAKTHROUGH</span>
              <span className="text-white font-semibold">Ultimate Business Intelligence 2025</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {currentContent.title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-400">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-400">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.speed || currentContent.metrics.timeline}</div>
                <div className="text-sm text-gray-400">{currentContent.metrics.speed ? 'Faster' : 'Timeline'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Read {currentContent.type}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Consultation
              </Link>
            </div>

            {/* Content Type Badge */}
            <div className="flex items-center gap-4 mt-4 text-sm">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold">
                {currentContent.type}
              </span>
              <span className="text-gray-400">{currentContent.readingTime}</span>
              {currentContent.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Featured Content</h3>
            {content.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-300 mb-3 ${
                  index === currentSlide ? 'ring-2 ring-yellow-400 bg-white/20' : 'hover:bg-white/15'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm leading-tight">{item.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.readingTime}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{item.metrics.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>
=======
>>>>>>> origin/merge-all-fixes
            ))}
          </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;