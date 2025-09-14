'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Zap, Target, CheckCircle } from 'lucide-react';

const UltimateBusinessAutomation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-business-automation-revolution',
      title: 'AI 2025: The Ultimate Business Automation Revolution',
      description: 'Transform your enterprise with next-generation AI automation that delivers 15,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '15,000%',
        savings: '$85.2B',
        accuracy: '99.97%',
        automation: '98.7%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ultimate-automation-success',
      title: 'Fortune 500 Ultimate Business Automation Success',
      description: '$85.2B Annual Savings - 15,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-business-automation-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$85.2B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'ultimate-automation-implementation-guide',
      title: 'AI 2025 Ultimate Business Automation Implementation Guide',
      description: 'Complete Roadmap to 15,000% ROI',
      type: 'resource',
      url: '/resources/ai-2025-ultimate-business-automation-implementation-guide',
      metrics: {
        roi: '15,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '35 min read',
      isNew: true
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
    localStorage.setItem('ultimate-business-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">🚀 ULTIMATE BREAKTHROUGH 2025</span>
            </div>
            <div className="flex items-center bg-green-500/20 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-semibold">15,000% ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                AI 2025: The Ultimate Business Automation Revolution
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Transform your enterprise with next-generation AI automation that delivers 
                <span className="text-yellow-400 font-bold"> 15,000% ROI</span> and 
                <span className="text-green-400 font-bold"> $85.2B in annual savings</span>
              </p>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium text-blue-200">ROI</span>
                </div>
                <div className="text-2xl font-bold text-green-400">15,000%</div>
                <div className="text-xs text-blue-300">Within 18 months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-blue-200">Savings</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">$85.2B</div>
                <div className="text-xs text-blue-300">Annual savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-200">Accuracy</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">99.97%</div>
                <div className="text-xs text-blue-300">Process accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium text-blue-200">Automation</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">98.7%</div>
                <div className="text-xs text-blue-300">Operations automated</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-ultimate-business-automation-revolution-ultimate-breakthrough"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Read Ultimate Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">LIVE NOW</span>
                </div>
                <div className="flex space-x-1">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-blue-200 uppercase tracking-wide">
                    {currentContent.type === 'blog' ? '📝 Blog Post' : 
                     currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {currentContent.description}
                </p>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-4 text-xs text-blue-300">
                    <span>⏱️ {currentContent.readingTime}</span>
                    <span>📈 {currentContent.metrics.roi} ROI</span>
                  </div>
                  <Link
                    href={currentContent.url}
                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Content Preview */}
            <div className="grid grid-cols-1 gap-3">
              {featuredContent.slice(0, 2).map((content, index) => (
                <Link
                  key={content.id}
                  href={content.url}
                  className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-blue-200 uppercase">
                          {content.type === 'blog' ? '📝' : 
                           content.type === 'case-study' ? '📊' : '📚'}
                        </span>
                        {content.isNew && (
                          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                            NEW
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight mb-1">
                        {content.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-blue-300">
                        <span>📈 {content.metrics.roi}</span>
                        <span>⏱️ {content.readingTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessAutomation2025Banner;