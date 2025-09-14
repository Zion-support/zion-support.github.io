'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '94%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with advanced AI automation. Complete implementation guide with real success stories and proven strategies.',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'AI Automation Success Story: Fortune 500 Company Achieves 1,500% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-automation-fortune-500-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        automation: '95%',
        quality: '99.2%'
      },
      description: 'Discover how a Fortune 500 manufacturing company transformed their operations with AI automation, achieving $2.8B in annual savings and 1,500% ROI in just 12 months.',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Guide to 1,500%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,500%+',
        success: '94%',
        speed: '67% faster',
        projects: '500+'
      },
      description: 'The definitive framework for AI implementation success. Proven strategies, methodologies, and best practices that have delivered 1,500%+ ROI for Fortune 500 companies.',
      featured: true
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-bold">🚀 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, success stories, and implementation frameworks that are delivering unprecedented results for Fortune 500 companies worldwide
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                {currentContent.type}
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                FEATURED
              </span>
            </div>
            <div className="flex space-x-2">
              {contentPieces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                {currentContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-white to-gray-100 text-purple-900 px-8 py-4 rounded-lg font-bold hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {currentContent.type}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-blue-200 capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contentPieces.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-white/50 bg-white/10' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {content.type}
                </span>
                {content.featured && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                )}
              </div>
              <h4 className="font-bold mb-3 text-sm leading-tight">
                {content.title}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold text-sm">
                    {content.metrics.roi} ROI
                  </span>
                  <span className="text-blue-200 text-xs">
                    {content.metrics.savings} savings
                  </span>
                </div>
                <div className="text-xs text-blue-200">
                  {content.description.substring(0, 80)}...
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join hundreds of Fortune 500 companies that have already achieved 1,500%+ ROI with our proven AI implementation strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
              </Link>
              <Link
                href="/resources"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-bold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;