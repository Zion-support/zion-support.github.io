'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const UltimateAI2025TransformationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: The Ultimate Enterprise Transformation Guide",
      subtitle: "600% ROI in 8 Months - Proven Methodology",
      description: "Discover how Fortune 500 companies are achieving unprecedented 600% ROI with AI transformation strategies.",
      metrics: {
        roi: "600%",
        savings: "$500M+",
        timeframe: "8 months",
        successRate: "97%"
      },
      cta: "Get Your 600% ROI Guide",
      link: "/resources/ai-transformation-600-roi-implementation-guide",
      type: "resource"
    },
    {
      title: "Fortune 500 AI Transformation Success Story",
      subtitle: "$2.8B Company Achieves 600% ROI",
      description: "Real case study showing how a Fortune 500 manufacturing company transformed operations with AI.",
      metrics: {
        roi: "600%",
        savings: "$500M annually",
        efficiency: "78%",
        quality: "99.7%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-transformation-600-roi-success",
      type: "case-study"
    },
    {
      title: "AI 2025: The Ultimate Enterprise Transformation Guide",
      subtitle: "Complete Implementation Roadmap",
      description: "Step-by-step guide with proven frameworks, real success stories, and actionable strategies.",
      metrics: {
        roi: "600%",
        implementation: "8 months",
        successRate: "97%",
        companies: "500+"
      },
      cta: "Start Your Transformation",
      link: "/resources/ai-transformation-600-roi-implementation-guide",
      type: "resource"
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
    localStorage.setItem('ultimate-ai-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Progress indicator */}
              <div className="flex space-x-2 mb-4">
                {content.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-8 rounded-full transition-all duration-500 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Content type badge */}
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1 mb-4">
                <span className="text-sm font-medium">
                  {currentContent.type === 'resource' ? '📚 Implementation Guide' : 
                   currentContent.type === 'case-study' ? '📊 Success Story' : '🚀 New Content'}
                </span>
              </div>

              {/* Main content */}
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-3">
                {currentContent.subtitle}
              </p>
              <p className="text-base md:text-lg text-gray-200 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-sm font-medium text-green-400">ROI</span>
                  </div>
                  <div className="text-lg font-bold">{currentContent.metrics.roi}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-yellow-400">Savings</span>
                  </div>
                  <div className="text-lg font-bold">{currentContent.metrics.savings}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-sm font-medium text-blue-400">Time</span>
                  </div>
                  <div className="text-lg font-bold">{currentContent.metrics.timeframe || currentContent.metrics.implementation}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-sm font-medium text-purple-400">Success</span>
                  </div>
                  <div className="text-lg font-bold">{currentContent.metrics.successRate || currentContent.metrics.efficiency}</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {currentContent.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get AI Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
};

export default UltimateAI2025TransformationBanner;