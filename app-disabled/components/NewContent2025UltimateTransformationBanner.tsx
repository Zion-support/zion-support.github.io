'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateTransformationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      title: "AI 2025: Enterprise AI Transformation Ultimate Success Guide",
      subtitle: "600% ROI in 8 Months - Complete Implementation Roadmap",
      metrics: {
        roi: "600%",
        timeline: "8 months",
        savings: "$2.8B",
        success: "94%"
      },
      description: "Transform your enterprise with cutting-edge AI solutions that deliver measurable results and sustainable competitive advantage.",
      cta: "Read Ultimate Guide",
      href: "/blog/ai-2025-enterprise-ai-transformation-ultimate-success-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success Story",
      subtitle: "$2.8B Annual Savings with 600% ROI",
      metrics: {
        roi: "600%",
        savings: "$2.8B",
        efficiency: "156%",
        quality: "99.7%"
      },
      description: "How a global manufacturing giant achieved unprecedented results through comprehensive AI transformation.",
      cta: "View Case Study",
      href: "/case-studies/fortune-500-ai-transformation-600-roi-success"
    },
    {
      title: "AI Transformation Ultimate Implementation Guide 2025",
      subtitle: "From Strategy to 600% ROI - Complete Roadmap",
      metrics: {
        roi: "600%",
        payback: "3.2 months",
        success: "94%",
        projects: "500+"
      },
      description: "The complete roadmap for enterprise AI transformation success with proven methodologies and actionable strategies.",
      cta: "Get Implementation Guide",
      href: "/resources/ai-transformation-ultimate-implementation-guide-2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentSlides.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateTransformationBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateTransformationBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-8 right-16 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                <StarIcon className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center space-x-1 bg-green-500/20 rounded-full px-3 py-1">
                <span className="text-sm font-medium">600% ROI GUARANTEED</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-4">
              {currentContent.subtitle}
            </p>

            <p className="text-blue-50 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    {key === 'roi' && <CurrencyDollarIcon className="w-5 h-5 text-green-300" />}
                    {key === 'timeline' && <ClockIcon className="w-5 h-5 text-blue-300" />}
                    {key === 'savings' && <ChartBarIcon className="w-5 h-5 text-purple-300" />}
                    {key === 'success' && <StarIcon className="w-5 h-5 text-yellow-300" />}
                    {key === 'efficiency' && <ChartBarIcon className="w-5 h-5 text-green-300" />}
                    {key === 'quality' && <StarIcon className="w-5 h-5 text-blue-300" />}
                    {key === 'payback' && <ClockIcon className="w-5 h-5 text-purple-300" />}
                    {key === 'projects' && <ChartBarIcon className="w-5 h-5 text-yellow-300" />}
                    <div>
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentContent.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                {currentContent.cta}
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateTransformationBanner;