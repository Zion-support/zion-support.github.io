'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 1,
      type: "Blog Post",
      title: "AI 2025: Advanced Automation Enterprise Mastery - The Ultimate Breakthrough Guide",
      description: "Discover how Fortune 500 companies are achieving 500%+ ROI with advanced AI automation. Complete implementation guide with real success stories.",
      url: "/blog/ai-2025-advanced-automation-enterprise-mastery-ultimate-breakthrough",
      metrics: {
        roi: "500%",
        savings: "$2.8B",
        satisfaction: "98%",
        projects: "500+"
      },
      readingTime: "18 min read",
      tag: "NEW",
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      type: "Case Study",
      title: "Fortune 500 AI Transformation: $2.8B Company Achieves 1,000% ROI in 18 Months",
      description: "The most remarkable AI transformation success story of 2025. See how a Fortune 500 company achieved unprecedented 1,000% ROI.",
      url: "/case-studies/fortune-500-ai-transformation-ultimate-success-story-2025",
      metrics: {
        roi: "1,000%",
        savings: "$280M",
        timeline: "18 months",
        revenue: "$1.2B"
      },
      readingTime: "15 min read",
      tag: "BREAKTHROUGH",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      type: "Implementation Guide",
      title: "AI 2025 Implementation Ultimate Success Framework: Complete Guide to 500%+ ROI",
      description: "The definitive guide to AI implementation success. Proven framework used by 500+ companies to achieve 500%+ ROI.",
      url: "/resources/ai-2025-implementation-ultimate-success-framework",
      metrics: {
        success_rate: "94%",
        average_roi: "500%",
        implementation_time: "12-18 months",
        projects: "500+ Success Stories"
      },
      readingTime: "25 min read",
      tag: "ULTIMATE GUIDE",
      color: "from-blue-600 to-cyan-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newContent.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025ShowcaseBanner');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2025ShowcaseBanner', 'true');
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className={`relative bg-gradient-to-r ${currentContent.color} text-white overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse bg-white rounded-full w-64 h-64 absolute -top-32 -left-32"></div>
          <div className="animate-pulse bg-white rounded-full w-48 h-48 absolute -bottom-24 -right-24 animation-delay-1000"></div>
          <div className="animate-pulse bg-white rounded-full w-32 h-32 absolute top-1/2 right-1/4 animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white bg-opacity-20 backdrop-blur-sm`}>
                🚀 {currentContent.tag}
              </span>
              <span className="text-sm opacity-90">{currentContent.type}</span>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg opacity-90 leading-relaxed">
              {currentContent.description}
            </p>

            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {currentContent.readingTime}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Read Full Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Key Results & Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            {/* Global Impact Stats */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold mb-2">Global Impact</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">500+</div>
                  <div className="text-xs opacity-90">Companies Transformed</div>
                </div>
                <div>
                  <div className="text-lg font-bold">$2.8B+</div>
                  <div className="text-xs opacity-90">Total Savings</div>
                </div>
                <div>
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-xs opacity-90">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm opacity-90 mb-2 sm:mb-0">
              🎯 Ready to achieve 500%+ ROI with AI transformation?
            </div>
            <div className="flex space-x-4">
              <Link
                href="/services"
                className="text-sm font-semibold hover:text-gray-200 transition-colors"
              >
                Explore Services →
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold hover:text-gray-200 transition-colors"
              >
                View Success Stories →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;