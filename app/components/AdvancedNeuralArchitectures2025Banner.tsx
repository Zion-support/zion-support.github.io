'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Brain, Zap, Target, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    performance_improvement?: string;
    roi?: string;
    accuracy?: string;
    annual_savings?: string;
  };
  reading_time: string;
  featured?: boolean;
}

const AdvancedNeuralArchitectures2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('neural-architectures-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const contentItems: ContentItem[] = [
    {
      id: 'neural-architectures-guide',
      title: 'AI 2025: Advanced Neural Architectures - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough',
      metrics: {
        performance_improvement: '400%',
        accuracy: '99.7%',
        roi: '340%'
      },
      reading_time: '15 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Neural Architecture Success: $2.8B Annual Savings',
      type: 'case-study',
      url: '/case-studies/ai-2025-advanced-neural-architectures-fortune-500-success-story',
      metrics: {
        annual_savings: '$2.8B',
        performance_improvement: '400%',
        roi: '340%'
      },
      reading_time: '12 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Advanced Neural Architectures Implementation Guide: Complete Roadmap',
      type: 'resource',
      url: '/resources/ai-2025-advanced-neural-architectures-implementation-guide',
      metrics: {
        performance_gains: '400%',
        roi: '340%',
        accuracy: '99.7%'
      },
      reading_time: '25 min read',
      featured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('neural-architectures-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="w-5 h-5" />;
      case 'case-study':
        return <Target className="w-5 h-5" />;
      case 'resource':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-8 right-1/4 w-20 h-20 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">🧠 Advanced Neural Architectures 2025</h2>
              <p className="text-sm opacity-90">Revolutionary AI Technology Breakthrough</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content showcase */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(currentItem.type)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                    {currentItem.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {currentItem.featured && (
                    <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <span className="text-sm opacity-75">{currentItem.reading_time}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                {currentItem.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(currentItem.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-xs opacity-75 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                href={currentItem.url}
                className="inline-flex items-center px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Statistics and CTA */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Revolutionary Performance Gains</h3>
              <p className="text-lg opacity-90 mb-6">
                Advanced neural architectures delivering unprecedented results for enterprise organizations
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-1">400%</div>
                <div className="text-sm opacity-75">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-1">99.7%</div>
                <div className="text-sm opacity-75">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-1">340%</div>
                <div className="text-sm opacity-75">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-1">$2.8B</div>
                <div className="text-sm opacity-75">Annual Savings</div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/resources/ai-2025-advanced-neural-architectures-implementation-guide"
                className="block w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="block w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralArchitectures2025Banner;