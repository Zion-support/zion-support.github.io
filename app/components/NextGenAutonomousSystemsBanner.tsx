import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NextGenAutonomousSystemsBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'autonomous-systems-guide',
      type: 'blog',
      title: 'AI 2025: Next-Generation Autonomous Systems - Ultimate Guide',
      description: 'Complete guide to enterprise autonomous systems transformation with 1,200% ROI and $2.8B savings',
      url: '/blog/ai-2025-next-generation-autonomous-systems-ultimate-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '400%'
      },
      readingTime: '25 min read',
      badge: 'NEW'
    },
    {
      id: 'fortune-100-case-study',
      type: 'case-study',
      title: 'Fortune 100 Autonomous Systems: $5.2B Company Achieves 1,500% ROI',
      description: 'Real-world success story of autonomous systems transformation delivering unprecedented results',
      url: '/case-studies/fortune-100-autonomous-systems-transformation-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '94%'
      },
      readingTime: '18 min read',
      badge: 'FEATURED'
    },
    {
      id: 'implementation-roadmap',
      type: 'resource',
      title: 'AI Autonomous Systems Implementation Roadmap 2025',
      description: 'Step-by-step roadmap to achieve 1,500% ROI through strategic autonomous systems deployment',
      url: '/resources/ai-autonomous-systems-implementation-roadmap-2025',
      metrics: {
        roi: '1,500%',
        timeline: '24 months',
        success: '95%',
        coverage: '100%'
      },
      readingTime: '30 min read',
      badge: 'GUIDE'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('nextgen-autonomous-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('nextgen-autonomous-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-semibold">🚀 NEXT-GEN AUTONOMOUS SYSTEMS</span>
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {currentContent.badge}
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Transform Your Business with Next-Generation Autonomous Systems
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Discover how Fortune 500 companies are achieving <span className="font-bold text-yellow-300">1,500% ROI</span> and 
                <span className="font-bold text-yellow-300"> $2.8B in annual savings</span> through strategic autonomous systems implementation.
              </p>
            </div>

            {/* Featured Content Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {currentContent.badge}
                  </span>
                </div>
                <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-300">{value}</div>
                    <div className="text-xs text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Read {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white bg-opacity-40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-yellow-300 mb-2">1,500%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
                <div className="text-xs text-blue-300 mt-1">Within 24 months</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-green-300 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
                <div className="text-xs text-blue-300 mt-1">Fortune 500 average</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-blue-300 mb-2">99.9%</div>
                <div className="text-sm text-blue-200">System Uptime</div>
                <div className="text-xs text-blue-300 mt-1">Continuous operation</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
                <div className="text-4xl font-bold text-purple-300 mb-2">400%</div>
                <div className="text-sm text-blue-200">Efficiency Gain</div>
                <div className="text-xs text-blue-300 mt-1">Productivity improvement</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="text-green-100 mb-4 text-sm">
                Join Fortune 500 companies achieving unprecedented ROI through autonomous systems
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link
                  href="/services/autonomous-systems"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </div>
  );
};

export default NextGenAutonomousSystemsBanner;