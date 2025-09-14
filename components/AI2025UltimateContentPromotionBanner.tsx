"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
XChevronLeftChevronRightStarTrendingUpUsersClock

const AI2025UltimateContentPromotionBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isDismissedsetIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-ultimate-content-banner-dismissed'true');
  };

  const content = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'Resource Guide',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-bold">NEW 2025 CONTENT</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span>500%+ ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Fortune 500</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-purple-400" />
                <span>18 Months</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm font-medium rounded-full">
                  {currentContent.type}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full">
                  FEATURED
                </span>
                <span className="text-sm text-gray-300">{currentContent.readingTime}</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-gray-200">
                Discover the proven strategies and implementation frameworks that Fortune 500 companies use to achieve extraordinary ROI with AI automation and transformation.
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.accuracy}</div>
                <div className="text-sm text-gray-300">Efficiency/Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Read Full {currentContent.type}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Content Navigation */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Featured Content Collection</h3>
              
              {/* Content Cards */}
              <div className="space-y-3">
                {content.map((itemindex) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-white/20 backdrop-blur-sm border-2 border-blue-400'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded">
                            {item.type}
                          </span>
                          {item.featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-medium text-white mb-1 line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-xs text-gray-300">
                          <span>{item.metrics.roi} ROI</span>
                          <span>{item.readingTime}</span>
                        </div>
                      </div>
                      {index === currentSlide && (
                        <div className="ml-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {content.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">500%+</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">$2.8B+</div>
              <div className="text-sm text-gray-300">Total Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">99%+</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">18</div>
              <div className="text-sm text-gray-300">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentPromotionBanner;