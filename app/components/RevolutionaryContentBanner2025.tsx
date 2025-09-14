'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Revolutionary content pieces with compelling metrics
  const revolutionaryContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - 500% ROI Guide',
      type: 'Ultimate Guide',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      description: 'The complete framework for achieving 500% ROI through strategic AI automation',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      featured: true,
      readingTime: '25 min'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: 650% ROI Success Story',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      description: 'How a $3.2B company achieved unprecedented results through AI transformation',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      featured: true,
      readingTime: '22 min'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap: 800% ROI in 18 Months',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      description: 'The proven roadmap for transforming your organization with AI',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      featured: true,
      readingTime: '35 min'
    }
  ];

  // Auto-rotate content every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  // Check if banner was dismissed
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

  if (!isVisible) return null;

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 left-1/2 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="w-4 h-4 mr-2" />
                REVOLUTIONARY CONTENT
              </div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg opacity-90 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{value}</div>
                  <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{currentContent.readingTime} read</span>
              </div>
              <div className="text-sm opacity-80">
                {currentContent.type}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center group"
              >
                Read Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Proven Results</h3>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <span className="text-3xl font-bold text-green-400">800%</span>
                </div>
                <div className="text-lg font-semibold mb-1">Average ROI</div>
                <div className="text-sm opacity-80">Across all implementations</div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-3xl font-bold text-blue-400">500+</span>
                </div>
                <div className="text-lg font-semibold mb-1">Success Stories</div>
                <div className="text-sm opacity-80">Fortune 500 companies</div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                  <span className="text-3xl font-bold text-yellow-400">99%</span>
                </div>
                <div className="text-lg font-semibold mb-1">Success Rate</div>
                <div className="text-sm opacity-80">Following our roadmap</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-lg opacity-90 mb-4">
            Join the AI revolution and transform your business today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;