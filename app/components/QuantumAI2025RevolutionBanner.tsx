import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAI2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Quantum AI content and benefits
  const quantumContent = [
    {
      id: 1,
      title: 'Quantum AI Enterprise Breakthrough',
      description: 'Harness quantum computing power for unprecedented business transformation',
      metrics: {
        roi: '1,200%',
        speed: '1,200x Faster',
        market: '$100B',
        accuracy: '99.97%'
      },
      benefits: [
        'Complex optimization problems solved instantly',
        'Financial risk modeling with 99.97% accuracy',
        'Supply chain optimization at quantum scale',
        'Drug discovery 10x faster than traditional methods'
      ],
      cta: 'Explore Quantum AI',
      url: '/blog/ai-2025-quantum-computing-enterprise-breakthrough'
    },
    {
      id: 2,
      title: 'Quantum AI Market Revolution',
      description: 'Join the $100B quantum AI market transformation',
      metrics: {
        market: '$100B by 2030',
        growth: '340% CAGR',
        adoption: '85% Fortune 500',
        advantage: '15x Competitive Edge'
      },
      benefits: [
        'First-mover advantage in quantum AI',
        'Solve previously impossible business problems',
        'Exponential processing power improvements',
        'Revolutionary competitive differentiation'
      ],
      cta: 'Get Quantum Advantage',
      url: '/contact'
    },
    {
      id: 3,
      title: 'Quantum AI Success Stories',
      description: 'Real-world quantum AI implementations delivering extraordinary results',
      metrics: {
        savings: '$2.8B Annual',
        efficiency: '156% Improvement',
        problems: 'Previously Impossible',
        timeframe: '6-12 Months'
      },
      benefits: [
        'Fortune 500 manufacturing: $2.8B savings',
        'Financial services: 99.97% risk accuracy',
        'Healthcare: 10x faster drug discovery',
        'Logistics: 85% efficiency improvement'
      ],
      cta: 'View Success Stories',
      url: '/case-studies'
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % quantumContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quantumContent.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('quantumAI2025RevolutionDismissed');
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('quantumAI2025RevolutionDismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = quantumContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 overflow-hidden">
      {/* Quantum-themed Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-400 rounded-full animate-spin"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 border-2 border-cyan-400 rounded-full animate-ping"></div>
        
        {/* Quantum circuit lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#quantumGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,150 Q250,250 500,150 T1000,150"
            stroke="url(#quantumGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-0 right-4 text-white hover:text-gray-300 text-2xl font-bold z-20"
          aria-label="Dismiss banner"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold text-white">⚛️ QUANTUM AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Quantum AI Breakthrough
          </h2>
          <p className="text-xl opacity-90">
            Harness quantum computing power for unprecedented business transformation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-4 text-center">
              {currentContent.title}
            </h3>
            
            <p className="text-lg opacity-90 mb-6 text-center">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={index} className="text-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-300">{value}</div>
                  <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-6">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105"
              >
                {currentContent.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quantum AI Visualization */}
          <div className="space-y-6">
            {/* Industry Transformation */}
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-center">Industry Transformation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏭</div>
                  <div className="text-sm font-semibold">Manufacturing</div>
                  <div className="text-xs opacity-80">156% Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏦</div>
                  <div className="text-sm font-semibold">Finance</div>
                  <div className="text-xs opacity-80">99.97% Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-sm font-semibold">Healthcare</div>
                  <div className="text-xs opacity-80">10x Faster R&D</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="text-sm font-semibold">Logistics</div>
                  <div className="text-xs opacity-80">85% Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Quantum AI Benefits */}
            <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-center">Quantum AI Benefits</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Processing Speed</span>
                  <span className="text-sm font-bold text-cyan-300">1,200x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Problem Complexity</span>
                  <span className="text-sm font-bold text-purple-300">Exponential</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Market Opportunity</span>
                  <span className="text-sm font-bold text-pink-300">$100B by 2030</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Competitive Advantage</span>
                  <span className="text-sm font-bold text-yellow-300">15x Edge</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-cyan-800 to-teal-800 p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3">Ready for Quantum AI?</h4>
              <p className="text-sm opacity-90 mb-4">
                Join the quantum revolution and transform your business with unprecedented computing power.
              </p>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all"
                >
                  Get Quantum Consultation
                </Link>
                <Link
                  href="/resources"
                  className="block text-cyan-300 hover:text-cyan-200 text-sm underline"
                >
                  Download Quantum AI Guide
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-3 mt-10">
          {quantumContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-sm opacity-75">
            Based on quantum AI research and Fortune 500 implementations • Updated January 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumAI2025RevolutionBanner;