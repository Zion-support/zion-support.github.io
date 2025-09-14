'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumNeuralFusionRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 2025: The Quantum-Neural Fusion Revolution",
      subtitle: "Ultimate Breakthrough Guide to 25,000% ROI",
      metrics: "25,000% ROI • $500B+ Savings • 99.97% Accuracy",
      description: "The convergence of quantum computing and neural networks delivering unprecedented business transformation",
      cta: "Explore Quantum Revolution",
      link: "/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough",
      type: "blog",
      readingTime: "35 min read"
    },
    {
      title: "Fortune 500 Quantum-Neural Fusion Success",
      subtitle: "$500B Annual Savings - 25,000% ROI Success Story",
      metrics: "25,000% ROI • $500B Savings • 18 Months",
      description: "TechGlobal Industries achieved unprecedented transformation with quantum-neural fusion technology",
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-quantum-neural-fusion-25000-roi-success-story",
      type: "case-study",
      readingTime: "25 min read"
    },
    {
      title: "Quantum-Neural Fusion Implementation Guide",
      subtitle: "Complete Roadmap to 25,000% ROI",
      metrics: "25,000% ROI • 18 Months • Complete Framework",
      description: "Comprehensive implementation guide for achieving quantum-neural fusion transformation",
      cta: "Get Implementation Guide",
      link: "/resources/quantum-neural-fusion-implementation-guide-2025",
      type: "resource",
      readingTime: "45 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-neural-fusion-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-neural-fusion-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                🚀 NEW QUANTUM REVOLUTION
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30">
                {currentItem.type.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentItem.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-3">
              {currentItem.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-yellow-300">
                  {currentItem.metrics.split(' • ')[0]}
                </span>
              </div>
              <div className="text-sm text-gray-300">
                {currentItem.metrics.split(' • ').slice(1).join(' • ')}
              </div>
              <div className="text-sm text-gray-400">
                {currentItem.readingTime}
              </div>
            </div>

            <p className="text-gray-200 mb-6 max-w-3xl">
              {currentItem.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                {currentItem.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/quantum-consultation"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Quantum Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">
                  25,000%
                </div>
                <div className="text-lg text-gray-300">
                  Average ROI
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  in 18 months
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContent
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
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
  );
};

export default QuantumNeuralFusionRevolutionBanner;