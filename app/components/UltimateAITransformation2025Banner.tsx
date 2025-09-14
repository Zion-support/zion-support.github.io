'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const UltimateAITransformation2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      description: 'Complete Success Guide - 1,500% ROI Achievement',
      type: 'Blog Post',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '95%'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: 1,500% ROI Success Story',
      description: '$5B Company Achieves $2.8B Annual Savings in 18 Months',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-1500-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '156%'
      },
      badge: 'FEATURED',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework',
      description: 'Complete Guide to 1,500% ROI - Proven Methodology',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      badge: 'ULTIMATE',
      color: 'from-green-600 to-emerald-600'
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
    localStorage.setItem('ultimate-ai-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">ULTIMATE AI TRANSFORMATION 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the proven strategies that Fortune 500 companies use to achieve 
            <span className="text-yellow-400 font-bold"> 1,500% ROI</span> and 
            <span className="text-green-400 font-bold"> $2.8B in annual savings</span>
          </p>
        </div>

        {/* Main content showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${currentContent.badge === 'NEW' ? 'bg-green-500' : currentContent.badge === 'FEATURED' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                {currentContent.badge}
              </div>
              <span className="text-sm text-gray-300">{currentContent.type}</span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentContent.title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {currentContent.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <CurrencyDollarIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm font-medium">ROI: {currentContent.metrics.roi}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <ChartBarIcon className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm font-medium">Savings: {currentContent.metrics.savings}</span>
                </div>
                {currentContent.metrics.efficiency && (
                  <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                    <StarIcon className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-sm font-medium">Efficiency: {currentContent.metrics.efficiency}</span>
                  </div>
                )}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content navigation dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Additional content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.color} rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                index === currentSlide ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                  item.badge === 'NEW' ? 'bg-green-500' : 
                  item.badge === 'FEATURED' ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  {item.badge}
                </div>
                <span className="text-xs text-white/80">{item.type}</span>
              </div>
              
              <h4 className="text-lg font-bold mb-2 line-clamp-2">
                {item.title}
              </h4>
              
              <p className="text-sm text-white/90 mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-bold">ROI: {item.metrics.roi}</div>
                  <div className="text-white/80">Savings: {item.metrics.savings}</div>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-white/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your business with AI? Get started with our comprehensive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformation2025Banner;