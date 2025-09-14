'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        efficiency: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      description: 'Discover how Fortune 500 companies are achieving 800% ROI with AI automation mastery. Complete implementation guide with real-world success stories.'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Company Achieves 800% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-800-percent-roi-ultimate-success',
      metrics: {
        roi: '800%',
        savings: '$4.16B',
        efficiency: '89%',
        satisfaction: '99.2%'
      },
      readingTime: '22 min read',
      featured: true,
      description: 'How a $5.2B Fortune 500 manufacturing company achieved 800% ROI through comprehensive AI transformation in just 18 months.'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-800-percent-roi',
      metrics: {
        roi: '800%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '99.7%'
      },
      readingTime: '35 min read',
      featured: true,
      description: 'Complete step-by-step roadmap to achieve 800% ROI with AI implementation. Proven strategies based on 500+ successful enterprise implementations.'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Breakthrough',
      type: 'Blog Post',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '99.9%',
        satisfaction: '99.97%'
      },
      readingTime: '28 min read',
      featured: true,
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements and 99.97% accuracy.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 2025 COLLECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content That's Transforming Enterprises
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the proven strategies, frameworks, and success stories that are generating 
            <span className="font-bold text-yellow-300"> 800% ROI</span> and 
            <span className="font-bold text-yellow-300"> $2.8+ billion in savings</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentContent.type}
                </div>
                <div className="flex items-center text-yellow-400">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentContent.readingTime}</span>
                </div>
                {currentContent.featured && (
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-blue-100 text-lg leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium text-blue-200">ROI Achievement</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-sm font-medium text-blue-200">Annual Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Content Grid Preview */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-center mb-6">Complete Content Collection</h4>
              <div className="grid grid-cols-2 gap-4">
                {featuredContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`bg-white/10 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      index === currentSlide ? 'ring-2 ring-yellow-400 bg-white/20' : 'hover:bg-white/15'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="text-xs font-semibold text-blue-300 mb-2">{content.type}</div>
                    <div className="text-sm font-bold mb-2 line-clamp-2">{content.title}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-green-400 font-bold">{content.metrics.roi} ROI</div>
                      <div className="text-xs text-blue-300">{content.readingTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">800%</div>
            <div className="text-sm text-blue-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
            <div className="text-sm text-blue-200">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-sm text-blue-200">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.7%</div>
            <div className="text-sm text-blue-200">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Your AI Transformation Assessment
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore All Resources
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;