'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'enterprise-data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$2.5B',
        accuracy: '99.7%',
        speed: '89% faster'
      },
      description: 'Transform your data into a $2.5B competitive advantage with cutting-edge AI data strategies',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 750% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '750%',
        revenue: '$2.4B',
        savings: '$1.8B',
        efficiency: '156%'
      },
      description: 'How a global manufacturing leader transformed their operations with AI and achieved unprecedented results',
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Ultimate Master Guide: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-master-guide',
      metrics: {
        roi: '800%',
        success: '95%',
        timeline: '24 months',
        value: '$5B+'
      },
      description: 'The complete blueprint for enterprise AI implementation that delivers unprecedented results',
      featured: true
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Business Breakthrough - 1,200% ROI Revolution',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-breakthrough',
      metrics: {
        roi: '1,200%',
        speed: '1,000x',
        accuracy: '99.97%',
        savings: '$2.8B'
      },
      description: 'How quantum computing is transforming business operations and delivering unprecedented results',
      featured: true
    },
    {
      id: 'autonomous-enterprise-transformation',
      title: 'AI 2025 Autonomous Enterprise Transformation: $1.8B Company Achieves 900% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-autonomous-enterprise-transformation-success',
      metrics: {
        roi: '900%',
        revenue: '$612M',
        savings: '$301M',
        automation: '89%'
      },
      description: 'How a global technology company achieved complete autonomous operations and unprecedented business results',
      featured: true
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('revolutionary-content-2025-ultimate-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentPieces.length) % contentPieces.length);
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">REVOLUTIONARY CONTENT 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-xs">
              <TrendingUp className="w-4 h-4" />
              <span>800%+ ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Preview */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">NEW: {currentContent.type.toUpperCase()}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-lg text-gray-200 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {currentContent.metrics.savings || currentContent.metrics.revenue || currentContent.metrics.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.savings ? 'Savings' : currentContent.metrics.revenue ? 'Revenue' : 'Value'}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {currentContent.metrics.accuracy || currentContent.metrics.success || currentContent.metrics.automation}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.accuracy ? 'Accuracy' : currentContent.metrics.success ? 'Success Rate' : 'Automation'}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">
                      {currentContent.metrics.speed || currentContent.metrics.efficiency || currentContent.metrics.timeline}
                    </div>
                    <div className="text-sm text-gray-300">
                      {currentContent.metrics.speed ? 'Faster' : currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Read Full {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Featured Content</h3>
                      <div className="flex space-x-1">
                        {contentPieces.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-white' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {contentPieces.slice(0, 3).map((content, index) => (
                        <div
                          key={content.id}
                          className={`p-4 rounded-lg border transition-all cursor-pointer ${
                            index === currentSlide
                              ? 'bg-white/20 border-white/40'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className={`w-3 h-3 rounded-full mt-2 ${
                                content.type === 'blog' ? 'bg-blue-400' :
                                content.type === 'case-study' ? 'bg-green-400' : 'bg-purple-400'
                              }`}></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-white truncate">
                                {content.title}
                              </h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-xs text-green-400 font-medium">
                                  {content.metrics.roi} ROI
                                </span>
                                <span className="text-xs text-gray-300">
                                  {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Guide' : 'Article'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <button
                        onClick={prevSlide}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-sm text-gray-300">
                        {currentSlide + 1} of {contentPieces.length}
                      </span>
                      <button
                        onClick={nextSlide}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-black/20 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-lg font-bold">2,500+</div>
                  <div className="text-xs text-gray-300">Success Stories</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-lg font-bold">800%+</div>
                  <div className="text-xs text-gray-300">Average ROI</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-lg font-bold">$5B+</div>
                  <div className="text-xs text-gray-300">Revenue Generated</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;