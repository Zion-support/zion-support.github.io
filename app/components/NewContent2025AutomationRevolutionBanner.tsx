'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const NewContent2025AutomationRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution',
      description: 'Transform your business with 500% ROI in 8 months. Complete guide to AI automation success.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '95%',
        timeline: '8 months'
      },
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Automation Success: 500% ROI',
      description: 'How a global manufacturing giant achieved $200M annual savings with AI automation.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '95%',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ai-automation-success-500-roi',
      type: 'case-study',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Master Guide 2025',
      description: 'Complete blueprint for achieving 500% ROI with AI automation. Step-by-step implementation guide.',
      metrics: {
        roi: '500%',
        success: '98%',
        timeline: '8 months',
        projects: '500+'
      },
      url: '/resources/ai-automation-implementation-master-guide-2025',
      type: 'resource',
      readingTime: '15 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('automation-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('automation-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold">NEW: AI Automation Revolution 2025</h2>
                <p className="text-sm opacity-90">Transform your business with proven 500% ROI strategies</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Showcase */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {currentContent.type.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm opacity-80">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{currentContent.title}</h3>
                <p className="text-sm opacity-90 mb-4">{currentContent.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold">{currentContent.metrics.roi} ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold">{currentContent.metrics.savings} Savings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold">{currentContent.metrics.efficiency} Efficiency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold">{currentContent.metrics.timeline || currentContent.metrics.satisfaction}</span>
                  </div>
                </div>
                
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2 justify-center">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Proven Results Across 500+ Implementations</h3>
                <p className="text-lg opacity-90 mb-6">
                  Join Fortune 500 companies achieving extraordinary results with AI automation
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">500%</div>
                  <div className="text-sm opacity-90">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">$200M</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">95%</div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-orange-400 mb-1">8</div>
                  <div className="text-sm opacity-90">Months to ROI</div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/services"
                  className="block w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Get Your Free AI Automation Assessment
                </Link>
                <Link
                  href="/contact"
                  className="block w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AutomationRevolutionBanner;