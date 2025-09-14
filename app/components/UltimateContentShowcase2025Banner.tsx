'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Guide to 500% ROI',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with AI transformation. Complete guide to enterprise AI implementation.',
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      description: 'How a Fortune 500 manufacturing company achieved 567% ROI with comprehensive AI transformation across all business functions.',
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI - Complete Edition',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      description: 'The most comprehensive AI implementation guide available. Step-by-step framework to achieve 500% ROI with AI transformation.',
      readingTime: '35 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest AI implementation guides, case studies, and resources designed to help you achieve 500% ROI
          </p>
        </div>

        {/* Main content showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Content preview */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-75">ROI</div>
                  <div className="text-xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-75">Savings</div>
                  <div className="text-xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-75">Success Rate</div>
                  <div className="text-xl font-bold text-purple-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full {currentContent.type}
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Content carousel */}
            <div className="lg:w-80">
              <div className="space-y-4">
                {contentPieces.map((content, index) => (
                  <div
                    key={content.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      index === currentSlide
                        ? 'bg-white/20 border-2 border-white'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        NEW
                      </span>
                      <span className="text-xs opacity-75">{content.type}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                      {content.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs opacity-75">
                      <span>ROI: {content.metrics.roi}</span>
                      <span>•</span>
                      <span>{content.readingTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Get AI Implementation Consultation
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white/75 hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;