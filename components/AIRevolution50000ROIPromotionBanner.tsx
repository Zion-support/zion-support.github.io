import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIRevolution50000ROIPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'revolutionary-breakthrough-guide',
      title: 'AI 2025: The Revolutionary Breakthrough Ultimate Guide',
      subtitle: '50,000% ROI Through Next-Generation Intelligence',
      type: 'Blog Post',
      url: '/blog/ai-2025-revolutionary-breakthrough-ultimate-guide',
      metrics: {
        roi: '50,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      readingTime: '45 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Revolution Success Story',
      subtitle: '$500B Annual Savings - 50,000% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-revolution-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$500B',
        timeline: '18 months',
        efficiency: '5,000%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'revolutionary-implementation-guide',
      title: 'Revolutionary AI Implementation Guide',
      subtitle: 'Complete Roadmap to 50,000% ROI',
      type: 'Resource',
      url: '/resources/revolutionary-ai-implementation-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      readingTime: '60 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('ai-revolution-50000-roi-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-revolution-50000-roi-banner-dismissed', 'true');
  };

  const currentContent = featuredContent[currentContentIndex];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress indicator */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2">
            {featuredContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentContentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="text-center">
          {/* New badge */}
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW REVOLUTIONARY BREAKTHROUGH
          </div>

          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            AI 2025 Revolutionary Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl mb-6 text-blue-200">
            The Most Successful AI Transformation in Corporate History
          </p>

          {/* Featured content card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Content info */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {currentContent.type}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg text-blue-200 mb-4">
                  {currentContent.subtitle}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-sm text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">
                      {currentContent.metrics.savings}
                    </div>
                    <div className="text-sm text-blue-200">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-400">
                      {currentContent.metrics.accuracy || currentContent.metrics.timeline}
                    </div>
                    <div className="text-sm text-blue-200">
                      {currentContent.metrics.accuracy ? 'Accuracy' : 'Timeline'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">
                      {currentContent.metrics.efficiency || currentContent.metrics.success}
                    </div>
                    <div className="text-sm text-blue-200">
                      {currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Read {currentContent.readingTime}
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Visual element */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
                  🚀
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-lg text-blue-200 mb-4">
              Join Fortune 500 companies achieving <span className="text-yellow-400 font-bold">50,000% ROI</span> through revolutionary AI transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Explore AI Services
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
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

export default AIRevolution50000ROIPromotionBanner;