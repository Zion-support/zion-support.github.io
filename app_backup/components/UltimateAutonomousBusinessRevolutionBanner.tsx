import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    efficiency?: string;
  };
  readingTime?: string;
}

const UltimateAutonomousBusinessRevolutionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-autonomous-business-revolution',
      title: 'AI 2025: The Ultimate Autonomous Business Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-autonomous-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '30,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-autonomous-business-success',
      title: 'Fortune 500 Autonomous Business Success: $2.8B Annual Savings - 30,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-business-30000-roi-success-story',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B',
        accuracy: '99.99%',
        efficiency: '450%'
      },
      readingTime: '25 min read'
    },
    {
      id: 'autonomous-business-implementation-guide',
      title: 'Autonomous Business Implementation Ultimate Guide 2025: Complete Roadmap to 30,000% ROI',
      type: 'resource',
      url: '/resources/autonomous-business-implementation-ultimate-guide-2025',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B+',
        accuracy: '99.99%',
        efficiency: '450%'
      },
      readingTime: '60 min read'
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('ultimate-autonomous-business-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-autonomous-business-banner-dismissed', 'true');
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
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-indigo-400/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ULTIMATE AUTONOMOUS BUSINESS REVOLUTION
              </h2>
              <p className="text-blue-200 text-sm">Revolutionary AI Content - 30,000% ROI Achieved</p>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`${getTypeColor(currentItem.type)} p-2 rounded-lg`}>
                    <span className="text-white text-lg">{getTypeIcon(currentItem.type)}</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">
                      {currentItem.type.replace('-', ' ')}
                    </span>
                    {currentItem.readingTime && (
                      <span className="text-blue-200 text-sm ml-2">• {currentItem.readingTime}</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-1">
                  {contentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {currentItem.metrics.roi && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{currentItem.metrics.roi}</div>
                    <div className="text-xs opacity-90">ROI</div>
                  </div>
                )}
                {currentItem.metrics.savings && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{currentItem.metrics.savings}</div>
                    <div className="text-xs opacity-90">Savings</div>
                  </div>
                )}
                {currentItem.metrics.accuracy && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{currentItem.metrics.accuracy}</div>
                    <div className="text-xs opacity-90">Accuracy</div>
                  </div>
                )}
                {currentItem.metrics.efficiency && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{currentItem.metrics.efficiency}</div>
                    <div className="text-xs opacity-90">Efficiency</div>
                  </div>
                )}
              </div>

              <Link
                href={currentItem.url}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Read Full {currentItem.type === 'case-study' ? 'Case Study' : currentItem.type === 'resource' ? 'Guide' : 'Article'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Additional Content Grid */}
          <div className="space-y-4">
            {contentItems.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 cursor-pointer transition-all hover:bg-white/20 ${
                  currentIndex === index ? 'ring-2 ring-yellow-400' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`${getTypeColor(item.type)} p-1.5 rounded-lg`}>
                    <span className="text-white text-sm">{getTypeIcon(item.type)}</span>
                  </div>
                  <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">
                    {item.type.replace('-', ' ')}
                  </span>
                </div>
                <h4 className="text-sm font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">
                    {item.metrics.roi} ROI
                  </div>
                  <Link
                    href={item.url}
                    className="text-yellow-400 hover:text-yellow-300 text-xs font-semibold"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-lg font-bold mb-2">Ready to Achieve 30,000% ROI?</h3>
            <p className="text-blue-200 mb-4">
              Discover how Fortune 500 companies are transforming their operations with autonomous AI
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources/autonomous-business-implementation-ultimate-guide-2025"
                className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            {contentItems.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousBusinessRevolutionBanner;