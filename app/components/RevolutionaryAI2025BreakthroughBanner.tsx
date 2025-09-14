'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, TrendingUp, Award, ArrowRight, Star, Clock } from 'lucide-react';

const RevolutionaryAI2025BreakthroughBanner = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughMetrics = [
    { value: '800%', label: 'ROI Achievement', icon: TrendingUp, color: 'text-green-400' },
    { value: '$2.8B', label: 'Annual Savings', icon: TrendingUp, color: 'text-blue-400' },
    { value: '99.7%', label: 'Success Rate', icon: Award, color: 'text-purple-400' },
    { value: '500+', label: 'Success Stories', icon: Star, color: 'text-yellow-400' }
  ];

  const featuredBreakthroughs = [
    {
      title: 'Enterprise Automation Mastery',
      description: 'Complete guide to achieving 800% ROI with AI automation',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      type: 'Ultimate Guide',
      metrics: '800% ROI, $2.8B Savings'
    },
    {
      title: 'Fortune 500 Transformation',
      description: 'How a $5.2B company achieved 800% ROI in 18 months',
      url: '/case-studies/fortune-500-ai-transformation-800-percent-roi-ultimate-success',
      type: 'Case Study',
      metrics: '800% ROI, $4.16B Value'
    },
    {
      title: 'Implementation Roadmap',
      description: 'Step-by-step roadmap to 800% ROI in 18 months',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-800-percent-roi',
      type: 'Resource',
      metrics: '800% ROI, 99.7% Success'
    },
    {
      title: 'Quantum Computing Revolution',
      description: '1,200% processing speed with 99.97% accuracy',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      type: 'Breakthrough',
      metrics: '600% ROI, 1,200% Speed'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % breakthroughMetrics.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-ai-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-ai-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentBreakthrough = breakthroughMetrics[currentMetric];
  const IconComponent = currentBreakthrough.icon;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 right-16 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            <span className="text-lg font-bold">🚀 REVOLUTIONARY AI 2025 BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            The AI Revolution That's Transforming Everything
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough technologies and strategies that are generating 
            <span className="font-bold text-yellow-300"> 800% ROI</span>, 
            <span className="font-bold text-pink-300"> $2.8+ billion in savings</span>, and 
            <span className="font-bold text-purple-300"> 99.7% success rates</span> for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Dynamic Metrics Display */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Breakthrough Performance Metrics</h2>
            <p className="text-lg text-gray-300">Real results from real implementations</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 max-w-md">
              <div className="flex items-center justify-center mb-4">
                <IconComponent className={`w-12 h-12 ${currentBreakthrough.color} mr-4`} />
                <div>
                  <div className={`text-5xl font-bold ${currentBreakthrough.color}`}>
                    {currentBreakthrough.value}
                  </div>
                  <div className="text-lg text-gray-300">{currentBreakthrough.label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {breakthroughMetrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-4 rounded-xl transition-all duration-300 ${
                    index === currentMetric ? 'bg-white/20 scale-105' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <MetricIcon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Breakthroughs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Revolutionary AI Breakthroughs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBreakthroughs.map((breakthrough, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {breakthrough.type}
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{breakthrough.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{breakthrough.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-yellow-400 mb-1">Key Metrics</div>
                  <div className="text-sm text-gray-300">{breakthrough.metrics}</div>
                </div>
                
                <Link
                  href={breakthrough.url}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fortune 500 Success Stories</h2>
            <p className="text-lg text-gray-300">Real companies achieving extraordinary results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$5.2B</div>
              <div className="text-lg text-gray-300 mb-2">Manufacturing Company</div>
              <div className="text-sm text-gray-400">800% ROI in 18 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-lg text-gray-300 mb-2">Annual Savings</div>
              <div className="text-sm text-gray-400">Average across implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-lg text-gray-300 mb-2">Success Rate</div>
              <div className="text-sm text-gray-400">Implementation success</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Achieve Your AI Breakthrough?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join the Fortune 500 companies that are transforming their operations with revolutionary AI technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Your AI Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore All Resources
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025BreakthroughBanner;