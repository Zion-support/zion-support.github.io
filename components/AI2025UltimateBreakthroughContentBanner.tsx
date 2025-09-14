'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughContentBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      roi: '800%',
      savings: '$2.8B',
      description: 'Discover how Fortune 500 companies are achieving 800% ROI through AI-powered enterprise automation.',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      readingTime: '18 min read',
      tags: ['AI'Enterprise Automation'ROI'Fortune 500']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      roi: '567%',
      savings: '$2.8B',
      description: 'How a global manufacturing leader achieved 567% ROI through comprehensive AI automation.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '12 min read',
      tags: ['Case Study'Fortune 500'AI Transformation'ROI']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'Resource',
      roi: '800%',
      savings: '$173.7M',
      description: 'Complete step-by-step guide to implementing AI automation in your enterprise.',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      readingTime: '20 min read',
      tags: ['Implementation Guide'AI Strategy'ROI'Roadmap']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }5000);

    return () => clearInterval(timer);
  }[contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold">🚀 AI 2025 Ultimate Breakthrough Content</h2>
              <p className="text-blue-200 text-sm">New high-value content with proven 800% ROI results</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content showcase */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type}
                </span>
                <div className="flex items-center space-x-2 text-sm text-blue-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{currentContent.readingTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {currentContent.tags.map((tagindex) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.roi}</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{currentContent.savings}</div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2">
              {contentPieces.map((_index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success metrics */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Proven Results</h3>
              <p className="text-blue-200">Based on 500+ successful implementations</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">800%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Max Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
                <div className="text-sm text-blue-200">Months to ROI</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/resources/ai-implementation-ultimate-roadmap-2025"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughContentBanner;