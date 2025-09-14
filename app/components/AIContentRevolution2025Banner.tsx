'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIContentRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ai-content-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI',
      description: 'Transform your content strategy with AI-powered content intelligence. Achieve unprecedented ROI through automated content creation, optimization, and distribution.',
      type: 'Blog Post',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.9%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      image: '/images/ai-content-revolution-2025.jpg'
    },
    {
      id: 'fortune-500-content-revolution-success',
      title: 'Fortune 500 AI Content Revolution: $500B Annual Savings',
      description: 'How a global manufacturing leader achieved 25,000% ROI through AI-powered content intelligence, transforming their content operations.',
      type: 'Case Study',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '12 months',
        satisfaction: '99.9%'
      },
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      image: '/images/fortune-500-content-success.jpg'
    },
    {
      id: 'content-revolution-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: 25,000% ROI',
      description: 'Complete roadmap to implementing AI-powered content intelligence. Step-by-step guide from strategy to 25,000% ROI in 12 months.',
      type: 'Implementation Guide',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: '35 min read'
      },
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      image: '/images/content-implementation-guide.jpg'
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
    localStorage.setItem('ai-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem('ai-content-revolution-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20">
        <div className="absolute inset-0 bg-[url('/images/ai-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW: AI CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Ultimate Content Revolution is Here
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered content intelligence. Achieve unprecedented ROI through automated content creation, optimization, and distribution.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-200">LIVE NOW</span>
            </div>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentItem.type}
                </span>
                <span className="text-sm text-blue-200">Featured Content</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {currentItem.title}
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                {currentItem.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {currentItem.metrics.roi}
                  </div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {currentItem.metrics.savings}
                  </div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {currentItem.metrics.accuracy || currentItem.metrics.timeline}
                  </div>
                  <div className="text-sm text-blue-200">
                    {currentItem.metrics.accuracy ? 'Accuracy' : 'Timeline'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {currentItem.metrics.speed || currentItem.metrics.satisfaction || currentItem.metrics.success}
                  </div>
                  <div className="text-sm text-blue-200">
                    {currentItem.metrics.speed ? 'Speed' : currentItem.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full {currentItem.type}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Get Implementation Help
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-xl font-bold mb-4">AI Content Revolution Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Content Production</span>
                      <span className="font-bold text-green-400">+1,200%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Content Quality</span>
                      <span className="font-bold text-blue-400">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Time to Market</span>
                      <span className="font-bold text-purple-400">-85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200">Cost Savings</span>
                      <span className="font-bold text-yellow-400">$500B+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore AI Content Revolution
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            Join 500+ Fortune 500 companies achieving 25,000% ROI with AI Content Revolution
          </p>
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
  );
};

export default AIContentRevolution2025Banner;