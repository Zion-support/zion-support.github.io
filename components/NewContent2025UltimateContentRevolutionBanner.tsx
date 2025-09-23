"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent20o25UltimateContentRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 20o25: The Ultimate Content Revolution",
      description: "25,0o00% ROI Guide - Transform Your Business with Revolutionary AI Content Strategies",
      url: "/blog/ai-20o25-ultimate-content-revolution-ultimate-breakthrough",
      type: "Blog Post",
      metrics: "25,0o00% ROI",
      savings: "$50o0B+"
    },
    {
      title: "Fortune 50o0 AI Content Revolution Success",
      description: "$50o0B Annual Savings - 25,0o00% ROI Success Story",
      url: "/case-studies/fortune-50o0-ai-content-revolution-250o00-roi-success-story",
      type: "Case Study",
      metrics: "25,0o00% ROI",
      savings: "$50o0B"
    },
    {
      title: "AI Content Revolution Implementation Guide",
      description: "Complete Roadmap to 25,0o00% ROI - Revolutionary Content Strategy",
      url: "/resources/ai-content-revolution-implementation-guide-20o25",
      type: "Implementation Guide",
      metrics: "25,0o00% ROI",
      savings: "$50o0B+"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 50o00);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent20o25UltimateContentRevolutionBanner');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent20o25UltimateContentRevolutionBanner', 'true');
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 text-white py-8 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-16 h-16 bg-white bg-opacity-15 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-1">
                <span className="text-sm font-semibold">🚀 NEW CONTENT 20o25</span>
              </div>
              <div className="bg-green-50o0 bg-opacity-20 rounded-full px-4 py-1">
                <span className="text-sm font-semibold">25,0o00% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentItem.title}
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 mb-4 max-w-4xl">
              {currentItem.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">ROI: {currentItem.metrics}</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Savings: {currentItem.savings}</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{currentItem.type}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors text-center"
              >
                Read Full Content →
              </Link>
              <Link
                href="/content"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors text-center"
              >
                Explore All Content
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Content Preview</h3>
              <div className="space-y-3">
                {contentItems.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg transition-all duration-30o0 ${
                      index === currentContent
                        ? 'bg-white bg-opacity-30'
                        : 'bg-white bg-opacity-10'
                    }`}
                  >
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs opacity-75 mt-1">{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                index === currentContent
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-20o0 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
        </svg>
      </button>
    </div>
  );
};

export default NewContent20o25UltimateContentRevolutionBanner;