'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, DollarSign, Clock } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent = [
    {
      id: 'ai-enterprise-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations.',
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      description: 'How a Fortune 500 manufacturing giant achieved 1,200% ROI through revolutionary AI implementation.',
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'ai-implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies.',
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        autonomy: '95%'
      },
      description: 'Discover how autonomous AI systems are revolutionizing business operations with 3,000% ROI.',
      readingTime: '22 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025UltimateBreakthroughBanner');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % newContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed, newContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('newContent2025UltimateBreakthroughBanner', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold">NEW ULTIMATE BREAKTHROUGH CONTENT 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-sm font-semibold">FEATURED</span>
              </div>
            </div>

            {/* Content Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">NEW</span>
                  <span className="bg-blue-500 px-2 py-1 rounded text-xs font-semibold">{currentContent.type}</span>
                  <span className="text-sm text-gray-300 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {currentContent.readingTime}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      <span className="text-xs text-gray-300">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span className="text-xs text-gray-300">SAVINGS</span>
                    </div>
                    <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Read Full {currentContent.type}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                  >
                    Get AI Consultation
                  </Link>
                </div>
              </div>

              {/* Content Preview Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Success Metrics</h4>
                    <div className="flex space-x-1">
                      {newContent.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-white' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-300 uppercase tracking-wide">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-sm text-gray-300">
                      <strong>Featured Content:</strong> {currentContent.type} with proven results
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  {currentSlide + 1} of {newContent.length} featured content pieces
                </span>
                <div className="flex space-x-2">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-8 h-1 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  View All Content
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;