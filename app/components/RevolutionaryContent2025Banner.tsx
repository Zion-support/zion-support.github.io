'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const RevolutionaryContent2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution',
      subtitle: 'How Companies Are Achieving 500% ROI',
      description: 'Discover how leading enterprises are leveraging AI automation to achieve unprecedented ROI, reduce costs by 60%, and transform their operations.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '400%',
        companies: '500+'
      },
      badge: 'NEW 2025',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success Story',
      subtitle: 'How a $2B Company Achieved 500% ROI in 12 Months',
      description: 'Real case study showing how TechCorp Global achieved 500% ROI, $200M in annual savings, and 400% productivity gains.',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      type: 'case-study',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '400%',
        satisfaction: '99.8%'
      },
      badge: 'CASE STUDY',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ai-implementation-master-guide-2025',
      title: 'AI Implementation Master Guide 2025',
      subtitle: 'From Strategy to 500% ROI',
      description: 'The complete guide to implementing AI in your organization. Learn proven strategies and step-by-step processes.',
      url: '/resources/ai-implementation-master-guide-2025',
      type: 'resource',
      metrics: {
        roi: '340%',
        success: '95%',
        companies: '500+',
        time: '6-12 months'
      },
      badge: 'MASTER GUIDE',
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const current = featuredContent[currentContent];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold bg-yellow-400/20 px-3 py-1 rounded-full">
                  {current.badge}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-300">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Featured Content</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {current.title}
            </h2>
            <p className="text-lg text-purple-200 mb-3">
              {current.subtitle}
            </p>
            <p className="text-gray-300 mb-6 max-w-3xl">
              {current.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{current.metrics.roi}</div>
                <div className="text-xs text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{current.metrics.savings}</div>
                <div className="text-xs text-gray-300">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{current.metrics.efficiency}</div>
                <div className="text-xs text-gray-300">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-orange-400">{current.metrics.companies || current.metrics.satisfaction}</div>
                <div className="text-xs text-gray-300">{current.metrics.companies ? 'Companies' : 'Satisfaction'}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={current.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Similar Results
              </Link>
            </div>
          </div>

          {/* Content rotation indicator */}
          <div className="hidden md:flex flex-col space-y-2 ml-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentContent
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-1000"
            style={{ width: '33.33%' }}
          />
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RevolutionaryContent2025Banner;