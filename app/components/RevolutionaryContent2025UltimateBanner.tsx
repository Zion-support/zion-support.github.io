'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    }
  ];

  useEffect(() => {
import { X, ArrowRight, Star, TrendingUp, Users, Award, Zap, Target } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentMetric((prev) => (prev + 1) % successMetrics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-ultimate-dismissed', 'true');
  };

  const successMetrics = [
    { value: '800%', label: 'Average ROI', icon: TrendingUp, color: 'text-yellow-400' },
    { value: '$2.8B', label: 'Annual Savings', icon: Target, color: 'text-green-400' },
    { value: '94%', label: 'Success Rate', icon: Star, color: 'text-purple-400' },
    { value: '500+', label: 'Fortune 500', icon: Users, color: 'text-blue-400' }
  ];

  const featuredContent = [
    {
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI solutions.',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      roi: '600%',
      readingTime: '22 min read',
      isNew: true
    },
    {
      title: 'AI Transformation 2025: $3.2B Company Achieves 750% ROI - Ultimate Success Story',
      description: 'How a Fortune 100 manufacturing company transformed operations with AI, achieving 750% ROI.',
      url: '/case-studies/ai-transformation-2025-ultimate-success-story',
      type: 'Case Study',
      roi: '750%',
      readingTime: '18 min read',
      isNew: true
    },
    {
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      description: 'Complete step-by-step guide to implementing AI in your enterprise. Achieve 800% ROI with our proven methodology.',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      type: 'Resource',
      roi: '800%',
      readingTime: '35 min read',
      isNew: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentMetricData = successMetrics[currentMetric];
  const MetricIcon = currentMetricData.icon;

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-500/5 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
              <Zap className="w-4 h-4" />
              <span>REVOLUTIONARY 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
              <Award className="w-4 h-4" />
              <span>800% ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
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
              </div>
            </div>
          </div>
        </div>

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
=======
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            🚀 The Most Revolutionary AI Content Collection of 2025
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock the secrets to 800% ROI with our comprehensive AI transformation resources. 
            Learn from Fortune 500 success stories and implement proven strategies that deliver unprecedented results.
          </p>

          {/* Animated Success Metric */}
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <MetricIcon className={`w-8 h-8 ${currentMetricData.color}`} />
            <div className="text-center">
              <div className={`text-4xl font-bold ${currentMetricData.color}`}>
                {currentMetricData.value}
              </div>
              <div className="text-indigo-200 text-sm font-semibold">
                {currentMetricData.label}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <div className="text-yellow-400 text-sm font-bold">
                  {content.roi} ROI
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h3>

              <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-indigo-200 text-xs">
                  {content.readingTime}
                </span>
                <Link
                  href={content.url}
                  className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-indigo-200 text-sm font-semibold">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources/ai-implementation-ultimate-roadmap-2025"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-900 font-bold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Award className="w-6 h-6 mr-3" />
              Get Ultimate Implementation Roadmap
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              href="/case-studies/ai-transformation-2025-ultimate-success-story"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              <Users className="w-6 h-6 mr-3" />
              View Success Stories
            </Link>
          </div>
          
          <p className="text-indigo-200 text-sm mt-6 max-w-2xl mx-auto">
            Join 500+ Fortune 500 companies that have already achieved 800% ROI with our proven AI transformation methodologies. 
            Start your journey to unprecedented success today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;