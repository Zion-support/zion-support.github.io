'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Featured content with new additions
  const featuredContent = [
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
        readingTime: '25 min read'
      },
      tags: ['AI Transformation', 'Business Revolution', 'ROI', 'Complete Guide'],
      featured: true,
      isNew: true
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
        readingTime: '12 min read'
      },
      tags: ['Case Study', 'Fortune 500', '1,000% ROI', 'Success Story'],
      featured: true,
      isNew: true
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
        readingTime: '25 min read'
      },
      tags: ['Implementation Guide', 'Success Framework', 'ROI', 'Best Practices'],
      featured: true,
      isNew: true
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      description: 'Explore the $2.3T generative AI market transformation and how enterprises are achieving 340% ROI.',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        readingTime: '20 min read'
      },
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Market Transformation'],
      featured: true,
      isNew: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      type: 'blog',
      description: 'Learn how MLOps is revolutionizing AI deployment with 99.9% reliability and 67% faster deployment.',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      metrics: {
        reliability: '99.9%',
        deploymentSpeed: '67%',
        savings: '$2.1B',
        readingTime: '18 min read'
      },
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      featured: true,
      isNew: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      description: 'Discover how a $500M retail company achieved 280% ROI through AI-powered operations and automation.',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        readingTime: '15 min read'
      },
      tags: ['Retail', 'AI Transformation', 'ROI', 'Success Story'],
      featured: true,
      isNew: false
    }
  ];

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-showcase-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025 - FEATURED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Collection 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI transformation content with proven results: 
            <span className="font-bold text-yellow-400"> 500%+ ROI</span>, 
            <span className="font-bold text-green-400"> $2.8B in savings</span>, and 
            <span className="font-bold text-blue-400"> 98% client satisfaction</span>
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Content</h3>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
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
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
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

              {/* Metrics */}
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
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Success Metrics</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(currentContent.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm opacity-75">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-bold text-yellow-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredContent.slice(0, 6).map((content, index) => (
            <div
              key={content.id}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-bold">
                  {content.type.toUpperCase()}
                </span>
                {content.isNew && (
                  <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>

              <h5 className="text-lg font-bold mb-3 line-clamp-2">
                {content.title}
              </h5>

              <p className="text-sm opacity-75 mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="space-y-2">
                {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="opacity-75">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-bold text-yellow-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Success Across Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-lg opacity-90">Total Savings</div>
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
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center"
            >
              <Users className="w-6 h-6 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 500+ companies that have transformed their business with AI
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

export default UltimateContentShowcase2025;