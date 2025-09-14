'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, DollarSign, Clock, Users, CheckCircle } from 'lucide-react';

const UltimateAI2025BreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough',
      description: 'Transform Fortune 500 companies with 1,200% ROI and $500M+ annual savings',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        accuracy: '99.97%',
        satisfaction: '98%'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $750M Annual Savings Success Story',
      description: 'How a global manufacturing leader achieved 1,500% ROI with quantum AI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,500%',
        savings: '$750M',
        efficiency: '156%',
        uptime: '99.9%'
      },
      badge: 'CASE STUDY',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: Complete Roadmap to 1,500% ROI',
      description: 'The definitive guide to enterprise AI transformation and success',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete-roadmap',
      metrics: {
        roi: '1,500%',
        payback: '2.4 months',
        success: '98%',
        savings: '$200M+'
      },
      badge: 'GUIDE',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute -bottom-4 left-1/3 w-64 h-64 bg-white opacity-8 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold">ULTIMATE AI 2025 BREAKTHROUGH</span>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {currentContent.badge}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg opacity-90 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Success Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white bg-opacity-15 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                  <div className="text-sm opacity-80">Annual Savings</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-300">
                    {currentContent.metrics.accuracy || currentContent.metrics.efficiency || currentContent.metrics.payback}
                  </div>
                  <div className="text-sm opacity-80">
                    {currentContent.metrics.accuracy ? 'Accuracy' : 
                     currentContent.metrics.efficiency ? 'Efficiency' : 'Payback'}
                  </div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-300">
                    {currentContent.metrics.satisfaction || currentContent.metrics.uptime || currentContent.metrics.success}
                  </div>
                  <div className="text-sm opacity-80">
                    {currentContent.metrics.satisfaction ? 'Satisfaction' :
                     currentContent.metrics.uptime ? 'Uptime' : 'Success Rate'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative">
                {/* Rotating Content Indicators */}
                <div className="flex space-x-2 mb-4">
                  {content.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                      }`}
                    />
                  ))}
                </div>

                {/* Success Icons */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-300" />
                    <div className="text-sm font-semibold">1,500% ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                    <div className="text-sm font-semibold">$750M Savings</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                    <div className="text-sm font-semibold">2.4 Months</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                    <div className="text-sm font-semibold">98% Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all duration-5000 ease-linear"
                style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default UltimateAI2025BreakthroughBanner;