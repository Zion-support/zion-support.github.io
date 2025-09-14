'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent = [
    {
      id: 'data-analytics-revolution',
      title: 'AI 2025: The Enterprise Data Analytics Revolution',
      description: 'Discover how Fortune 500 companies are achieving 450% ROI with AI-powered data analytics. Learn the strategies that deliver $3.2B in savings.',
      url: '/blog/ai-2025-enterprise-data-analytics-revolution',
      type: 'Blog Post',
      metrics: {
        roi: '450%',
        savings: '$3.2B',
        accuracy: '99.4%',
        efficiency: '78%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'autonomous-supply-chain',
      title: 'AI 2025: The Autonomous Supply Chain Revolution',
      description: 'Learn how AI-powered autonomous supply chains deliver 380% ROI and $2.1B in savings. Achieve 99.7% efficiency with proven strategies.',
      url: '/blog/ai-2025-autonomous-supply-chain-revolution',
      type: 'Blog Post',
      metrics: {
        roi: '380%',
        savings: '$2.1B',
        efficiency: '99.7%',
        accuracy: '99.9%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'financial-services-transformation',
      title: 'Financial Services AI Transformation: 520% ROI Success',
      description: 'See how a $5.2B bank achieved 520% ROI and $180M in annual savings. Learn the strategies that reduced processing time by 78%.',
      url: '/case-studies/ai-2025-financial-services-transformation-520-percent-roi',
      type: 'Case Study',
      metrics: {
        roi: '520%',
        savings: '$180M',
        accuracy: '99.9%',
        efficiency: '78%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'enterprise-implementation-guide',
      title: 'AI 2025 Enterprise Implementation Ultimate Guide',
      description: 'The complete guide to implementing AI in enterprise environments. Learn proven strategies that deliver 500% ROI and $2.8B in savings.',
      url: '/resources/ai-2025-enterprise-implementation-ultimate-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '500%',
        successRate: '98%',
        averageSavings: '$2.8B',
        implementationTime: '12-18 months'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateBanner');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % newContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, newContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBanner', 'true');
  };

  const currentContent = newContent[currentSlide];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-sm font-semibold">500%+ ROI GUARANTEED</span>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Content */}
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {currentContent.description}
                  </p>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium">ROI</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        {currentContent.metrics.roi}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {currentContent.metrics.savings || currentContent.metrics.averageSavings}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium">Success Rate</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        {currentContent.metrics.successRate || currentContent.metrics.accuracy}
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-orange-400" />
                        <span className="text-sm font-medium">Time</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-400">
                        {currentContent.metrics.implementationTime || currentContent.metrics.efficiency}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Read Full {currentContent.type}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/resources"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                    >
                      View All Resources
                    </Link>
                  </div>
                </div>

                {/* Content Preview Cards */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">More New Content</h3>
                  <div className="space-y-3">
                    {newContent.slice(0, 3).map((content, index) => (
                      <div
                        key={content.id}
                        className={`bg-white/10 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                          index === currentSlide ? 'ring-2 ring-white/50' : ''
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xs font-medium bg-white/20 rounded-full px-2 py-1">
                                {content.type}
                              </span>
                              {content.isNew && (
                                <span className="text-xs font-medium bg-green-500/20 text-green-300 rounded-full px-2 py-1">
                                  NEW
                                </span>
                              )}
                            </div>
                            <h4 className="font-semibold text-sm leading-tight mb-2">
                              {content.title}
                            </h4>
                            <div className="flex items-center space-x-4 text-xs opacity-75">
                              <span>{content.readingTime}</span>
                              <span>•</span>
                              <span>{content.metrics.roi} ROI</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;