import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BannerContent {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    timeframe?: string;
  };
  description: string;
  featured: boolean;
}

const RevolutionaryContent2025Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const bannerContent: BannerContent[] = [
    {
      id: 'ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Breakthrough - 1,500% ROI in 12 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$4.2M',
        timeframe: '12 months'
      },
      description: 'Discover the revolutionary AI implementation framework that\'s transforming how enterprises operate, compete, and scale in the digital age.',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-1500-roi-ultimate-success',
      title: 'Fortune 500 AI Transformation: $8.2B Company Achieves 1,500% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success',
      metrics: {
        roi: '1,500%',
        savings: '$4.2M',
        timeframe: '12 months'
      },
      description: 'Learn how a Fortune 500 manufacturing conglomerate achieved unprecedented ROI through comprehensive AI transformation.',
      featured: true
    },
    {
      id: 'ai-2025-autonomous-enterprise-systems-revolution-ultimate-guide',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution - Ultimate Guide to 2,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution-ultimate-guide',
      metrics: {
        roi: '2,000%',
        savings: '$8.7M',
        timeframe: '18 months'
      },
      description: 'Explore the revolutionary framework for building autonomous enterprise systems that operate independently and continuously optimize performance.',
      featured: true
    }
  ];

  // Auto-rotate content every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bannerContent.length]);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isDismissed) {
    return null;
  }

  const currentContent = bannerContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1 mr-4">
                <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">{getTypeIcon(currentContent.type)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                  {currentContent.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
              {currentContent.title}
            </h3>

            <p className="text-sm md:text-base opacity-90 mb-4 line-clamp-2">
              {currentContent.description}
            </p>

            <div className="flex items-center space-x-6 mb-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{currentContent.metrics.roi}</div>
                <div className="text-xs opacity-80">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{currentContent.metrics.savings}</div>
                <div className="text-xs opacity-80">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{currentContent.metrics.timeframe}</div>
                <div className="text-xs opacity-80">Timeframe</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Now →
              </Link>
              <Link
                href="/content"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="hidden md:flex flex-col items-center ml-8">
            <div className="flex flex-col space-y-2 mb-4">
              {bannerContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white opacity-50'
                  }`}
                />
              ))}
            </div>
            <div className="text-xs opacity-80 text-center">
              {currentIndex + 1} of {bannerContent.length}
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryContent2025Banner;