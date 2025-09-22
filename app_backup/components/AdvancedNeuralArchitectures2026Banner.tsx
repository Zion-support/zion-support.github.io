'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Zap, Shield } from 'lucide-react';

const AdvancedNeuralArchitectures2026Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('advanced-neural-architectures-2026-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('advanced-neural-architectures-2026-banner-dismissed', 'true');
  };

  const content = [
    {
      title: "AI 2025: Advanced Neural Architectures Revolution",
      subtitle: "2,800% ROI Through Next-Generation Intelligence",
      description: "Fortune 500 companies achieving $4.2B in annual savings with 99.7% accuracy",
      metrics: "2,800% ROI • $4.2B Savings • 99.7% Accuracy",
      link: "/blog/ai-2025-advanced-neural-architectures-revolution",
      type: "Blog Post",
      readingTime: "25 min read"
    },
    {
      title: "Fortune 500 Success: $4.2B Annual Savings",
      subtitle: "Advanced Neural Architectures Case Study",
      description: "How Global Manufacturing Corp achieved 2,800% ROI in just 8 months",
      metrics: "2,800% ROI • 8 Months • $4.2B Savings",
      link: "/case-studies/fortune-500-advanced-neural-architectures-2800-roi-success",
      type: "Case Study",
      readingTime: "18 min read"
    },
    {
      title: "Implementation Guide: Complete Roadmap",
      subtitle: "Step-by-Step Guide to 2,800% ROI",
      description: "Comprehensive implementation framework based on 1,200+ successful deployments",
      metrics: "1,200+ Deployments • 35 Min Guide • Complete Framework",
      link: "/resources/advanced-neural-architectures-implementation-guide-2025",
      type: "Implementation Guide",
      readingTime: "35 min read"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">NEW ULTIMATE BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-1 bg-green-500/20 rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium">FEATURED</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {content[currentSlide].title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-3">
              {content[currentSlide].subtitle}
            </p>
            
            <p className="text-base text-gray-200 mb-4 max-w-3xl">
              {content[currentSlide].description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="font-semibold">{content[currentSlide].metrics}</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm">{content[currentSlide].type}</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <span className="text-sm">{content[currentSlide].readingTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={content[currentSlide].link}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/resources/advanced-neural-architectures-implementation-guide-2025"
                className="inline-flex items-center space-x-2 border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10"
              >
                <span>Implementation Guide</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average ROI</span>
                  <span className="font-bold text-green-300">2,800%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Annual Savings</span>
                  <span className="font-bold text-blue-300">$4.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Accuracy</span>
                  <span className="font-bold text-purple-300">99.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Implementation Time</span>
                  <span className="font-bold text-yellow-300">8 Months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AdvancedNeuralArchitectures2026Banner;