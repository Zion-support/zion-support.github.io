import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-transformation-guide',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide',
      description: 'Complete guide to achieving 500% ROI in 12 months through strategic AI implementation',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-transformation-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: 1,000% ROI Success Story',
      description: 'How a $2.8B company achieved unprecedented 1,000% ROI in just 18 months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-success',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      readingTime: '15 min read',
      isNew: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      description: 'Step-by-step framework for implementing AI solutions that deliver 500%+ ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      metrics: {
        successRate: '94%',
        averageRoi: '340%',
        projects: '500+',
        implementationTime: '18 months'
      },
      readingTime: '25 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-content-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE AI CONTENT COLLECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI: 500%+ ROI Guaranteed
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the proven strategies and frameworks that Fortune 500 companies use to achieve unprecedented AI transformation success
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Content</h3>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-sm opacity-75">
                  {currentContent.readingTime}
                </span>
              </div>

              <h4 className="text-2xl font-bold leading-tight">
                {currentContent.title}
              </h4>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {value}
                  </div>
                  <div className="text-sm opacity-75 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sm opacity-75">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">340%</div>
            <div className="text-sm opacity-75">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$2.8B</div>
            <div className="text-sm opacity-75">Total Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-sm opacity-75">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
            <Link
              href="/resources"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Download Resources
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors"
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

export default AI2025UltimateContentShowcaseBanner;