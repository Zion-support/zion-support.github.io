'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, DollarSign, Clock, Award, Zap } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const revolutionaryContent = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months',
      description: 'Discover the exact strategies Fortune 500 companies use to achieve unprecedented returns through AI transformation.',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        timeline: '6 months',
        success: '97%'
      },
      color: 'from-purple-600 via-blue-600 to-indigo-600',
      icon: '🚀'
    },
    {
      id: 'fortune-500-case',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$2.8B Annual Savings',
      description: 'Real case study showing how a Fortune 100 company achieved 567% ROI and $2.8B in annual savings in just 18 months.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      type: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '156%'
      },
      color: 'from-green-600 via-emerald-600 to-teal-600',
      icon: '💎'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: '800% ROI in 18 Months',
      description: 'Complete step-by-step guide with proven frameworks, checklists, and real-world examples for AI transformation success.',
      url: '/resources/ai-2025-implementation-roadmap-800-roi',
      type: 'resource',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      color: 'from-orange-600 via-red-600 to-pink-600',
      icon: '📋'
    }
  ];

  if (!isVisible || isDismissed) return null;

  const content = revolutionaryContent[currentContent];

  return (
    <div className={`relative bg-gradient-to-r ${content.color} text-white overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-transparent to-white/5 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{content.icon}</span>
              <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                REVOLUTIONARY CONTENT 2025
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>{content.metrics.roi} ROI</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>{content.metrics.savings}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                {content.title}
              </h2>
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold text-yellow-300">
                  {content.subtitle}
                </span>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase">
                  {content.type}
                </span>
              </div>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={content.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-300">
                    {content.metrics.roi}
                  </div>
                  <div className="text-xs text-white/80">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-300">
                    {content.metrics.savings}
                  </div>
                  <div className="text-xs text-white/80">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-300">
                    {content.metrics.timeline}
                  </div>
                  <div className="text-xs text-white/80">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-300">
                    {content.metrics.success || content.metrics.efficiency}
                  </div>
                  <div className="text-xs text-white/80">
                    {content.metrics.success ? 'Success' : 'Efficiency'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Fortune 500 Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>500+ Success Stories</span>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentContent ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;