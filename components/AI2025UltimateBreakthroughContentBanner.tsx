'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughContentBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide",
      description: "Discover how Fortune 500 companies are achieving 500% ROI through AI automation. Complete implementation roadmap with real success stories.",
      type: "Blog Post",
      roi: "500%",
      savings: "$200M",
      readingTime: "18 min read",
      url: "/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough",
      badge: "NEW",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months",
      description: "Complete case study of how a Fortune 500 manufacturing company achieved 567% ROI through comprehensive AI transformation.",
      type: "Case Study",
      roi: "567%",
      savings: "$2.8B",
      readingTime: "12 min read",
      url: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story",
      badge: "FEATURED",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI",
      description: "Complete step-by-step guide to implementing AI solutions that deliver 800% ROI. Includes frameworks, templates, and real-world case studies.",
      type: "Resource",
      roi: "800%",
      savings: "$173.7M",
      readingTime: "20 min read",
      url: "/resources/ai-2025-implementation-ultimate-roadmap-comprehensive",
      badge: "GUIDE",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AI BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New High-Value AI Content Now Available
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI strategies, case studies, and implementation guides that deliver 500%+ ROI
          </p>
        </div>

        {/* Content showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${currentContent.color} text-white`}>
                {currentContent.badge}
              </span>
              <span className="text-sm text-gray-300">{currentContent.type}</span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {currentContent.title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-green-400">{currentContent.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.savings}</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.readingTime}</div>
                  <div className="text-sm text-gray-300">Read Time</div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{currentContent.roi}</div>
                  <div className="text-lg text-gray-600 mb-4">Average ROI</div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (parseInt(currentContent.roi) / 10))}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Based on 500+ successful implementations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional content preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-opacity-20 ${
                index === currentSlide ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </span>
                <span className="text-xs text-gray-300">{item.type}</span>
              </div>
              <h4 className="font-semibold text-white mb-2 line-clamp-2">
                {item.title}
              </h4>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>{item.roi} ROI</span>
                <span>{item.readingTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">
            Ready to achieve similar results for your organization?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free AI Assessment
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughContentBanner;