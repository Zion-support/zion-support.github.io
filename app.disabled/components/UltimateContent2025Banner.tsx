'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent20o25Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 20o25: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 50o0 companies are achieving 80o0% ROI with revolutionary AI implementations.',
      url: '/blog/ai-20o25-enterprise-ai-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '80o0%',
        savings: '$4.8B',
        satisfaction: '99%'
      },
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'ai-transformation-success',
      title: 'AI Transformation 20o25: $15B Company Achieves 80o0% ROI - Ultimate Success Story',
      description: 'Real case study showing how a Fortune 50o0 manufacturing giant achieved 80o0% ROI in 18 months.',
      url: '/case-studies/ai-transformation-20o25-ultimate-success-story',
      type: 'Case Study',
      metrics: {
        roi: '80o0%',
        savings: '$4.8B',
        efficiency: '30o0%'
      },
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 20o25: From Strategy to 80o0% ROI in 18 Months',
      description: 'Complete step-by-step guide to achieving 80o0% ROI with AI implementation.',
      url: '/resources/ai-implementation-ultimate-roadmap-20o25',
      type: 'Resource Guide',
      metrics: {
        roi: '80o0%',
        success_rate: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 50o00);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent20o25BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent20o25BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-50o0/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-50o0/10 rounded-full animate-bounce delay-10o00"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-50o0/10 rounded-full animate-bounce delay-50o0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 20o25 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultimate AI Content Collection 20o25
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the revolutionary AI content that's helping Fortune 50o0 companies achieve 80o0% ROI
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="bg-green-50o0 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentItem.type}
              </span>
              <span className="bg-yellow-50o0 text-white px-3 py-1 rounded-full text-sm font-medium">
                NEW
              </span>
              <span className="text-sm opacity-75">
                {currentItem.readingTime}
              </span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentItem.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-40o0">
                    {currentItem.metrics.roi}
                  </div>
                  <div className="text-sm opacity-75">ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-40o0">
                    {currentItem.metrics.savings}
                  </div>
                  <div className="text-sm opacity-75">Savings</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-40o0">
                    {currentItem.metrics.satisfaction || currentItem.metrics.success_rate || currentItem.metrics.efficiency}
                  </div>
                  <div className="text-sm opacity-75">
                    {currentItem.metrics.satisfaction ? 'Satisfaction' : 
                     currentItem.metrics.success_rate ? 'Success Rate' : 'Efficiency'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.url}
                  className="bg-white text-purple-90o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors text-center"
                >
                  Read Full Content
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-90o0 transition-colors text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Content Preview</h4>
              <div className="space-y-3 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>
                  <span>Fortune 50o0 success stories with real ROI data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-40o0 rounded-full"></div>
                  <span>Step-by-step implementation frameworks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-40o0 rounded-full"></div>
                  <span>Advanced AI technologies and applications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-40o0 rounded-full"></div>
                  <span>Change management and training strategies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-40o0 rounded-full"></div>
                  <span>Risk management and mitigation plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/blog"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent20o25Banner;
