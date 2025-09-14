'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2026Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'enterprise-transformation-ultimate',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide - 600% ROI in 12 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-transformation-ultimate-guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 600% ROI through comprehensive AI transformation strategies.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-600-roi',
      title: 'Fortune 500 AI Transformation: $5.2B Company Achieves 600% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-600-percent-roi',
      description: 'Discover how a Fortune 500 manufacturing giant transformed their operations with AI, achieving 600% ROI and $2.8B in annual savings.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        satisfaction: '98%',
        timeline: '12 months'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'roi-calculator-2025',
      title: 'AI Transformation ROI Calculator 2025: Calculate Your 600%+ ROI Potential',
      type: 'resource',
      url: '/resources/ai-transformation-roi-calculator-2025',
      description: 'Interactive ROI calculator and comprehensive guide to determine your AI transformation potential and expected returns.',
      metrics: {
        roi: '600%+',
        accuracy: '95%',
        users: '10,000+',
        satisfaction: '97%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'autonomous-operations',
      title: 'AI 2025: The Autonomous Business Operations Revolution - 800% ROI Through Complete Automation',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-operations',
      description: 'Discover how leading enterprises are achieving 800% ROI through autonomous business operations powered by advanced AI systems.',
      metrics: {
        roi: '800%',
        automation: '95%',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'healthcare-800-roi',
      title: 'Healthcare AI Transformation: $3.2B Health System Achieves 800% ROI with Autonomous Operations',
      type: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-800-percent-roi',
      description: 'Discover how a major health system transformed patient care through AI, achieving 800% ROI and $2.1B in annual savings.',
      metrics: {
        roi: '800%',
        savings: '$2.1B',
        accuracy: '99.7%',
        satisfaction: '96%'
      },
      featured: true,
      isNew: true
    }
  ];

  const categories = ['All', 'Blog', 'Case Study', 'Resource'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredContent = selectedCategory === 'All' 
    ? contentPieces 
    : contentPieces.filter(item => item.type === selectedCategory.toLowerCase());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2026Showcase_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2026Showcase_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate AI Content Showcase 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest AI transformation content featuring 600-800% ROI success stories, 
            comprehensive guides, and interactive tools to accelerate your AI journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                  {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                </span>
                {item.isNew && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white animate-pulse">
                    NEW
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={item.url}
                className="block w-full bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics Banner */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Success Metrics</h3>
            <p className="text-xl opacity-90">
              Our content is based on real-world implementations and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">600-800%</div>
              <div className="text-white font-semibold">Average ROI</div>
              <div className="text-gray-300 text-sm">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-white font-semibold">Success Stories</div>
              <div className="text-gray-300 text-sm">Real-world implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B+</div>
              <div className="text-white font-semibold">Total Savings</div>
              <div className="text-gray-300 text-sm">Generated for clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-white font-semibold">Accuracy Rate</div>
              <div className="text-gray-300 text-sm">AI system performance</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore All Resources
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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

export default UltimateContent2026Showcase;