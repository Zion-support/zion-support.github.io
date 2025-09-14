'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [currentContentsetCurrentContent] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);
  const [dismissedsetDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissedBanner = localStorage.getItem('ultimate-content-showcase-banner-dismissed');
    if (dismissedBanner) {
      setDismissed(true);
      setIsVisible(false);
    }

    // Auto-rotate content every 6 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }6000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    localStorage.setItem('ultimate-content-showcase-banner-dismissed'true');
    setDismissed(true);
    setIsVisible(false);
  };

  const contentItems = [
    {
      id: 'synthetic-intelligence-revolution',
      title: 'Synthetic Intelligence Revolution',
      description: '2,500% ROI through AI systems that combine multiple technologies',
      metrics: '2,500% ROI • $8.2B+ Savings • 99.7% Accuracy',
      url: '/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      badge: 'Ultimate Breakthrough',
      category: 'AI Innovation'
    },
    {
      id: 'advanced-automation-mastery',
      title: 'Advanced Automation Mastery',
      description: '3,500% ROI through intelligent process orchestration',
      metrics: '3,500% ROI • $12.8B+ Savings • 99.8% Accuracy',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-breakthrough-2025',
      type: 'blog',
      badge: 'Ultimate Breakthrough',
      category: 'Automation'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Success Stories',
      description: 'Real results from enterprise AI transformations',
      metrics: '2,500% ROI • $8.2B Savings • 18 Months',
      url: '/case-studies/synthetic-intelligence-fortune-500-2500-roi-success-story',
      type: 'case-study',
      badge: 'Success Story',
      category: 'Case Study'
    },
    {
      id: 'implementation-guides',
      title: 'Implementation Guides',
      description: 'Complete roadmaps to achieve breakthrough ROI',
      metrics: '94% Success Rate • 1,000+ Deployments • Proven Results',
      url: '/resources/synthetic-intelligence-implementation-ultimate-guide-2025',
      type: 'resource',
      badge: 'Implementation Guide',
      category: 'Resources'
    }
  ];

  if (dismissed || !isVisible) {
    return null;
  }

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/20"></div>
        <div className="absolute top-12 left-12 w-28 h-28 bg-violet-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-24 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-36 w-20 h-20 bg-fuchsia-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-20 right-40 w-16 h-16 bg-violet-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-full text-sm font-semibold">
                {currentItem.badge}
              </div>
              <div className="bg-violet-500/20 px-2 py-1 rounded text-xs font-medium">
                {currentItem.category}
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded text-xs font-medium">
                FEATURED
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentItem.title}
            </h2>

            <p className="text-lg text-violet-100 mb-4 max-w-2xl">
              {currentItem.description}
            </p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-300">
                  {currentItem.metrics}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href={currentItem.url}
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {currentItem.type === 'blog' ? 'Read Article' : currentItem.type === 'case-study' ? 'Read Case Study' : 'Read Guide'}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-violet-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="hidden md:flex flex-col items-center space-y-2 ml-8">
            {contentItems.map((_index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentContent
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-400 to-fuchsia-400 h-full rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;