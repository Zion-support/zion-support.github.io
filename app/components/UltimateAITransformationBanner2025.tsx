'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  readingTime?: string;
}

const UltimateAITransformationBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent: ContentItem[] = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution - Complete Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read'
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '99.8%'
      },
      readingTime: '15 min read'
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Transformation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-transformation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        savings: '$2.8B+',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '30 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

  const currentContent = featuredContent[currentSlide];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource Guide';
      default: return 'Content';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI TRANSFORMATION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the most comprehensive AI transformation strategies achieving <span className="font-bold text-yellow-300">1,200% ROI</span> and <span className="font-bold text-yellow-300">$2.8B+ savings</span>
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Content</h3>
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Preview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                  {getTypeLabel(currentContent.type)}
                </span>
                {currentContent.readingTime && (
                  <span className="text-blue-200 text-sm flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {currentContent.readingTime}
                  </span>
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white leading-tight">
                {currentContent.title}
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      {key === 'roi' && <ChartBarIcon className="w-5 h-5 text-green-400" />}
                      {key === 'savings' && <CurrencyDollarIcon className="w-5 h-5 text-yellow-400" />}
                      {key === 'efficiency' && <ChartBarIcon className="w-5 h-5 text-blue-400" />}
                      {key === 'satisfaction' && <StarIcon className="w-5 h-5 text-purple-400" />}
                      <div>
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-blue-200 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center space-y-4">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Read Full {getTypeLabel(currentContent.type)}
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/ai-transformation-consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Transformation Consultation
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1,200%</div>
            <div className="text-blue-200">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">$2.8B+</div>
            <div className="text-blue-200">Annual Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">89%</div>
            <div className="text-blue-200">Efficiency Gains</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">98%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="text-center">
          <p className="text-blue-200 mb-4">
            Explore our complete collection of AI transformation resources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Resources & Guides
            </Link>
            <Link
              href="/ai-transformation"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              AI Transformation Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Dismiss banner"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default UltimateAITransformationBanner2025;