<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
"use client";
import React{ useStateuseEffect } from 'react';
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
import Link from 'next/link';

const EdgeAI2025RevolutionBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const edgeAIContent = [
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution',
      description: 'Achieve 450% ROI with edge AI solutions that deliver real-time processing and massive cost savings.',
      url: '/blog/ai-2025-edge-computing-revolution-enterprise-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '450%',
        savings: '$180M',
        uptime: '99.7%',
        speed: '94% faster'
      },
      image: '🚀',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'fortune-500-edge-ai',
      title: 'Fortune 500 Edge AI Transformation: 450% ROI',
      description: 'How a Fortune 500 manufacturer achieved $2.1B annual savings with edge AI across 47 facilities.',
      url: '/case-studies/fortune-500-edge-ai-transformation-450-percent-roi',
      type: 'Case Study',
      metrics: {
        roi: '450%',
        savings: '$2.1B',
        efficiency: '78%',
        quality: '92%'
      },
      image: '🏭',
      gradient: 'from-green-600 to-blue-600'
    },
    {
      id: 'edge-ai-implementation-guide',
      title: 'Edge AI Implementation Guide: From Strategy to 450% ROI',
      description: 'Complete roadmap for implementing edge AI solutions with proven ROI and success metrics.',
      url: '/resources/ai-2025-edge-computing-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '450%',
        timeline: '24 months',
        success: '98%',
        savings: '$180M'
      },
      image: '📋',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % edgeAIContent.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(', 'edgeAI2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('edgeAI2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = edgeAIContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW: Edge AI Revolution 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Enterprise with Edge AI
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Achieve <span className="font-bold text-yellow-400">450% ROI</span> and{' '}
              <span className="font-bold text-yellow-400">$180M annual savings</span> with cutting-edge edge computing solutions
            </p>
          </div>

          {/* Content Showcase */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{currentContent.image}</span>
                  <div>
                    <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {currentContent.type}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{currentContent.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-200 mb-6">{currentContent.description}</p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      {currentContent.metrics.uptime || currentContent.metrics.efficiency || currentContent.metrics.timeline}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.uptime ? 'Uptime' : 
                       currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {currentContent.metrics.speed || currentContent.metrics.quality || currentContent.metrics.success}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.speed ? 'Faster' : 
                       currentContent.metrics.quality ? 'Quality' : 'Success Rate'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Story →
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Content Preview Cards */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Featured Edge AI Content:</h4>
                {edgeAIContent.map((contentindex) => (
                  <div
                    key={content.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white/20 border-2 border-blue-400'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{content.image}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                            {content.type}
                          </span>
                          {index === currentSlide && (
                            <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                              Currently Viewing
                            </span>
                          )}
                        </div>
                        <h5 className="font-semibold text-sm">{content.title}</h5>
                        <p className="text-xs text-gray-300 mt-1 line-clamp-2">{content.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {edgeAIContent.map((_index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4">
              <Link
                href="/blog"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
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

export default EdgeAI2025RevolutionBanner;