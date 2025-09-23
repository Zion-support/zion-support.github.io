'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessAutomationRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (!isDismissed && isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isDismissed, isVisible]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-business-automation-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      title: "AI 2025: The Ultimate Business Automation Revolution",
      subtitle: "Achieve 5,000% ROI in 18 Months",
      description: "Complete business automation transformation with $2.8B annual savings",
      metrics: {
        roi: "5,000%",
        savings: "$2.8B",
        accuracy: "99.7%",
        efficiency: "340%"
      },
      link: "/blog/ai-2025-ultimate-business-automation-revolution-ultimate-breakthrough",
      type: "blog"
    },
    {
      title: "Fortune 500 Ultimate Business Automation Success",
      subtitle: "$2.8B Annual Savings - 5,000% ROI Success Story",
      description: "Real-world case study of complete business transformation",
      metrics: {
        roi: "5,000%",
        savings: "$2.8B",
        timeline: "18 months",
        satisfaction: "99.7%"
      },
      link: "/case-studies/fortune-500-ultimate-business-automation-5000-roi-success-story",
      type: "case-study"
    },
    {
      title: "Ultimate Business Automation Implementation Guide",
      subtitle: "Complete Roadmap to 5,000% ROI",
      description: "Step-by-step implementation guide for business automation success",
      metrics: {
        roi: "5,000%",
        success: "98%",
        timeline: "18 months",
        processes: "200+"
      },
      link: "/resources/ultimate-business-automation-implementation-guide-2025",
      type: "resource"
    }
  ];

  if (isDismissed || !isVisible) {
    return null;
  }

  const currentContent = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content section */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <span className="mr-2">🚀</span>
              ULTIMATE BUSINESS AUTOMATION REVOLUTION 2025
            </div>

            {/* Title and subtitle */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                {currentContent.type === 'blog' && 'Read Full Article'}
                {currentContent.type === 'case-study' && 'View Case Study'}
                {currentContent.type === 'resource' && 'Download Guide'}
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Visual section */}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                {/* ROI showcase */}
                <div className="text-center">
                  <div className="text-6xl font-bold text-yellow-400 mb-2">5,000%</div>
                  <div className="text-xl text-gray-200">Average ROI Achievement</div>
                </div>

                {/* Process automation visualization */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Process Automation</span>
                    <span className="text-sm font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-[95%] animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Cost Savings</span>
                    <span className="text-sm font-semibold">$2.8B</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[100%] animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">System Accuracy</span>
                    <span className="text-sm font-semibold">99.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[99.7%] animate-pulse"></div>
                  </div>
                </div>

                {/* Key benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">340%</div>
                    <div className="text-xs text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">18</div>
                    <div className="text-xs text-gray-300">Months Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
    </div>
  );
};

export default UltimateBusinessAutomationRevolutionBanner;