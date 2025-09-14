'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource';
  title: string;
  url: string;
  readingTime: string;
  metrics: {
    roi: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  featured: boolean;
}

const NewContent2025UltimateShowcaseBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBannerDismissed', 'true');
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? contentItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === contentItems.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate slides every 8 seconds
  useEffect(() => {
    if (!isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === contentItems.length - 1 ? 0 : prev + 1));
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-transformation-ultimate-guide',
      type: 'blog',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide - 600% ROI Revolution',
      url: '/blog/ai-2025-enterprise-transformation-ultimate-guide',
      readingTime: '25 min read',
      metrics: {
        roi: '600%',
        implementation_time: '18 months',
        cost_reduction: '78%',
        efficiency_gains: '340%',
        success_rate: '94%'
      },
      featured: true
    },
    {
      id: 'ai-transformation-600-percent-roi-success-story',
      type: 'case-study',
      title: 'AI Transformation Success Story: $15B Company Achieves 600% ROI in 18 Months',
      url: '/case-studies/ai-transformation-2025-600-percent-roi-success-story',
      readingTime: '18 min read',
      metrics: {
        roi: '600%',
        annual_savings: '$3.2B',
        efficiency_gains: '340%',
        quality_improvements: '94%',
        customer_satisfaction: '97%'
      },
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-roadmap-2025',
      type: 'resource',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 600% ROI in 18 Months',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      readingTime: '35 min read',
      metrics: {
        roi: '600%',
        implementation_time: '18 months',
        success_rate: '94%',
        cost_reduction: '78%',
        efficiency_gains: '340%'
      },
      featured: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Zap className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">600% ROI ACHIEVED</span>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content Preview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Content 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the breakthrough strategies and real-world success stories that are delivering 
                <span className="font-bold text-yellow-300"> 600% ROI</span> in just 18 months.
              </p>
            </div>

            {/* Current Content Item */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(currentItem.type)}`}>
                  {getTypeIcon(currentItem.type)}
                  <span className="text-sm font-medium capitalize">{currentItem.type.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-blue-100">
                  <span>{currentItem.readingTime}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {currentItem.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-300">{currentItem.metrics.roi}</div>
                  <div className="text-sm text-blue-100">ROI</div>
                </div>
                {currentItem.metrics.annual_savings && (
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-300">{currentItem.metrics.annual_savings}</div>
                    <div className="text-sm text-blue-100">Annual Savings</div>
                  </div>
                )}
                {currentItem.metrics.efficiency_gains && (
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-300">{currentItem.metrics.efficiency_gains}</div>
                    <div className="text-sm text-blue-100">Efficiency Gains</div>
                  </div>
                )}
                {currentItem.metrics.customer_satisfaction && (
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-300">{currentItem.metrics.customer_satisfaction}</div>
                    <div className="text-sm text-blue-100">Satisfaction</div>
                  </div>
                )}
              </div>
              
              <Link
                href={currentItem.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Statistics and CTA */}
          <div className="space-y-6">
            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">600%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-2">$3.2B</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-300 mb-2">340%</div>
                <div className="text-sm text-blue-100">Efficiency Gains</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-2">94%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Join 500+ companies achieving 600% ROI with our proven AI transformation strategies.
              </p>
              
              <div className="space-y-3">
                <Link
                  href="/resources/ai-implementation-ultimate-roadmap-2025"
                  className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Implementation Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/contact"
                  className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-300 to-blue-300 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;