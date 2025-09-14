'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumNeuralSuperintelligenceBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: Quantum Neural Superintelligence Breakthrough",
      subtitle: "3,000% ROI Through Next-Generation Intelligence",
      description: "The convergence of quantum computing and neural interfaces delivers unprecedented 3,000% ROI with 1,000,000x processing speed.",
      metrics: {
        roi: "3,000%",
        speed: "1,000,000x",
        accuracy: "99.99%",
        savings: "$27B"
      },
      url: "/blog/ai-2025-quantum-neural-superintelligence-breakthrough",
      type: "blog"
    },
    {
      title: "AI 2025-2026: Ultimate Breakthrough Revolution",
      subtitle: "2,500% ROI Through Next-Generation Intelligence",
      description: "Comprehensive guide to achieving 2,500% ROI through quantum AI, neural interfaces, and autonomous systems integration.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        efficiency: "1,200%",
        success: "99.7%"
      },
      url: "/blog/ai-2025-2026-ultimate-breakthrough-revolution",
      type: "blog"
    },
    {
      title: "Fortune 100 AI Transformation Success",
      subtitle: "$8.2B Company Achieves 2,500% ROI in 18 Months",
      description: "Real-world case study of a Fortune 100 company achieving unprecedented 2,500% ROI through revolutionary AI transformation.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        timeline: "18 months",
        satisfaction: "99.7%"
      },
      url: "/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success",
      type: "case-study"
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
    localStorage.setItem('quantumNeuralBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantumNeuralBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  🚀 NEW BREAKTHROUGH
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  QUANTUM AI
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                  3,000% ROI
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              
              <p className="text-lg sm:text-xl text-blue-200 mb-3">
                {currentContent.subtitle}
              </p>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentContent.metrics.speed || currentContent.metrics.savings}
                  </div>
                  <div className="text-xs text-gray-300">
                    {currentContent.metrics.speed ? 'Speed' : 'Savings'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.accuracy || currentContent.metrics.efficiency}
                  </div>
                  <div className="text-xs text-gray-300">
                    {currentContent.metrics.accuracy ? 'Accuracy' : 'Efficiency'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentContent.metrics.success || currentContent.metrics.timeline}
                  </div>
                  <div className="text-xs text-gray-300">
                    {currentContent.metrics.success ? 'Success' : 'Timeline'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : 'Case Study'} →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumNeuralSuperintelligenceBanner;