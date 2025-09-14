'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, TrendingUp, DollarSign, Users, Clock, Star, ArrowRight } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const revolutionaryContent = [
    {
      id: 'data-analytics-revolution',
      title: 'AI 2025: The Enterprise Data Analytics Revolution',
      description: 'Fortune 500 companies achieve 450% ROI with AI-powered data analytics. Discover the strategies delivering $3.2B in savings.',
      url: '/blog/ai-2025-enterprise-data-analytics-revolution',
      type: 'Blog Post',
      category: 'Data Analytics',
      metrics: {
        roi: '450%',
        savings: '$3.2B',
        accuracy: '99.4%',
        efficiency: '78%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: true,
      highlight: 'REVOLUTIONARY'
    },
    {
      id: 'autonomous-supply-chain',
      title: 'AI 2025: The Autonomous Supply Chain Revolution',
      description: 'AI-powered autonomous supply chains deliver 380% ROI and $2.1B in savings. Achieve 99.7% efficiency with proven strategies.',
      url: '/blog/ai-2025-autonomous-supply-chain-revolution',
      type: 'Blog Post',
      category: 'Supply Chain',
      metrics: {
        roi: '380%',
        savings: '$2.1B',
        efficiency: '99.7%',
        accuracy: '99.9%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true,
      highlight: 'BREAKTHROUGH'
    },
    {
      id: 'financial-services-transformation',
      title: 'Financial Services AI Transformation: 520% ROI Success',
      description: 'See how a $5.2B bank achieved 520% ROI and $180M in annual savings. Learn the strategies that reduced processing time by 78%.',
      url: '/case-studies/ai-2025-financial-services-transformation-520-percent-roi',
      type: 'Case Study',
      category: 'Financial Services',
      metrics: {
        roi: '520%',
        savings: '$180M',
        accuracy: '99.9%',
        efficiency: '78%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: true,
      highlight: 'SUCCESS STORY'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2025UltimateBanner');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, revolutionaryContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025UltimateBanner', 'true');
  };

  const currentContent = revolutionaryContent[currentSlide];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30"></div>
        <div className="absolute top-8 left-8 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-12 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-12 left-16 w-3 h-3 bg-green-400/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse delay-3000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full px-6 py-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg font-bold">REVOLUTIONARY 2025 CONTENT</span>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full px-6 py-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-lg font-bold">500%+ ROI GUARANTEED</span>
                </div>
              </div>

              {/* Main Content Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                        {currentContent.highlight}
                      </span>
                      <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                        {currentContent.category}
                      </span>
                      {currentContent.isNew && (
                        <span className="bg-green-500/20 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                      {currentContent.title}
                    </h2>
                    
                    <p className="text-xl opacity-90 leading-relaxed">
                      {currentContent.description}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium">ROI</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        {currentContent.metrics.roi}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {currentContent.metrics.savings}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium">Accuracy</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        {currentContent.metrics.accuracy}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl p-4 border border-orange-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-orange-400" />
                        <span className="text-sm font-medium">Efficiency</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-400">
                        {currentContent.metrics.efficiency}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Read Full {currentContent.type}
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Link>
                    <Link
                      href="/resources"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Explore All Resources
                    </Link>
                  </div>
                </div>

                {/* Content Preview Sidebar */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">More Revolutionary Content</h3>
                  <div className="space-y-3">
                    {revolutionaryContent.map((content, index) => (
                      <div
                        key={content.id}
                        className={`bg-white/10 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 border ${
                          index === currentSlide ? 'ring-2 ring-yellow-400/50 border-yellow-400/30' : 'border-white/20'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold bg-white/20 rounded-full px-2 py-1">
                              {content.type}
                            </span>
                            {content.isNew && (
                              <span className="text-xs font-bold bg-green-500/20 text-green-300 rounded-full px-2 py-1">
                                NEW
                              </span>
                            )}
                          </div>
                          
                          <h4 className="font-bold text-sm leading-tight">
                            {content.title}
                          </h4>
                          
                          <div className="flex items-center justify-between text-xs opacity-75">
                            <span>{content.readingTime}</span>
                            <span className="font-bold text-green-400">{content.metrics.roi} ROI</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 rounded-full px-2 py-1">
                              {content.highlight}
                            </span>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-center space-x-3 mt-8">
                {revolutionaryContent.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-6 p-3 hover:bg-white/10 rounded-full transition-colors"
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

export default RevolutionaryContent2025UltimateBanner;