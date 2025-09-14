'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EdgeComputingRevolutionBanner2025 = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const features = [
    {
      title: 'Real-Time Quality Control',
      description: '99.7% quality detection accuracy with sub-millisecond processing',
      icon: '🎯',
      metrics: { roi: '500-800%', accuracy: '99.7%', latency: '<1ms' }
    },
    {
      title: 'Predictive Maintenance',
      description: '99.9% equipment uptime with real-time failure prediction',
      icon: '🔧',
      metrics: { roi: '400-700%', uptime: '99.9%', savings: '89%' }
    },
    {
      title: 'Autonomous Operations',
      description: '95% operational autonomy with 24/7 continuous optimization',
      icon: '🤖',
      metrics: { roi: '600-1000%', autonomy: '95%', efficiency: '78%' }
    },
    {
      title: 'Real-Time Analytics',
      description: 'Sub-millisecond analytics with instant decision making',
      icon: '📊',
      metrics: { roi: '300-600%', latency: '<1ms', uptime: '99.9%' }
    }
  ];

  const successStories = [
    {
      company: 'Fortune 500 Manufacturing',
      industry: 'Automotive',
      savings: '$1.8B',
      roi: '650%',
      timeline: '6 months',
      highlight: 'Real-time quality control across 150+ facilities'
    },
    {
      company: 'Major Retail Chain',
      industry: 'Retail',
      savings: '$320M',
      roi: '420%',
      timeline: '4 months',
      highlight: '99.7% real-time inventory accuracy'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('edgeComputingRevolutionBanner2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('edgeComputingRevolutionBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentFeatureData = features[currentFeature];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-4 py-2">
              <span className="text-sm font-medium">⚡ EDGE COMPUTING 2025</span>
            </div>
            <div className="flex items-center bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-medium">450% ROI</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The Edge Computing Revolution
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Transform your business with real-time AI processing, 95% latency reduction, and massive cost savings
              </p>
            </div>

            {/* Current feature highlight */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{currentFeatureData.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {currentFeatureData.title}
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    {currentFeatureData.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentFeatureData.metrics).map(([key, value]) => (
                      <div key={key} className="text-center bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-xl font-bold text-white">{value}</div>
                        <div className="text-sm text-blue-100 capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature navigation */}
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentFeature ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success stories and metrics */}
          <div className="space-y-6">
            {/* Key metrics */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Average ROI</span>
                  <span className="text-2xl font-bold text-green-400">450%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Latency Reduction</span>
                  <span className="text-2xl font-bold text-blue-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Cost Savings</span>
                  <span className="text-2xl font-bold text-purple-400">$2.1B+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Implementation</span>
                  <span className="text-2xl font-bold text-orange-400">6-8mo</span>
                </div>
              </div>
            </div>

            {/* Success stories */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Success Stories</h3>
              {successStories.map((story, index) => (
                <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{story.company}</h4>
                    <span className="text-xs text-blue-300 bg-blue-500 bg-opacity-20 px-2 py-1 rounded">
                      {story.industry}
                    </span>
                  </div>
                  <p className="text-sm text-blue-200 mb-3">{story.highlight}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-blue-300">ROI:</span>
                      <span className="text-green-400 font-semibold">{story.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Savings:</span>
                      <span className="text-green-400 font-semibold">{story.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Timeline:</span>
                      <span className="text-orange-400 font-semibold">{story.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Edge Computing Guide
              </Link>
              <Link
                href="/resources"
                className="block w-full bg-white bg-opacity-10 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-20 transition-all duration-200"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business with Edge Computing?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join Fortune 500 companies achieving 450%+ ROI with real-time edge processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeComputingRevolutionBanner2025;