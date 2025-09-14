'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Download, CheckCircle, Zap, Award, Users, DollarSign, BarChart3, ArrowRight, Brain } from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'neural-interface-revolution',
      title: 'Neural Interface Revolution',
      subtitle: '1,200% ROI with Brain-Computer Integration',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        decisionSpeed: '3,000%',
        savings: '$2.8B'
      },
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'autonomous-enterprise',
      title: 'Autonomous Enterprise Transformation',
      subtitle: '2,000% ROI with Self-Managing AI',
      url: '/case-studies/ai-2025-autonomous-enterprise-transformation-ultimate-success',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B',
        efficiency: '99.9%'
      },
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: '🤖'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      subtitle: '3,000% ROI with Quantum-Enhanced AI',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '3,000%',
        marketSize: '$500B',
        savings: '$25.7B'
      },
      gradient: 'from-cyan-600 via-blue-600 to-purple-600',
      icon: '⚛️'
    },
    {
      id: 'enterprise-automation',
      title: 'Enterprise Automation Success',
      subtitle: '4,000% ROI with Autonomous Systems',
      url: '/case-studies/ai-2025-enterprise-automation-ultimate-success-story',
      metrics: {
        roi: '4,000%',
        savings: '$8.9B',
        innovation: '600%'
      },
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  // Check localStorage for dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-banner-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-banner-2025-dismissed', 'true');
  };

  const currentContent = contentPieces[currentIndex];

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentContent.gradient} text-white`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute top-8 right-8 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-bounce" />
        <div className="absolute bottom-4 left-8 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute bottom-8 right-4 w-14 h-14 bg-white bg-opacity-10 rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{currentContent.icon}</span>
              <div>
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1 mb-2">
                  <span className="text-sm font-medium">🚀 REVOLUTIONARY AI 2025</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentContent.title}
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  {currentContent.subtitle}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-lg font-bold">{value}</div>
                  <div className="text-sm opacity-80 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Full Article →
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-2">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
          <div className="text-sm opacity-80">
            {currentIndex + 1} of {contentPieces.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / contentPieces.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;