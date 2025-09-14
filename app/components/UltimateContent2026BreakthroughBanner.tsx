'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2026BreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'neural-architectures-2026',
      title: 'AI 2026: Advanced Neural Architectures Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 5,000% ROI',
      description: 'Transform your enterprise with next-generation neural architectures delivering unprecedented performance and intelligence.',
      metrics: {
        roi: '5,000%',
        savings: '$18.2B+',
        efficiency: '2,400%',
        accuracy: '99.98%'
      },
      url: '/blog/ai-2026-advanced-neural-architectures-revolution-ultimate-breakthrough',
      type: 'blog',
      isNew: true,
      featured: true
    },
    {
      id: 'neural-architecture-case-study',
      title: 'Fortune 500 Neural Architecture Success',
      subtitle: '$18.2B Annual Savings - 5,000% ROI',
      description: 'How a global manufacturing leader achieved unprecedented success with advanced neural architectures.',
      metrics: {
        roi: '5,000%',
        savings: '$18.2B',
        efficiency: '2,400%',
        timeline: '18 months'
      },
      url: '/case-studies/fortune-500-neural-architecture-transformation-5000-roi-success-story',
      type: 'case-study',
      isNew: true,
      featured: true
    },
    {
      id: 'quantum-machine-learning-2026',
      title: 'AI 2026: Quantum Machine Learning Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 6,500% ROI',
      description: 'Harness the power of quantum computing and machine learning for unprecedented business transformation.',
      metrics: {
        roi: '6,500%',
        savings: '$25.8B+',
        speed: '1,000,000x',
        accuracy: '99.99%'
      },
      url: '/blog/ai-2026-quantum-machine-learning-revolution-ultimate-breakthrough',
      type: 'blog',
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2026BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2026BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW 2026 BREAKTHROUGH CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ultimate AI 2026 Content Showcase
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the latest breakthrough technologies delivering unprecedented ROI and transforming enterprise operations
            </p>
          </div>

          {/* Featured Content Carousel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg font-semibold text-yellow-300 mb-4">
                  {currentContent.subtitle}
                </p>
                
                <p className="text-lg opacity-90 mb-6">
                  {currentContent.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-sm opacity-80 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-center"
                  >
                    Read Full Guide
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Preview */}
              <div className="relative">
                <div className="bg-white/20 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🧠</div>
                    <h4 className="text-xl font-bold">Advanced Neural Architectures</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">ROI Potential</span>
                      <span className="font-bold text-yellow-300">5,000%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">Annual Savings</span>
                      <span className="font-bold text-green-300">$18.2B+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">Efficiency Gain</span>
                      <span className="font-bold text-blue-300">2,400%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-80">Accuracy</span>
                      <span className="font-bold text-purple-300">99.98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Additional Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredContent.map((content, index) => (
              <div
                key={content.id}
                className={`bg-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                  index === currentSlide ? 'ring-2 ring-yellow-400' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    NEW
                  </span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {content.type.toUpperCase()}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-2 line-clamp-2">
                  {content.title}
                </h4>
                
                <p className="text-sm opacity-80 mb-3 line-clamp-2">
                  {content.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300 font-bold">
                    {content.metrics.roi} ROI
                  </span>
                  <span className="text-green-300 font-bold">
                    {content.metrics.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join Fortune 500 companies achieving unprecedented success with our AI 2026 breakthrough technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
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
    </div>
  );
};

export default UltimateContent2026BreakthroughBanner;