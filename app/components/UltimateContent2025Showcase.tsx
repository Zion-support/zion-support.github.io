'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $500M+ savings, and 99.8% efficiency with our proven framework.',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success_rate: '98%'
      },
      reading_time: '35 min read',
      featured: true,
      is_new: true
    },
    {
      id: 'fortune-500-ai-success-2025',
      title: 'Fortune 500 AI Success 2025: $2.8B Annual Savings',
      type: 'case-study',
      description: 'How a Fortune 500 manufacturing company achieved $2.8B annual savings and 1,500% ROI through comprehensive AI transformation in just 8 months.',
      url: '/case-studies/fortune-500-ai-success-2025',
      metrics: {
        annual_savings: '$2.8B',
        roi: '1,500%',
        implementation_time: '8 months',
        efficiency_gains: '89%'
      },
      reading_time: '20 min read',
      featured: true,
      is_new: true
    },
    {
      id: 'ai-roi-guide-2025',
      title: 'AI ROI Guide 2025: Achieve 1,200% ROI',
      type: 'resource',
      description: 'Complete guide to achieving 1,200% ROI with AI implementation in 2025. Proven framework for enterprise success.',
      url: '/resources/ai-roi-guide-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%'
      },
      reading_time: '15 min read',
      featured: true,
      is_new: true
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
    localStorage.setItem('ultimate-content-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ultimate AI Success Content 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the latest AI transformation strategies, success stories, and implementation guides that are delivering extraordinary results for enterprises worldwide.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.reading_time}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-75 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 text-center"
                >
                  Read Full Content
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-3xl font-bold mb-2">AI 2025</div>
                <div className="text-lg opacity-90 mb-4">Ultimate Success</div>
                <div className="text-4xl font-bold text-yellow-400">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-75">ROI Achieved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-opacity-20 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {content.type.toUpperCase()}
                </span>
              </div>
              
              <h4 className="font-bold mb-2 line-clamp-2">
                {content.title}
              </h4>
              
              <div className="text-sm opacity-75 mb-3">
                {content.reading_time}
              </div>
              
              <div className="text-lg font-bold text-yellow-400">
                {content.metrics.roi} ROI
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join 500+ enterprises that have already transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-blue-500 transition-all duration-300"
              >
                Start Your Transformation
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
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-300"
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

export default UltimateContent2025Showcase;