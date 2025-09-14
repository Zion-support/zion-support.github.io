'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Ultimate Business Breakthrough',
      type: 'Blog Post',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        decisionSpeed: '3,000%',
        innovation: '500%',
        efficiency: '800%',
        savings: '$2.8B'
      },
      description: 'Transform your business with direct brain-computer integration achieving unprecedented 1,200% ROI and 3,000% faster decision-making.',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'autonomous-enterprise-transformation',
      title: 'AI 2025 Autonomous Enterprise Transformation: $5.2B Company Achieves 2,000% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-2025-autonomous-enterprise-transformation-ultimate-success',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B',
        efficiency: '99.9%',
        innovation: '400%',
        satisfaction: '96%'
      },
      description: 'Discover how a Fortune 100 company achieved 2,000% ROI through fully autonomous AI systems and $5.2B in annual savings.',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: '🤖'
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 2025 Ultimate Implementation Master Guide: From Strategy to 2,500% ROI',
      type: 'Resource',
      url: '/resources/ai-2025-ultimate-implementation-master-guide',
      metrics: {
        roi: '2,500%',
        successRate: '98%',
        implementationTime: '12 months',
        averageSavings: '$5.2B',
        marketOpportunity: '$8.9T'
      },
      description: 'The complete blueprint for achieving 2,500% ROI through strategic AI implementation with proven methodologies and best practices.',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      icon: '📚'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $500B Market Transformation',
      type: 'Blog Post',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '3,000%',
        marketSize: '$500B',
        efficiency: '1,200%',
        accuracy: '99.8%',
        savings: '$25.7B'
      },
      description: 'Leverage quantum-enhanced AI to achieve 3,000% ROI and transform your business with $500B market opportunities.',
      gradient: 'from-cyan-600 via-blue-600 to-purple-600',
      icon: '⚛️'
    },
    {
      id: 'enterprise-automation-success',
      title: 'AI 2025 Enterprise Automation Ultimate Success Story: $8.9B Company Achieves 4,000% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-2025-enterprise-automation-ultimate-success-story',
      metrics: {
        roi: '4,000%',
        savings: '$8.9B',
        efficiency: '99.9%',
        innovation: '600%',
        satisfaction: '97%'
      },
      description: 'Learn how a Fortune 50 company achieved 4,000% ROI and $8.9B in annual savings through autonomous AI systems.',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentPieces.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const currentContent = contentPieces[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-10`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce" />
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🚀 ULTIMATE AI 2025 CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary AI Content That Delivers
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Discover the most successful AI transformations achieving up to 4,000% ROI with proven strategies and real-world case studies.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {/* Content Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{currentContent.icon}</span>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {currentContent.type}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {currentIndex + 1} of {contentPieces.length}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {currentContent.title}
            </h3>

            {/* Content Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article →
              </Link>
              <Link
                href="/resources"
                className="flex-1 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / contentPieces.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentPieces.slice(0, 3).map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-90 rounded-xl p-6 hover:bg-opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{content.icon}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {content.type}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {content.title}
              </h4>
              <div className="text-sm text-gray-600 mb-3">
                ROI: <span className="font-bold text-green-600">{content.metrics.roi}</span>
              </div>
              <div className="text-xs text-gray-500">
                {content.description.substring(0, 100)}...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;