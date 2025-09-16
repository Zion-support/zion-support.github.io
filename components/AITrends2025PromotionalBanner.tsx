"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AITrends2025PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTrend, setCurrentTrend] = useState(0);

  const aiTrends = [
    {
      title: 'Neural Superintelligence',
      description: '12,000% ROI through next-generation AI consciousness',
      roi: '12,000%',
      savings: '$45.8B+',
      icon: '🧠',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Quantum-Neural Fusion',
      description: '25,000% ROI with revolutionary quantum computing integration',
      roi: '25,000%',
      savings: '$500B+',
      icon: '⚛️',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Autonomous Enterprise Systems',
      description: '7,500% ROI through fully autonomous business operations',
      roi: '7,500%',
      savings: '$25.8B+',
      icon: '🤖',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Advanced Neural Architectures',
      description: '2,800% ROI with cutting-edge neural network designs',
      roi: '2,800%',
      savings: '$4.2B+',
      icon: '🔬',
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prevTrend) => (prevTrend + 1) % aiTrends.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('aiTrends2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('aiTrends2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentTrendData = aiTrends[currentTrend];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔥 AI TRENDS 2025
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              BREAKTHROUGH
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Revolutionary AI Trends 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Discover the breakthrough AI technologies that are transforming businesses 
                worldwide with unprecedented ROI results and revolutionary capabilities.
              </p>
            </div>

            {/* Trend Indicators */}
            <div className="flex space-x-2">
              {aiTrends.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTrend ? 'bg-yellow-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400">50,000%</div>
                <div className="text-sm text-blue-100">Max ROI Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-green-400">$1T+</div>
                <div className="text-sm text-blue-100">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ai-trends-2025"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
              >
                Explore AI Trends
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Current Trend Showcase */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentTrendData.color} rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl">{currentTrendData.icon}</div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{currentTrendData.roi}</div>
                  <div className="text-sm text-white/80">ROI</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {currentTrendData.title}
              </h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                {currentTrendData.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{currentTrendData.savings}</div>
                  <div className="text-sm text-white/80">Annual Savings</div>
                </div>
                <Link
                  href="/ai-trends-2025"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-sm text-blue-100">Fortune 500 Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm text-blue-100">Support Available</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm text-blue-100">Uptime Guarantee</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-blue-400 mb-2">Global</div>
            <div className="text-sm text-blue-100">Worldwide Presence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrends2025PromotionalBanner;