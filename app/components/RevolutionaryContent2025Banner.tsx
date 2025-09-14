'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Award, CheckCircle, Zap, Clock } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Revolutionary content with new additions
  const revolutionaryContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution - Complete Guide',
      type: 'blog',
      description: 'Discover how AI is revolutionizing business operations with 500%+ ROI, $2.8B in savings, and 98% client satisfaction.',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution-complete-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '340%'
      },
      tags: ['AI Transformation', 'Business Revolution', 'ROI', 'Complete Guide'],
      featured: true,
      isNew: true,
      readingTime: '25 min read'
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success Story: $2.8B Company Achieves 1,000% ROI in 18 Months',
      type: 'case-study',
      description: 'Discover how a Fortune 500 company achieved unprecedented 1,000% ROI through comprehensive AI transformation.',
      url: '/case-studies/ai-transformation-1000-percent-roi-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        revenue: '$1.2B',
        timeline: '18 months'
      },
      tags: ['Case Study', 'Fortune 500', '1,000% ROI', 'Success Story'],
      featured: true,
      isNew: true,
      readingTime: '12 min read'
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      description: 'Complete roadmap to AI implementation success with 94% success rate, 340% average ROI, and 18-month timeline.',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      metrics: {
        successRate: '94%',
        roi: '340%',
        projects: '500+',
        timeline: '18 months'
      },
      tags: ['Implementation Guide', 'Success Framework', 'ROI', 'Best Practices'],
      featured: true,
      isNew: true,
      readingTime: '25 min read'
    }
  ];

  // Auto-rotate content every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-red-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-400 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025 - NEW</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive AI transformation content collection with proven results: 
            <span className="font-bold text-yellow-400"> 1,000% ROI</span>, 
            <span className="font-bold text-green-400"> $2.8B in savings</span>, and 
            <span className="font-bold text-blue-400"> 98% client satisfaction</span>
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Revolutionary Content</h3>
            <div className="flex space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
                {currentContent.isNew && (
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    NEW
                  </span>
                )}
                {currentContent.featured && (
                  <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                )}
              </div>

              <h4 className="text-2xl font-bold leading-tight">
                {currentContent.title}
              </h4>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="text-sm opacity-75 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-lg font-bold text-yellow-400">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Reading Time */}
              <div className="flex items-center text-sm opacity-75">
                <Clock className="w-4 h-4 mr-2" />
                {currentContent.readingTime}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview with Animation */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Revolutionary Results</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm opacity-75">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-bold text-yellow-400">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white border-opacity-20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-75">Reading Time</span>
                    <span className="font-bold text-blue-400">{currentContent.readingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Revolutionary Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,000%</div>
              <div className="text-lg opacity-90">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.8B</div>
              <div className="text-lg opacity-90">Total Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center"
            >
              <Award className="w-6 h-6 mr-2" />
              Explore All Revolutionary Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center"
            >
              <Star className="w-6 h-6 mr-2" />
              Start Your AI Revolution
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join the AI revolution with 500+ companies that have transformed their business
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;