'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ai-2025-ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution',
      description: 'Transform your business with 50,000% ROI through revolutionary AI automation',
      type: 'Blog Post',
      roi: '50,000%',
      savings: '$2.8B+',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      image: '/images/ai-automation-revolution.jpg',
      badge: 'NEW'
    },
    {
      id: 'fortune-500-ai-automation-success',
      title: 'Fortune 500 AI Automation Success Story',
      description: 'How TechGlobal Industries achieved $2.8B annual savings with 50,000% ROI',
      type: 'Case Study',
      roi: '50,000%',
      savings: '$2.8B',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      image: '/images/fortune-500-success.jpg',
      badge: 'FEATURED'
    },
    {
      id: 'ai-automation-implementation-guide',
      title: 'AI Automation Implementation Ultimate Guide',
      description: 'Complete roadmap to achieving 50,000% ROI with AI automation',
      type: 'Implementation Guide',
      roi: '50,000%',
      savings: '$2.8B+',
      url: '/resources/ai-automation-implementation-ultimate-guide-50000-roi',
      image: '/images/implementation-guide.jpg',
      badge: 'GUIDE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-pattern.svg')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW CONTENT 2025
            </div>
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              ULTIMATE SHOWCASE
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the latest breakthrough content featuring Fortune 500 success stories, 
                implementation guides, and revolutionary AI technologies with proven ROI results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">50,000%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">$2.8B+</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/content"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {currentItem.badge}
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {currentItem.type}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {contentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{currentItem.roi}</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{currentItem.savings}</div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>

                <Link
                  href={currentItem.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read Full Content →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            Auto-rotating content • {contentItems.length} featured pieces • Updated daily
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;