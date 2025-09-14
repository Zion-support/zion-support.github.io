'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide",
      type: "blog",
      url: "/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough",
      metrics: "750% ROI • $3.2B Savings • 89% Efficiency",
      description: "Transform your business with revolutionary AI automation achieving unprecedented returns"
    },
    {
      title: "Fortune 500 AI Transformation: $4.2B Company Achieves 850% ROI",
      type: "case-study", 
      url: "/case-studies/fortune-500-ai-transformation-ultimate-success-2025",
      metrics: "850% ROI • $3.8B Savings • 99.7% Accuracy",
      description: "Real-world success story of comprehensive AI transformation"
    },
    {
      title: "AI Implementation Ultimate Roadmap 2025: From Strategy to 900% ROI",
      type: "resource",
      url: "/resources/ai-implementation-ultimate-roadmap-2025-comprehensive", 
      metrics: "900% ROI • 18 Months • Complete Guide",
      description: "Step-by-step guide to achieving unprecedented AI success"
    },
    {
      title: "AI 2025: The Quantum Computing Business Revolution - Ultimate Guide",
      type: "blog",
      url: "/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide",
      metrics: "500% ROI • $100B Market • 1000x Speed",
      description: "Revolutionary quantum AI transforming enterprise operations"
    },
    {
      title: "Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI",
      type: "case-study",
      url: "/case-studies/ai-transformation-fortune-500-ultimate-success-2025",
      metrics: "650% ROI • $2.8B Savings • 78% Efficiency",
      description: "Comprehensive AI transformation delivering exceptional results"
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
    localStorage.setItem('ai2025-ultimate-content-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold">🚀 AI 2025 Ultimate Content Revolution</h2>
              <p className="text-purple-200 text-sm">Exclusive access to breakthrough AI content</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-purple-200 transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {currentContent.type}
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-purple-100 mb-4 text-sm">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                  {currentContent.metrics}
                </span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-2 justify-center">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Transform Your Business with AI
              </h3>
              <p className="text-purple-200 mb-6 text-lg">
                Join 500+ companies achieving 750%+ ROI with our proven AI strategies
              </p>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-400">750%</div>
                <div className="text-sm text-purple-200">Average ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400">$3.2B</div>
                <div className="text-sm text-purple-200">Average Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">89%</div>
                <div className="text-sm text-purple-200">Efficiency Gain</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-purple-200">Success Stories</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href={currentContent.url}
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} Now
              </Link>
              <Link
                href="/resources"
                className="block w-full border-2 border-white text-white hover:bg-white hover:text-purple-900 font-semibold py-3 px-6 rounded-lg text-center transition-all"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white bg-opacity-20 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentRevolutionBanner;