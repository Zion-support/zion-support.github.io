'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Zap, Target } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025 Enterprise Automation Mastery: Ultimate Success Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Discover how Fortune 500 companies achieve 500% ROI with AI automation. Complete implementation guide with real success stories.',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      description: 'Complete case study of how a Fortune 500 manufacturing company achieved 567% ROI and $2.8B in annual savings.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: Complete Guide to 500% ROI Success',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-complete-guide',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      description: 'The definitive guide to AI implementation success. Step-by-step roadmap to achieve 500% ROI in 12-18 months.',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%',
        roi: '488%'
      },
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements.',
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = (contentPieces[currentSlide] ?? contentPieces[0])!;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg font-bold">🚀 ULTIMATE CONTENT 2025 REVOLUTION</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>500% ROI Guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span>$2.8B+ Savings</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4 text-blue-400" />
                    <span>98% Success Rate</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  NEW: Ultimate Content Collection 2025
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Transform Your Business with 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    {" "}Revolutionary AI Content
                  </span>
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Access the most comprehensive collection of AI implementation guides, 
                  case studies, and resources that have helped Fortune 500 companies 
                  achieve <span className="font-bold text-yellow-400">500% ROI</span> and 
                  <span className="font-bold text-green-400"> $2.8B in annual savings</span>.
                </p>
              </div>

              {/* Featured Content Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-yellow-400">FEATURED CONTENT</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-white/70">
                    <span>{currentContent.readingTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {currentContent.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {currentContent.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-white/70">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-white/70">Savings</div>
                  </div>
                </div>
                
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Proven Success Metrics</h3>
                <p className="text-white/80 mb-6">
                  Our content has helped organizations achieve unprecedented results
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">500%</div>
                  <div className="text-sm text-white/80">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-1">$2.8B</div>
                  <div className="text-sm text-white/80">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-sm text-white/80">Success Stories</div>
                </div>
              </div>

              {/* Content Collection Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4">Ultimate Content Collection 2025</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Comprehensive Guides</span>
                    <span className="font-bold text-yellow-400">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Case Studies</span>
                    <span className="font-bold text-green-400">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Implementation Resources</span>
                    <span className="font-bold text-blue-400">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Total Reading Time</span>
                    <span className="font-bold text-purple-400">100+ min</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-4">
                <Link
                  href="/resources"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg text-center hover:from-purple-500 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
                >
                  Explore All Resources
                </Link>
                <Link
                  href="/contact"
                  className="block w-full border-2 border-white text-white font-bold py-4 px-6 rounded-lg text-center hover:bg-white hover:text-purple-900 transition-all duration-200"
                >
                  Get Custom Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <div className="font-bold text-yellow-400">500% ROI</div>
                <div className="text-white/70">Guaranteed Results</div>
              </div>
              <div>
                <div className="font-bold text-green-400">$2.8B+</div>
                <div className="text-white/70">Total Savings</div>
              </div>
              <div>
                <div className="font-bold text-blue-400">98%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
              <div>
                <div className="font-bold text-purple-400">500+</div>
                <div className="text-white/70">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;