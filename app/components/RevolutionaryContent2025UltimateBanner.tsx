'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award, Zap, Target } from 'lucide-react';

const RevolutionaryContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentMetric((prev) => (prev + 1) % successMetrics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-ultimate-dismissed', 'true');
  };

  const successMetrics = [
    { value: '800%', label: 'Average ROI', icon: TrendingUp, color: 'text-yellow-400' },
    { value: '$2.8B', label: 'Annual Savings', icon: Target, color: 'text-green-400' },
    { value: '94%', label: 'Success Rate', icon: Star, color: 'text-purple-400' },
    { value: '500+', label: 'Fortune 500', icon: Users, color: 'text-blue-400' }
  ];

  const featuredContent = [
    {
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI solutions.',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      roi: '600%',
      readingTime: '22 min read',
      isNew: true
    },
    {
      title: 'AI Transformation 2025: $3.2B Company Achieves 750% ROI - Ultimate Success Story',
      description: 'How a Fortune 100 manufacturing company transformed operations with AI, achieving 750% ROI.',
      url: '/case-studies/ai-transformation-2025-ultimate-success-story',
      type: 'Case Study',
      roi: '750%',
      readingTime: '18 min read',
      isNew: true
    },
    {
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      description: 'Complete step-by-step guide to implementing AI in your enterprise. Achieve 800% ROI with our proven methodology.',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      type: 'Resource',
      roi: '800%',
      readingTime: '35 min read',
      isNew: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentMetricData = successMetrics[currentMetric];
  const MetricIcon = currentMetricData.icon;

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-500/5 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
              <Zap className="w-4 h-4" />
              <span>REVOLUTIONARY 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
              <Award className="w-4 h-4" />
              <span>800% ROI GUARANTEED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Dismiss banner"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            🚀 The Most Revolutionary AI Content Collection of 2025
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock the secrets to 800% ROI with our comprehensive AI transformation resources. 
            Learn from Fortune 500 success stories and implement proven strategies that deliver unprecedented results.
          </p>

          {/* Animated Success Metric */}
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <MetricIcon className={`w-8 h-8 ${currentMetricData.color}`} />
            <div className="text-center">
              <div className={`text-4xl font-bold ${currentMetricData.color}`}>
                {currentMetricData.value}
              </div>
              <div className="text-indigo-200 text-sm font-semibold">
                {currentMetricData.label}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <div className="text-yellow-400 text-sm font-bold">
                  {content.roi} ROI
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h3>

              <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-indigo-200 text-xs">
                  {content.readingTime}
                </span>
                <Link
                  href={content.url}
                  className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-indigo-200 text-sm font-semibold">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources/ai-implementation-ultimate-roadmap-2025"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-900 font-bold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Award className="w-6 h-6 mr-3" />
              Get Ultimate Implementation Roadmap
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              href="/case-studies/ai-transformation-2025-ultimate-success-story"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              <Users className="w-6 h-6 mr-3" />
              View Success Stories
            </Link>
          </div>
          
          <p className="text-indigo-200 text-sm mt-6 max-w-2xl mx-auto">
            Join 500+ Fortune 500 companies that have already achieved 800% ROI with our proven AI transformation methodologies. 
            Start your journey to unprecedented success today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;