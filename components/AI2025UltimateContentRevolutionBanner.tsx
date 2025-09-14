'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        readingTime: '18 min read'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with AI transformation. Complete guide to enterprise AI implementation.',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $280M Savings with 1,000% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        readingTime: '15 min read'
      },
      description: 'How a Fortune 500 manufacturing company achieved 1,000% ROI and $280M in annual savings through comprehensive AI transformation.',
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      metrics: {
        roi: '500%+',
        successRate: '94%',
        companies: '500+',
        readingTime: '25 min read'
      },
      description: 'Complete step-by-step guide to implementing AI in your enterprise. Proven framework that has delivered 500%+ ROI for 500+ companies.',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-content-banner-dismissed', 'true');
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2025 Ultimate Content Collection
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the proven frameworks and success stories that have delivered <span className="font-bold text-yellow-300">500%+ ROI</span> for 500+ companies
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">FEATURED CONTENT</span>
            </div>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">{currentContent.metrics.readingTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                  <div className="text-sm opacity-75">ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                  <div className="text-sm opacity-75">Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Success Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average ROI:</span>
                    <span className="font-bold text-yellow-300">500%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-bold text-green-300">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Companies Served:</span>
                    <span className="font-bold text-blue-300">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Savings:</span>
                    <span className="font-bold text-purple-300">$2.8M</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What You'll Learn</h4>
                <ul className="text-sm space-y-1">
                  <li>• Proven AI implementation frameworks</li>
                  <li>• Real-world success stories and case studies</li>
                  <li>• Step-by-step implementation guides</li>
                  <li>• ROI calculation and measurement tools</li>
                  <li>• Common pitfalls and how to avoid them</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                  {content.type.toUpperCase()}
                </span>
                <span className="text-xs opacity-75">{content.metrics.readingTime}</span>
              </div>
              
              <h4 className="font-semibold mb-2 text-sm leading-tight">
                {content.title}
              </h4>
              
              <div className="flex justify-between text-xs mb-3">
                <span>ROI: <span className="font-bold text-yellow-300">{content.metrics.roi}</span></span>
                <span>Savings: <span className="font-bold text-green-300">{content.metrics.savings}</span></span>
              </div>
              
              <Link
                href={content.url}
                className="text-yellow-300 hover:text-yellow-200 text-xs font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Resources
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all"
            >
              Get Free AI Assessment
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

export default AI2025UltimateContentRevolutionBanner;