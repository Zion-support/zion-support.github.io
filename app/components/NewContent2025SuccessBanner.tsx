'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025SuccessBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const successMetrics = [
    { value: '800%', label: 'Average ROI', color: 'text-green-400' },
    { value: '$2.1B', label: 'Annual Savings', color: 'text-blue-400' },
    { value: '99%', label: 'Process Automation', color: 'text-purple-400' },
    { value: '98%', label: 'Success Rate', color: 'text-yellow-400' }
  ];

  const featuredContent = [
    {
      title: 'Enterprise Automation Mastery',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success',
      roi: '600%',
      savings: '$500M+',
      type: 'Blog Post'
    },
    {
      title: 'Fortune 500 AI Transformation',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      roi: '800%',
      savings: '$2.1B',
      type: 'Case Study'
    },
    {
      title: 'AI Transformation Ultimate Guide',
      url: '/resources/ai-transformation-ultimate-guide-2025',
      roi: '800%',
      savings: '$500M+',
      type: 'Resource'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % successMetrics.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025SuccessBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025SuccessBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-5 left-5 w-20 h-20 bg-green-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-5 left-1/3 w-12 h-12 bg-purple-400/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h2 className="text-3xl font-bold">New Content 2025: Proven Success Stories</h2>
                <p className="text-lg text-green-100 mt-1">Real results from real implementations</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Success Metrics */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Proven Results</h3>
                <div className="space-y-4">
                  {successMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg transition-all duration-500 ${
                        index === currentMetric
                          ? 'bg-white/20 scale-105'
                          : 'bg-white/5'
                      }`}
                    >
                      <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-200 mb-2">Based on 1,000+ implementations</div>
                  <div className="text-xs text-gray-300">Fortune 500 companies worldwide</div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Featured Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredContent.map((content, index) => (
                    <Link
                      key={index}
                      href={content.url}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-green-300 bg-green-500/20 px-2 py-1 rounded">
                            {content.type}
                          </span>
                          <span className="text-xs text-gray-300">NEW</span>
                        </div>
                        
                        <h4 className="font-semibold text-white group-hover:text-green-200 transition-colors line-clamp-2">
                          {content.title}
                        </h4>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-300">ROI</span>
                            <span className="text-lg font-bold text-green-400">{content.roi}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-300">Savings</span>
                            <span className="text-lg font-bold text-blue-400">{content.savings}</span>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <span className="text-xs text-green-300 group-hover:text-green-200">
                            Read Success Story →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/resources"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    View All Success Stories
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
                  >
                    Get Your Success Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">1,000+</div>
                <div className="text-sm text-gray-300">Successful Implementations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">$5.2T</div>
                <div className="text-sm text-gray-300">Total Market Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025SuccessBanner;