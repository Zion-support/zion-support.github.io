'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Discover how AI-powered cybersecurity solutions are protecting enterprises with 95% threat reduction and $2.3M average savings.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      type: 'Blog Post',
      metrics: {
        threat_reduction: '95%',
        cost_savings: '$2.3M',
        response_time: '67% faster'
      },
      badge: 'NEW',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 400% ROI Success',
      description: 'How a regional hospital system achieved 400% ROI, reduced wait times by 60%, and saved $12.3M annually.',
      url: '/case-studies/healthcare-ai-transformation-2025',
      type: 'Case Study',
      metrics: {
        roi: '400%',
        cost_savings: '$12.3M',
        wait_time: '60% reduction'
      },
      badge: 'FEATURED',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Roadmap 2025',
      description: 'Complete guide to enterprise AI success with proven strategies, 300%+ ROI, and 94% success rate.',
      url: '/resources/ai-implementation-roadmap-2025',
      type: 'Implementation Guide',
      metrics: {
        success_rate: '94%',
        average_roi: '300%+',
        implementation: '67% faster'
      },
      badge: 'GUIDE',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-showcase-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-showcase-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-bounce delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2">
              <span className="font-bold text-sm">🚀 NEW CONTENT ALERT</span>
              <span className="text-sm">•</span>
              <span className="text-sm font-semibold">Revolutionary AI Insights for 2025</span>
              <span className="text-sm">•</span>
              <span className="text-sm font-semibold">Proven ROI Strategies</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Our Latest AI Content
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Cutting-edge insights, real-world case studies, and proven implementation strategies
              </p>
            </div>

            {/* Content Carousel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentItem.color} text-white`}>
                      {currentItem.badge}
                    </span>
                    <span className="text-sm text-blue-200">{currentItem.type}</span>
                  </div>
                  <button
                    onClick={handleDismiss}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {currentItem.title}
                    </h3>
                    <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                      {currentItem.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(currentItem.metrics).map(([key, value], index) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{value}</div>
                          <div className="text-sm text-blue-200 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={currentItem.url}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="relative">
                    {/* Slide Indicators */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {contentItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? 'bg-yellow-400 scale-125' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Content Preview */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <h4 className="text-lg font-semibold mb-2">AI-Powered Solutions</h4>
                        <p className="text-sm text-blue-200">
                          Transform your business with cutting-edge AI technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {contentItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-blue-200">{item.type}</span>
                  </div>
                  
                  <h4 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-blue-200 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-blue-300">
                      {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                        <span key={key} className="mr-3">
                          <span className="font-bold text-yellow-400">{value}</span> {key.replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                    <svg className="w-4 h-4 text-blue-300 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <p className="text-blue-200 mb-4">
                Ready to transform your business with AI?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;