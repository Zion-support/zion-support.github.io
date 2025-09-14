'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2026Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentSlides = [
    {
      id: 'enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide',
      subtitle: '600% ROI in 12 Months',
      description: 'Comprehensive framework for Fortune 500 companies achieving unprecedented returns through strategic AI implementation.',
      url: '/blog/ai-2025-enterprise-transformation-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'autonomous-operations',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      subtitle: '800% ROI Through Complete Automation',
      description: 'Discover how leading enterprises are achieving 800% ROI through fully autonomous business operations powered by advanced AI.',
      url: '/blog/ai-2025-autonomous-business-operations',
      metrics: {
        roi: '800%',
        automation: '95%',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-case',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$5.2B Company Achieves 600% ROI',
      description: 'Real-world case study of a Fortune 500 manufacturing giant achieving 600% ROI and $2.8B in annual savings.',
      url: '/case-studies/fortune-500-ai-transformation-600-percent-roi',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        satisfaction: '98%',
        timeline: '12 months'
      },
      type: 'case-study',
      featured: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation Success',
      subtitle: '$3.2B Health System Achieves 800% ROI',
      description: 'Major health system transforms patient care through AI, achieving 800% ROI and $2.1B in annual savings.',
      url: '/case-studies/healthcare-ai-transformation-800-percent-roi',
      metrics: {
        roi: '800%',
        savings: '$2.1B',
        accuracy: '99.7%',
        satisfaction: '96%'
      },
      type: 'case-study',
      featured: true
    },
    {
      id: 'roi-calculator',
      title: 'AI Transformation ROI Calculator 2025',
      subtitle: 'Calculate Your 600%+ ROI Potential',
      description: 'Interactive calculator and comprehensive guide to determine your AI transformation potential and expected returns.',
      url: '/resources/ai-transformation-roi-calculator-2025',
      metrics: {
        roi: '600%+',
        accuracy: '95%',
        users: '10,000+',
        satisfaction: '97%'
      },
      type: 'resource',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2026Banner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2026Banner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 REVOLUTIONARY 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the future of AI transformation with our latest content featuring 
            unprecedented ROI achievements and cutting-edge implementation strategies.
          </p>
        </div>

        {/* Main Content Slide */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-12">
          {/* Content Type and New Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white bg-opacity-20 text-white">
                {currentContent.type === 'blog' ? '📝 Blog Post' : 
                 currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white animate-pulse">
                NEW 2026
              </span>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Title and Subtitle */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
              {currentContent.title}
            </h3>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
              {currentContent.subtitle}
            </div>
            <p className="text-xl text-gray-200 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {Object.entries(currentContent.metrics).map(([key, value]) => (
              <div key={key} className="text-center bg-white bg-opacity-10 rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{value}</div>
                <div className="text-sm text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.url}
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Read Full Article →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors text-center"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contentSlides.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                  {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                  NEW
                </span>
              </div>
              
              <h4 className="text-lg font-bold mb-3 text-white leading-tight">
                {item.title}
              </h4>
              
              <div className="text-sm text-gray-200 mb-4">
                {item.subtitle}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {item.metrics.roi}
                </div>
                <div className="text-sm text-gray-300">
                  ROI
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Revolutionary Success Metrics</h3>
            <p className="text-xl opacity-90">
              Based on 500+ real-world AI transformation implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">600-800%</div>
              <div className="text-white font-semibold text-lg">Average ROI</div>
              <div className="text-gray-300">Revolutionary returns achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-white font-semibold text-lg">Success Stories</div>
              <div className="text-gray-300">Proven implementations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">$2.8B+</div>
              <div className="text-white font-semibold text-lg">Total Savings</div>
              <div className="text-gray-300">Generated for clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-white font-semibold text-lg">Accuracy Rate</div>
              <div className="text-gray-300">AI system performance</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/resources"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore All Revolutionary Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Start Your AI Revolution
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

export default RevolutionaryContent2026Banner;