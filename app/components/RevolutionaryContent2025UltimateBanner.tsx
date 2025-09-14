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
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;