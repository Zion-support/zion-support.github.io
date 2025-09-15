'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,000% ROI Through Intelligent Automation',
      description: 'Discover how Fortune 500 companies are achieving unprecedented success with AI transformation, generating $500M+ annual savings and 99.8% operational efficiency.',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      type: 'blog',
      metrics: {
        roi: '1,000%',
        savings: '$500M+',
        efficiency: '99.9%',
        time: '18 min read'
      },
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: 'Ultimate Success Story in 18 Months',
      description: 'Learn how Global Manufacturing Corp achieved 1,200% ROI and $2.8B in annual savings through comprehensive AI transformation across all operations.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      type: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '99.8%',
        timeline: '18 months'
      },
      badge: 'FEATURED',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 1,200% ROI in 18 Months',
      description: 'Complete step-by-step guide for achieving 1,200% ROI through AI implementation, based on analysis of 500+ successful enterprise transformations.',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      type: 'resource',
      metrics: {
        roi: '1,200%',
        success: '98%',
        projects: '500+',
        timeline: '18 months'
      },
      badge: 'GUIDE',
      color: 'from-indigo-600 to-purple-600'
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
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AI 2025 CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transform Your Business with AI 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the ultimate AI transformation strategies that are delivering <span className="font-bold text-yellow-300">1,000%+ ROI</span> and <span className="font-bold text-green-300">$500M+ savings</span> for Fortune 500 companies
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  currentContent.badge === 'NEW' ? 'bg-green-500' :
                  currentContent.badge === 'FEATURED' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`}>
                  {currentContent.badge}
                </span>
                <span className="text-sm opacity-80 capitalize">{currentContent.type}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.automation}</div>
                  <div className="text-sm text-gray-300">Efficiency/Automation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentContent.color} rounded-2xl p-8 text-center`}>
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-4xl font-bold mb-2">{currentContent.metrics.roi}</div>
                <div className="text-lg opacity-90">Average ROI</div>
                <div className="mt-4 text-sm opacity-80">
                  Based on 500+ successful implementations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 rounded-xl p-6 border transition-all cursor-pointer ${
                index === currentSlide ? 'border-white/40 bg-white/10' : 'border-white/20 hover:border-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  content.badge === 'NEW' ? 'bg-green-500' :
                  content.badge === 'FEATURED' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`}>
                  {content.badge}
                </span>
                <span className="text-sm opacity-80 capitalize">{content.type}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 line-clamp-2">{content.title}</h4>
              <p className="text-sm opacity-80 line-clamp-2">{content.subtitle}</p>
              <div className="mt-4 text-2xl font-bold text-yellow-300">{content.metrics.roi}</div>
              <div className="text-xs opacity-80">ROI</div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-white/5 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-300">500+</div>
              <div className="text-sm opacity-80">Successful Implementations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300">1,200%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-300">$2.8B</div>
              <div className="text-sm opacity-80">Total Savings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300">99.8%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDismiss}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;