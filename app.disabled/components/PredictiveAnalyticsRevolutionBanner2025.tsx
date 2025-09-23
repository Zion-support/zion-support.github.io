'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

const PredictiveAnalyticsRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: The Predictive Analytics Revolution",
      subtitle: "Ultimate Guide to 750% ROI",
      description: "Discover how Fortune 500 companies are achieving 750% ROI with AI-powered predictive analytics. Complete implementation guide with real-world case studies.",
      metrics: {
        roi: "750%",
        savings: "$4.2M",
        accuracy: "94%",
        success: "89%"
      },
      cta: "Read Ultimate Guide",
      link: "/blog/ai-2025-predictive-analytics-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 Predictive Analytics Success",
      subtitle: "$4.2B Annual Savings with 750% ROI",
      description: "How a Fortune 500 manufacturing company achieved 750% ROI and $4.2B annual savings through AI-powered predictive analytics implementation.",
      metrics: {
        roi: "750%",
        savings: "$4.2B",
        accuracy: "96%",
        success: "100%"
      },
      cta: "View Case Study",
      link: "/case-studies/ai-2025-predictive-analytics-fortune-500-success-750-roi"
    },
    {
      title: "Predictive Analytics Implementation Master Guide",
      subtitle: "From Strategy to 750% ROI",
      description: "Complete implementation guide for AI-powered predictive analytics. Achieve 750% ROI with proven strategies, frameworks, and best practices from Fortune 500 companies.",
      metrics: {
        roi: "750%",
        savings: "$4.2M",
        accuracy: "94%",
        success: "89%"
      },
      cta: "Get Master Guide",
      link: "/resources/ai-2025-predictive-analytics-implementation-master-guide"
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('predictive-analytics-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('predictive-analytics-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">NEW 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">750% ROI GUARANTEED</span>
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

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-blue-100">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-blue-100">Annual Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.accuracy}</div>
                  <div className="text-sm text-blue-100">Accuracy</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.success}</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {currentContent.cta}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Why Choose Predictive Analytics?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-sm">750% Average ROI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-sm">$4.2M Annual Savings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-sm">94% Accuracy Improvement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-sm">4.2 Month Payback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
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
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PredictiveAnalyticsRevolutionBanner2025;