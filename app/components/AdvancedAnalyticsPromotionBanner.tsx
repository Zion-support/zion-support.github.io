'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react';

const AdvancedAnalyticsPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: The Advanced Analytics Revolution",
      subtitle: "Ultimate Guide to 900% ROI",
      description: "Discover how Fortune 500 companies are achieving 900% ROI through advanced AI analytics",
      metrics: {
        roi: "900%",
        savings: "$8.2M",
        accuracy: "99.7%",
        speed: "340%"
      },
      cta: "Read the Guide",
      link: "/blog/ai-2025-advanced-analytics-revolution-ultimate-guide"
    },
    {
      title: "Intelligent Automation Revolution",
      subtitle: "Achieve 1,100% ROI",
      description: "Transform your business with AI-powered automation that delivers unprecedented results",
      metrics: {
        roi: "1,100%",
        savings: "$12.8M",
        efficiency: "450%",
        errors: "99.2%"
      },
      cta: "Learn More",
      link: "/blog/ai-2025-intelligent-automation-revolution-ultimate-guide"
    },
    {
      title: "Success Story: $2.1B Company",
      subtitle: "900% ROI in 18 Months",
      description: "See how a Fortune 500 manufacturing company achieved 900% ROI through advanced analytics",
      metrics: {
        roi: "900%",
        savings: "$67M",
        timeframe: "18 months",
        company: "$2.1B"
      },
      cta: "View Case Study",
      link: "/case-studies/ai-2025-advanced-analytics-900-roi-success-story"
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('advanced-analytics-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('advanced-analytics-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium text-yellow-300">NEW CONTENT</span>
              </div>
              <div className="flex items-center space-x-1">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg font-semibold text-yellow-300 mb-3">
              {currentContent.subtitle}
            </p>

            <p className="text-blue-100 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            {/* Metrics display */}
            <div className="flex flex-wrap gap-4 mb-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">
                    {key === 'roi' && 'ROI'}
                    {key === 'savings' && 'Savings'}
                    {key === 'accuracy' && 'Accuracy'}
                    {key === 'speed' && 'Speed'}
                    {key === 'efficiency' && 'Efficiency'}
                    {key === 'errors' && 'Error Reduction'}
                    {key === 'timeframe' && 'Timeline'}
                    {key === 'company' && 'Company Size'}
                  </span>
                  <span className="text-sm font-bold text-yellow-300">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <ArrowRight className="w-5 h-5" />
                <span>{currentContent.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Zap className="w-5 h-5" />
                <span>View All Success Stories</span>
              </Link>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20">
        <div 
          className="h-full bg-yellow-400 transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AdvancedAnalyticsPromotionBanner;