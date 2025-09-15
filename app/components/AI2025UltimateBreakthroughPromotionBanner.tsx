'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-ultimate-breakthrough-banner-dismissed');
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
    localStorage.setItem('ai-2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  const content = [
    {
      title: "AI 2025: The Enterprise Automation Revolution",
      subtitle: "Ultimate Breakthrough Guide to 2,500% ROI",
      metrics: "2,500% ROI • $3.2B Savings • 95% Automation",
      cta: "Read Ultimate Guide",
      link: "/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025",
      icon: "🚀"
    },
    {
      title: "Fortune 500 AI Automation Success Story",
      subtitle: "$3.2B Annual Savings - 2,500% ROI Achievement",
      metrics: "18 Months • 340% Efficiency • 99.7% Accuracy",
      cta: "View Case Study",
      link: "/case-studies/fortune-500-ai-automation-2500-roi-success-story",
      icon: "🏆"
    },
    {
      title: "AI Implementation Ultimate Guide 2025",
      subtitle: "Complete Roadmap to 2,500% ROI",
      metrics: "500+ Success Stories • 18-24 Months • $3.2B Savings",
      cta: "Download Guide",
      link: "/resources/ai-automation-implementation-ultimate-guide-2025",
      icon: "📚"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-white/10 opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">NEW ULTIMATE BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">2,500% ROI ACHIEVED</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {content[currentSlide].title}
              </h2>
              <p className="text-xl text-blue-100 mb-4">
                {content[currentSlide].subtitle}
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">$3.2B+ Savings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-semibold">500+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-semibold">18 Months</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href={content[currentSlide].link}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>{content[currentSlide].cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex flex-col space-y-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-green-400 h-1 rounded-full transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;