import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025DataRevolutionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 'data-revolution-guide',
      title: 'AI 2025: The Enterprise Data Revolution',
      description: 'Complete guide to achieving 500% ROI with AI-powered data transformation',
      type: 'Blog Post',
      readingTime: '18 min read',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Data Transformation Success',
      description: 'How a global manufacturing giant achieved 500% ROI in 8 months',
      type: 'Case Study',
      readingTime: '12 min read',
      metrics: {
        roi: '500%',
        savings: '$45M',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      url: '/case-studies/fortune-500-data-transformation-500-roi-success',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Data Transformation Implementation Guide',
      description: 'Step-by-step guide from strategy to 500% ROI',
      type: 'Resource',
      readingTime: '25 min read',
      metrics: {
        success: '98%',
        roi: '500%',
        projects: '500+',
        timeline: '12 months'
      },
      url: '/resources/ai-data-transformation-implementation-guide-2025',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }5000);

    return () => clearInterval(interval);
  }[contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('data-revolution-banner-'dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('data-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
                  <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
                </div>
                <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
                  <span className="text-sm font-medium">500% ROI GUARANTEED</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                AI 2025: The Enterprise Data Revolution
              </h2>

              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                Discover how Fortune 500 companies are achieving 500% ROI with AI-powered data transformation. 
                Complete implementation guide with real-world case studies and proven methodologies.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-300">500%</div>
                  <div className="text-sm opacity-80">Average ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-300">$2.8B</div>
                  <div className="text-sm opacity-80">Annual Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-300">99.7%</div>
                  <div className="text-sm opacity-80">Data Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-300">1,200%</div>
                  <div className="text-sm opacity-80">Speed Increase</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-enterprise-data-revolution-ultimate-guide"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read Complete Guide
                </Link>
                <Link
                  href="/case-studies/fortune-500-data-transformation-500-roi-success"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  View Success Stories
                </Link>
                <Link
                  href="/resources/ai-data-transformation-implementation-guide-2025"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Download Implementation Guide
                </Link>
              </div>
            </div>

            {/* Content Preview Cards */}
            <div className="hidden lg:block w-80">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Featured Content</h3>
                
                <div className="space-y-4">
                  {contentItems.map((itemindex) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                        index === currentSlide
                          ? 'bg-white/20 border-2 border-white/30'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-200">{item.type}</span>
                        <span className="text-xs opacity-70">{item.readingTime}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h4>
                      <p className="text-xs opacity-80 line-clamp-2">{item.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                          {item.metrics.roi} ROI
                        </span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {item.metrics.savings}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {contentItems.map((_index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
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

export default NewContent2025DataRevolutionBanner;