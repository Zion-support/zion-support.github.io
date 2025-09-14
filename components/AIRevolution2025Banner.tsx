'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AIRevolution2025Banner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-revolution-breakthrough',
      title: 'AI 2025-2026: The Ultimate AI Revolution Breakthrough',
      description: 'Discover the revolutionary AI breakthroughs achieving 10,000% ROI',
      metrics: '10,000% ROI • $50B+ Savings • 3,000% Efficiency',
      url: '/blog/ai-2025-2026-ultimate-ai-revolution-breakthrough-ultimate-guide',
      type: 'blog',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Revolution Success Story',
      description: 'How a Fortune 500 company achieved $50B annual savings',
      metrics: '10,000% ROI • $50B Savings • 18 Months',
      url: '/case-studies/fortune-500-ai-revolution-10000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Revolution Implementation Ultimate Guide',
      description: 'Complete roadmap to 10,000% ROI with proven strategies',
      metrics: '99.7% Success Rate • 1,000+ Projects • 18 Months',
      url: '/resources/ai-revolution-implementation-ultimate-guide-2025-2026',
      type: 'resource',
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }5000);

    return () => clearInterval(timer);
  }[featuredContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-revolution-banner-dismissed'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                🚀 NEW AI REVOLUTION 2025-2026
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                ULTIMATE BREAKTHROUGH
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl">
                {currentContent.description}
              </p>
              
              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold">
                  {currentContent.metrics}
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold">
                  {currentContent.readingTime}
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold">
                  {currentContent.type.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
              </Link>
              <Link
                href="/resources/ai-revolution-implementation-ultimate-guide-2025-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          {/* Content Preview Card */}
          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2">AI Revolution 2025-2026</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    10,000% ROI
                  </div>
                  <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    $50B+ Savings
                  </div>
                  <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    3,000% Efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {featuredContent.map((_index) => (
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

export default AIRevolution2025Banner;