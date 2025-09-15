'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryAI2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Guide',
      subtitle: '1,000% ROI in 18 Months',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,000% ROI through comprehensive AI transformation strategies.',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      metrics: {
        roi: '1,000%',
        savings: '$4.2M',
        timeframe: '18 months',
        companies: '500+'
      },
      badge: 'Ultimate Guide',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Business Breakthrough',
      subtitle: '2,000% ROI Through Quantum AI',
      description: 'Discover how quantum computing is revolutionizing business operations with unprecedented 2,000% ROI.',
      url: '/blog/ai-2025-quantum-computing-business-breakthrough',
      metrics: {
        roi: '2,000%',
        savings: '$12.8M',
        speed: '1,000x faster',
        market: '$65B'
      },
      badge: 'Breakthrough',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$5.2B Company Achieves 2,000% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented 2,000% ROI through comprehensive AI transformation.',
      url: '/case-studies/fortune-500-ai-transformation-2000-roi-success',
      metrics: {
        roi: '2,000%',
        savings: '$1.2B',
        efficiency: '450%',
        satisfaction: '95%'
      },
      badge: 'Success Story',
      color: 'from-green-600 to-emerald-600'
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
    localStorage.setItem('revolutionary-ai-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-600/10 animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-green-600/10 to-emerald-600/10 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/20 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-cyan-500/20 rounded-full animate-bounce delay-4000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY AI 2025 CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Discover the ultimate guides and success stories that are reshaping enterprise operations
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content Preview */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${currentContent.color} text-white`}>
                    {currentContent.badge}
                  </span>
                  <span className="text-sm opacity-75">NEW CONTENT</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {currentContent.title}
                </h3>
                
                <div className="text-xl font-semibold text-yellow-400 mb-4">
                  {currentContent.subtitle}
                </div>
                
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-sm opacity-75 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-center"
                  >
                    Read Full Guide
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className={`w-64 h-64 bg-gradient-to-br ${currentContent.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-2xl font-bold">AI 2025</div>
                    <div className="text-sm opacity-75">Revolutionary Content</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-2000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Dismiss Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Dismiss this banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025UltimateBanner;