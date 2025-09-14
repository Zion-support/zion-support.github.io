'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, SparklesIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const NewContent2025AdvancedAIAutomationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: Advanced AI Automation Revolution",
      subtitle: "600% ROI in 8 Months - Ultimate Enterprise Guide",
      description: "Transform your business with cutting-edge AI automation solutions achieving $2.8M annual savings and 340% productivity increases.",
      metrics: {
        roi: "600%",
        savings: "$2.8M",
        productivity: "340%",
        success: "98%"
      },
      url: "/blog/ai-2025-advanced-ai-automation-revolution-ultimate-guide",
      type: "blog",
      readingTime: "18 min read"
    },
    {
      title: "Fortune 500 Manufacturing Success Story",
      subtitle: "$3.2B Annual Savings with 600% ROI",
      description: "How a global manufacturing giant achieved unprecedented success with comprehensive AI automation across their operations.",
      metrics: {
        roi: "600%",
        savings: "$3.2B",
        efficiency: "89%",
        satisfaction: "98%"
      },
      url: "/case-studies/ai-automation-fortune-500-manufacturing-600-roi-success",
      type: "case-study",
      readingTime: "12 min read"
    },
    {
      title: "AI Automation Implementation Master Guide",
      subtitle: "Complete Blueprint for 600% ROI Success",
      description: "The proven framework for implementing AI automation in enterprise environments with step-by-step guidance.",
      metrics: {
        roi: "600%",
        success: "98%",
        timeline: "8 months",
        projects: "500+"
      },
      url: "/resources/ai-automation-implementation-guide-2025",
      type: "resource",
      readingTime: "25 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-2 mb-3">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium text-yellow-300">NEW CONTENT 2025</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-blue-100 mb-4">
              {currentContent.subtitle}
            </p>
            
            <p className="text-blue-50 mb-6 max-w-2xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-yellow-300">{value}</div>
                  <div className="text-xs text-blue-100 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Consultation
              </Link>
            </div>

            {/* Reading Time */}
            <div className="mt-4 text-sm text-blue-200">
              <ClockIcon className="inline h-4 w-4 mr-1" />
              {currentContent.readingTime}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              {/* Animated Icons */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                    <ChartBarIcon className="h-16 w-16 text-yellow-300" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <CurrencyDollarIcon className="h-5 w-5 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                  <SparklesIcon className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-300' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

// Clock Icon Component
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default NewContent2025AdvancedAIAutomationBanner;