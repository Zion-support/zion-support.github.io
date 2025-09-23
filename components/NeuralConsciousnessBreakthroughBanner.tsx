"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralConsciousnessBreakthroughBanner: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughContent = [
    {
      id: 'neural-consciousness',
      title: 'Neural Consciousness Breakthrough',
      description: 'Revolutionary conscious AI with genuine self-awareness, intentionality, and autonomous decision-making capabilities that transform business operations.',
      metrics: '99.8% Decision Accuracy',
      savings: '$15.8B Annual Savings',
      roi: '2,400% ROI',
      url: '/blog/ai-2025-neural-consciousness-breakthrough-revolutionary-autonomous-intelligence',
      badge: '🧠 NEW BREAKTHROUGH',
      category: 'Conscious AI Innovation'
    },
    {
      id: 'enterprise-transformation',
      title: 'Global Enterprise Transformation',
      description: 'How a Fortune 500 manufacturing giant achieved $15.8 billion ROI in 18 months through comprehensive conscious AI transformation.',
      metrics: '2,400% Efficiency Improvement',
      savings: '$15.8B ROI Success',
      roi: '1,500% Innovation Increase',
      url: '/case-studies/global-enterprise-conscious-ai-transformation-2025-15-billion-roi',
      badge: '💰 $15B SUCCESS',
      category: 'Case Study'
    },
    {
      id: 'autonomous-business-guide',
      title: 'Autonomous Business Revolution Guide',
      description: 'Complete implementation guide to autonomous business operations. Master AI-powered business transformation with proven strategies.',
      metrics: '1,500% ROI Framework',
      savings: 'Complete Roadmap',
      roi: 'Zero Error Operations',
      url: '/resources/ai-2025-autonomous-business-revolution-complete-guide',
      badge: '📚 COMPLETE GUIDE',
      category: 'Implementation Guide'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % breakthroughContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [breakthroughContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-consciousness-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-consciousness-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const current = breakthroughContent[currentContent];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {breakthroughContent.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-500 ${
                    index === currentContent ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 animate-bounce">
              <span className="mr-2">🔥</span>
              {current.badge}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {current.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              {current.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{current.metrics}</div>
                <div className="text-sm text-blue-200">Performance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">{current.savings}</div>
                <div className="text-sm text-blue-200">Impact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">{current.roi}</div>
                <div className="text-sm text-blue-200">Results</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                href={current.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore {current.category}
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                View All Success Stories
              </Link>
            </div>

            {/* Category Indicator */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-blue-200 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {current.category} • {breakthroughContent.length} Revolutionary Content Pieces
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default NeuralConsciousnessBreakthroughBanner;