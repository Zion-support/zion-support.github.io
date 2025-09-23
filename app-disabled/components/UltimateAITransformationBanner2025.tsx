'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';

const UltimateAITransformationBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 8 Months - $500M+ Annual Savings',
      description: 'Discover how Fortune 500 companies are achieving unprecedented success with AI transformation. Real case studies showing 1,200% ROI, $500M+ savings, and 99.8% customer satisfaction.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        satisfaction: '99.8%',
        timeline: '8 months'
      },
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$2.8B Annual Savings with 1,200% ROI in 8 Months',
      description: 'Real case study of a Fortune 500 manufacturing company that achieved unprecedented success with AI transformation, saving $2.8 billion annually.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1200-roi-success',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '8 months',
        satisfaction: '99.8%'
      },
      featured: true
    },
    {
      id: 'master-guide',
      title: 'AI Transformation Master Guide 2025',
      subtitle: 'Complete Roadmap to 1,200% ROI',
      description: 'The ultimate guide to AI transformation success. Step-by-step roadmap, proven strategies, and real-world case studies showing how to achieve 1,200% ROI in 8 months.',
      type: 'resource',
      url: '/resources/ai-transformation-master-guide-2025-ultimate',
      metrics: {
        roi: '1,200%',
        success_rate: '98%',
        timeline: '8 months',
        savings: '$500M+'
      },
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">NEW CONTENT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.timeline}</div>
                <div className="text-sm text-gray-300">Timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-400">
                  {currentContent.metrics.satisfaction || currentContent.metrics.success_rate}
                </div>
                <div className="text-sm text-gray-300">
                  {currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {/* Content Preview Cards */}
            <div className="space-y-3">
              {content.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-300">{item.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-300">ROI</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformationBanner2025;