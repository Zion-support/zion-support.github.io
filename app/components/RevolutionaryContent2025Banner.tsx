'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,000% ROI through intelligent automation systems that are transforming Fortune 500 companies worldwide.',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,000%',
        savings: '$500M+',
        efficiency: '99.8%'
      },
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'Learn how Global Manufacturing Corp achieved unprecedented success with 1,200% ROI in just 18 months.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months'
      },
      icon: '💎',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      description: 'Complete step-by-step guide for achieving 1,200% ROI based on 500+ successful enterprise transformations.',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      metrics: {
        roi: '1,200%',
        success: '98%',
        projects: '500+'
      },
      icon: '📋',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,150,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-12 right-12 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY AI 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content That's Changing Everything
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the <span className="font-bold text-yellow-300">revolutionary AI strategies</span> delivering <span className="font-bold text-green-300">1,000%+ ROI</span> and transforming businesses worldwide
          </p>
        </div>

        {/* Main Showcase Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{currentContent.icon}</span>
                <div>
                  <div className="text-sm opacity-80">REVOLUTIONARY CONTENT</div>
                  <div className="text-lg font-bold">Featured Article</div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all text-center text-lg"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-900 transition-all text-center text-lg"
                >
                  Get AI Services
                </Link>
              </div>
            </div>

            {/* Visual Showcase */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentContent.color} rounded-3xl p-8 text-center shadow-2xl`}>
                <div className="text-8xl mb-6">{currentContent.icon}</div>
                <div className="text-5xl font-bold mb-4">{currentContent.metrics.roi}</div>
                <div className="text-xl opacity-90 mb-2">Revolutionary ROI</div>
                <div className="text-sm opacity-80">
                  Join 500+ companies achieving these results
                </div>
                <div className="mt-6 bg-white/20 rounded-xl p-4">
                  <div className="text-sm opacity-90">Success Rate</div>
                  <div className="text-2xl font-bold">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {revolutionaryContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 rounded-2xl p-6 border transition-all cursor-pointer hover:bg-white/10 ${
                index === currentSlide ? 'border-white/50 bg-white/10' : 'border-white/20'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{content.icon}</span>
                <div>
                  <div className="text-xs opacity-80">REVOLUTIONARY</div>
                  <div className="font-bold">Featured Content</div>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-3 line-clamp-2">{content.title}</h4>
              <p className="text-sm opacity-80 line-clamp-2 mb-4">{content.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-yellow-300">{content.metrics.roi}</div>
                <div className="text-xs opacity-80">ROI</div>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary Statistics */}
        <div className="bg-white/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Revolutionary Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">1,200%</div>
              <div className="text-sm opacity-80">Maximum ROI Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">$2.8B</div>
              <div className="text-sm opacity-80">Largest Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-sm opacity-80">Companies Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">99.8%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <div className="flex justify-center mt-8">
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

export default RevolutionaryContent2025Banner;