'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,000% ROI',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: '1,000% ROI',
      description: 'Fortune 500 companies achieving unprecedented results',
      isNew: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      metrics: '750% ROI',
      description: 'Transform customer experience with AI-powered solutions',
      isNew: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $4.2B Company Achieves 1,100% ROI',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success-story',
      metrics: '1,100% ROI',
      description: 'Global manufacturing leader achieves breakthrough results',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 left-1/2 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                🚀 REVOLUTIONARY 2025 CONTENT
              </span>
              {currentContent.isNew && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  NEW
                </span>
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg opacity-90 mb-4">
              {currentContent.description}
            </p>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-bold text-yellow-300">
                {currentContent.metrics}
              </div>
              <div className="flex gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="hidden md:flex flex-col gap-2 ml-8">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-8 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-400'
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryContent2025Banner;