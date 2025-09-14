'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025: The Cybersecurity Revolution",
      description: "Enterprise Protection at Scale - 300% faster threat detection, 95% reduction in false positives",
      url: "/blog/ai-2025-cybersecurity-revolution-enterprise-protection",
      type: "Blog Post",
      metrics: "$2.3M average annual savings"
    },
    {
      title: "AI-Powered Cloud Migration Success",
      description: "$50M Savings in 6 Months - Ultimate Success Story with 400% performance improvement",
      url: "/case-studies/ai-cloud-migration-2025-ultimate-success",
      type: "Case Study",
      metrics: "99.99% uptime achieved"
    },
    {
      title: "Enterprise Transformation Master Guide",
      description: "From Strategy to 500% ROI - Complete roadmap for AI transformation success",
      url: "/resources/ai-2025-enterprise-transformation-master-guide",
      type: "Master Guide",
      metrics: "500% average ROI"
    },
    {
      title: "The Automation Revolution",
      description: "Enterprise Efficiency at Scale - 400% productivity gains, 85% cost reduction",
      url: "/blog/ai-2025-automation-revolution-enterprise-efficiency",
      type: "Blog Post",
      metrics: "$75M+ annual savings"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const current = newContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-300">NEW CONTENT 2025</span>
                </div>
                <div className="px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                  {current.type}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">
                {current.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-200 mb-3 leading-relaxed">
                {current.description}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-semibold text-yellow-300">
                    {current.metrics}
                  </span>
                </div>
                <Link
                  href={current.url}
                  className="inline-flex items-center px-4 py-2 bg-white text-purple-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Read Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="ml-6 flex items-center space-x-3">
              {/* Content indicators */}
              <div className="flex space-x-1">
                {newContent.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentContent ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-1"
                aria-label="Dismiss banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;