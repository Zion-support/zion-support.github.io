'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateROIShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const roiShowcases = [
    {
      id: 'neural-interface-roi',
      title: 'Neural Interface Revolution',
      roi: '1,200%',
      timeframe: '12 months',
      savings: '$2.8B',
      efficiency: '800%',
      description: 'Direct brain-computer integration delivering unprecedented business results',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-breakthrough',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'autonomous-enterprise-roi',
      title: 'Autonomous Enterprise Transformation',
      roi: '2,000%',
      timeframe: '18 months',
      savings: '$5.2B',
      efficiency: '99.9%',
      description: 'Self-managing AI systems achieving extraordinary operational excellence',
      url: '/case-studies/ai-2025-autonomous-enterprise-transformation-ultimate-success',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: '🤖'
    },
    {
      id: 'quantum-computing-roi',
      title: 'Quantum Computing Revolution',
      roi: '3,000%',
      timeframe: '18 months',
      savings: '$25.7B',
      efficiency: '1,200%',
      description: 'Quantum-enhanced AI delivering breakthrough computational capabilities',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      gradient: 'from-cyan-600 via-blue-600 to-purple-600',
      icon: '⚛️'
    },
    {
      id: 'enterprise-automation-roi',
      title: 'Enterprise Automation Success',
      roi: '4,000%',
      timeframe: '18 months',
      savings: '$8.9B',
      efficiency: '99.9%',
      description: 'Autonomous AI systems revolutionizing enterprise operations',
      url: '/case-studies/ai-2025-enterprise-automation-ultimate-success-story',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roiShowcases.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [roiShowcases.length]);

  // Check localStorage for dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-roi-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-roi-showcase-2025-dismissed', 'true');
  };

  const currentShowcase = roiShowcases[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentShowcase.gradient} opacity-5`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 w-24 h-24 bg-blue-500 bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute top-16 right-12 w-16 h-16 bg-green-500 bg-opacity-10 rounded-full animate-bounce" />
        <div className="absolute bottom-12 left-16 w-20 h-20 bg-purple-500 bg-opacity-10 rounded-full animate-pulse" />
        <div className="absolute bottom-16 right-8 w-12 h-12 bg-cyan-500 bg-opacity-10 rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">💰 ULTIMATE ROI SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven ROI Results: Up to 4,000%
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories from Fortune 500 companies achieving extraordinary returns through strategic AI implementation.
          </p>
        </div>

        {/* Main ROI Showcase Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
          <div className="p-8">
            {/* ROI Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">{currentShowcase.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {currentShowcase.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {currentShowcase.description}
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ROI Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">{currentShowcase.roi}</div>
                <div className="text-sm font-medium text-green-800">ROI</div>
                <div className="text-xs text-green-600 mt-1">Return on Investment</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{currentShowcase.timeframe}</div>
                <div className="text-sm font-medium text-blue-800">Timeframe</div>
                <div className="text-xs text-blue-600 mt-1">Implementation Period</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">{currentShowcase.savings}</div>
                <div className="text-sm font-medium text-purple-800">Annual Savings</div>
                <div className="text-xs text-purple-600 mt-1">Cost Reduction</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border-2 border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">{currentShowcase.efficiency}</div>
                <div className="text-sm font-medium text-orange-800">Efficiency</div>
                <div className="text-xs text-orange-600 mt-1">Operational Improvement</div>
              </div>
            </div>

            {/* Success Indicators */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Indicators</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Fortune 500 Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Proven Methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Scalable Solution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Measurable Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Long-term Sustainability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Competitive Advantage</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentShowcase.url}
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Success Story →
              </Link>
              <Link
                href="/resources"
                className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-all duration-300"
              >
                All ROI Resources
              </Link>
              <Link
                href="/contact"
                className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-800 transition-all duration-300"
              >
                Get Your ROI Analysis
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation and Progress */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex space-x-2">
            {roiShowcases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {currentIndex + 1} of {roiShowcases.length} ROI Showcases
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / roiShowcases.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Additional ROI Previews */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roiShowcases.map((showcase, index) => (
            <div
              key={showcase.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 ${
                index === currentIndex ? 'border-blue-500' : 'border-gray-100'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <span className="text-3xl mb-3 block">{showcase.icon}</span>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {showcase.title}
                </h4>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {showcase.roi}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {showcase.timeframe}
                </div>
                <div className="text-xs text-gray-600">
                  {showcase.savings} savings
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateROIShowcase2025;