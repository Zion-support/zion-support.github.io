'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryAI2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: '800%', label: 'Average ROI', color: 'text-green-400' },
    { value: '$4.8B', label: 'Total Savings', color: 'text-blue-400' },
    { value: '99%', label: 'Success Rate', color: 'text-purple-400' },
    { value: '500+', label: 'Fortune 500 Companies', color: 'text-yellow-400' }
  ];

  const features = [
    'Autonomous Enterprise Systems',
    'Multimodal Intelligence Revolution',
    'Quantum-Enhanced AI Processing',
    'Advanced Predictive Analytics',
    'Real-Time Optimization',
    'Self-Managing Operations'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [metrics.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryAI2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryAI2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY AI 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The AI Revolution That's
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transforming Fortune 500
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover how 500+ Fortune 500 companies are achieving unprecedented 800% ROI with revolutionary AI technologies that are reshaping entire industries.
          </p>
        </div>

        {/* Metrics Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Results Across 500+ Companies</h3>
            <p className="text-lg opacity-90">Real metrics from real implementations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-white/20 rounded-xl p-6 text-center transition-all duration-500 ${
                  index === currentMetric ? 'scale-105 bg-white/30' : ''
                }`}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="font-semibold">{feature}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Highlights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise AI Revolution Guide</h4>
                    <p className="text-sm opacity-75">Complete guide to achieving 800% ROI with AI implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Fortune 500 Success Stories</h4>
                    <p className="text-sm opacity-75">Real case studies with documented $4.8B in savings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Implementation Roadmaps</h4>
                    <p className="text-sm opacity-75">Step-by-step frameworks for 18-month transformation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why This Matters Now</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">800% ROI</div>
                  <div className="text-sm opacity-75">Average return on AI investment</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">18 Months</div>
                  <div className="text-sm opacity-75">Time to achieve full ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">99% Success</div>
                  <div className="text-sm opacity-75">Companies following our framework</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Read the Ultimate Guide
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
              Schedule Consultation
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/resources" className="opacity-75 hover:opacity-100 transition-opacity">
              Download Resources
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/blog" className="opacity-75 hover:opacity-100 transition-opacity">
              Read All Content
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025Banner;