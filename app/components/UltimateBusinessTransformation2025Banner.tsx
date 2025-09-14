'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025-2026: The Ultimate Business Transformation Revolution',
      subtitle: 'Complete Guide to 5,000% ROI',
      description: 'Transform your business with next-generation AI technologies. Achieve unprecedented ROI of 5,000% or higher with our proven framework.',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        efficiency: '2,400%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $18.5B Annual Savings',
      subtitle: '6,200% ROI Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved $18.5 billion in annual savings and 6,200% ROI in just 18 months.',
      metrics: {
        roi: '6,200%',
        savings: '$18.5B',
        timeline: '18 months',
        uptime: '99.97%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-2026-ultimate-success-story',
      type: 'case-study',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Framework 2025-2026',
      subtitle: 'Complete Roadmap to 6,200% ROI',
      description: 'The most comprehensive and proven methodology for achieving extraordinary ROI through strategic AI implementation.',
      metrics: {
        roi: '6,200%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      url: '/resources/ai-2025-2026-implementation-ultimate-framework-complete-roadmap',
      type: 'resource',
      readingTime: '45 min read',
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
    localStorage.setItem('ultimate-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-transformation-banner-dismissed');
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
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 ULTIMATE AI TRANSFORMATION 2025-2026</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Revolutionary AI Content Now Available
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the most comprehensive AI transformation guides, case studies, and frameworks that have delivered extraordinary results for Fortune 500 companies worldwide.
            </p>
          </div>

          {/* Main content showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content details */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {currentContent.readingTime}
                  </span>
                  {currentContent.featured && (
                    <span className="bg-gradient-to-r from-pink-500 to-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  )}
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

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-sm opacity-80 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 text-center"
                  >
                    Read Full {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                  >
                    Get Implementation Help
                  </Link>
                </div>
              </div>

              {/* Visual elements */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <h4 className="text-xl font-bold mb-4">AI Transformation Results</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Average ROI</span>
                        <span className="font-bold text-yellow-300">5,000%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Annual Savings</span>
                        <span className="font-bold text-green-300">$15.8B+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Efficiency Gain</span>
                        <span className="font-bold text-blue-300">2,400%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Success Rate</span>
                        <span className="font-bold text-purple-300">99.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content navigation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Additional content preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white/5 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-yellow-400' : 'hover:bg-white/10'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-xs opacity-70">{item.readingTime}</span>
                </div>
                <h4 className="font-semibold mb-2 line-clamp-2">{item.title}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{item.description}</p>
                <div className="mt-3 text-sm">
                  <span className="text-yellow-300 font-semibold">ROI: {item.metrics.roi}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dismiss button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Dismiss this banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformation2025Banner;