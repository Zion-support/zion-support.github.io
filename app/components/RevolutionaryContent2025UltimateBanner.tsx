'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
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
=======
import { ChevronRight, Star, TrendingUp, Users, Clock, ArrowRight, X, Play, BookOpen, FileText, Zap, Target, Award } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'edge-computing-revolution',
      title: 'Edge Computing Revolution',
      subtitle: '450% ROI with 67% Latency Reduction',
      description: 'Transform your AI deployment with edge computing solutions',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      metrics: { primary: '450% ROI', secondary: '$2.3M Savings' },
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Technology Innovation'
    },
    {
      id: 'sustainable-technology-revolution',
      title: 'Sustainable AI Revolution',
      subtitle: '380% ROI with 67% Carbon Reduction',
      description: 'Achieve environmental responsibility with green AI technologies',
      url: '/blog/ai-2025-sustainable-technology-revolution',
      metrics: { primary: '380% ROI', secondary: '67% Carbon Reduction' },
      icon: Star,
      gradient: 'from-green-500 to-emerald-500',
      category: 'Sustainability'
    },
    {
      id: 'financial-services-transformation',
      title: 'Banking Transformation',
      subtitle: '520% ROI with $67M Annual Savings',
      description: 'Revolutionary financial services AI implementation success',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      metrics: { primary: '520% ROI', secondary: '99.8% Satisfaction' },
      icon: Target,
      gradient: 'from-purple-500 to-violet-500',
      category: 'Financial Services'
    },
    {
      id: 'implementation-ultimate-roadmap',
      title: 'Implementation Roadmap',
      subtitle: '600% ROI in 12 Months',
      description: 'Complete guide to AI implementation success',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      metrics: { primary: '600% ROI', secondary: '89% Success Rate' },
      icon: Award,
      gradient: 'from-orange-500 to-red-500',
      category: 'Implementation'
>>>>>>> origin/main
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [revolutionaryContent.length]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025UltimateBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2025UltimateBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2 text-white" />
            <span className="text-sm font-bold text-white">REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Ultimate AI Success Stories
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover proven strategies delivering <span className="font-bold text-yellow-300">380-600% ROI</span> across industries
          </p>
        </div>

        {/* Main Content Display */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Content Info */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentContent.gradient}`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
                  {currentContent.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentContent.title}
              </h3>

              <p className="text-xl font-semibold text-yellow-300">
                {currentContent.subtitle}
              </p>

              <p className="text-blue-100 text-lg">
                {currentContent.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.primary}</div>
                  <div className="text-sm text-blue-200">Primary Metric</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.secondary}</div>
                  <div className="text-sm text-blue-200">Secondary Metric</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Visual Element */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${currentContent.gradient} flex items-center justify-center shadow-2xl`}>
                  <currentContent.icon className="w-16 h-16 text-white" />
                </div>
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-2 rounded-full border-2 border-white/10 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Navigation and Progress */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md bg-white/20 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / revolutionaryContent.length) * 100}%` }}
            />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-blue-200">380-600% ROI Range</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200">4 Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-blue-200">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center px-8 py-3 bg-white/10 border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            View All Revolutionary Content
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;