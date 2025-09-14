'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: The Ultimate Enterprise AI Transformation Guide',
      description: 'Complete roadmap to 500%+ ROI through comprehensive AI implementation',
      type: 'Blog Post',
      metrics: '500% ROI',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      featured: true
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: 1,200% ROI Success Story',
      description: 'How a $5.2B company achieved $2.8B in annual savings',
      type: 'Case Study',
      metrics: '1,200% ROI',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: '$100B market transformation with 400-600% ROI opportunities',
      type: 'Blog Post',
      metrics: '400-600% ROI',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      featured: true
    },
    {
      id: 'quantum-manufacturing-success',
      title: 'Quantum AI Manufacturing: $2.8B Annual Savings',
      description: 'Fortune 500 company achieves 567% ROI in 6 months',
      type: 'Case Study',
      metrics: '567% ROI',
      url: '/case-studies/quantum-ai-fortune-500-manufacturing-transformation',
      featured: true
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025',
      description: 'Complete roadmap to 1,000%+ ROI with proven methodologies',
      type: 'Resource',
      metrics: '1,000%+ ROI',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }4000);

    return () => clearInterval(timer);
  }[contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-content-banner-dismissed'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    🚀 NEW CONTENT
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                    {currentItem.type}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {contentItems.map((_index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                  {currentItem.title}
                </h2>
                <p className="text-lg text-blue-100 mb-4 max-w-3xl">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">{currentItem.metrics}</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">$2.8B+</div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">500+</div>
                    <div className="text-xs text-blue-200">Success Stories</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Link
                    href={currentItem.url}
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Read Now
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-4000 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AI2025UltimateContentRevolutionBanner;