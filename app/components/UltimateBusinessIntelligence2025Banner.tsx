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
        guide: '60 min read'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
              🚀 NEW BREAKTHROUGH
            </div>
            <div className="text-2xl font-bold text-white">
              Ultimate Business Intelligence 2025
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content Carousel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                    {currentContent.type}
                  </span>
                  <span className="text-gray-300 text-sm">{currentContent.readingTime}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span>Read Full Article</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  <span>Get Expert Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center space-y-6">
                  <div className="text-6xl">📊</div>
                  <h3 className="text-2xl font-bold text-white">AI-Powered Analytics</h3>
                  <p className="text-gray-300">
                    Real-time insights, predictive analytics, and autonomous decision-making capabilities
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">30,000%</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">99.99%</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '$2.5B+', label: 'Value Delivered', icon: '💎' },
            { value: '99.99%', label: 'System Reliability', icon: '⚡' },
            { value: '30,000%', label: 'Average ROI', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;