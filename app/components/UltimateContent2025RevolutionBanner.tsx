'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Zap, Target } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      id: 'advanced-ai-automation-mastery',
      title: 'Advanced AI Automation Enterprise Mastery',
      subtitle: 'Ultimate Guide to 1,500% ROI',
      type: 'blog',
      metrics: { roi: '1,500%', savings: '$2.8B', efficiency: '89%' },
      url: '/blog/ai-2025-advanced-ai-automation-enterprise-mastery-ultimate-guide',
      featured: true
    },
    {
      id: 'enterprise-transformation-success',
      title: 'Enterprise Transformation Success Story',
      subtitle: '$4.2B Company Achieves 1,500% ROI',
      type: 'case-study',
      metrics: { roi: '1,500%', savings: '$405M', satisfaction: '94%' },
      url: '/case-studies/ai-2025-enterprise-transformation-ultimate-success-story-1500-roi',
      featured: true
    },
    {
      id: 'quantum-ai-revolution',
      title: 'Quantum AI Revolution Ultimate Guide',
      subtitle: '2,000% ROI with Quantum Computing',
      type: 'blog',
      metrics: { roi: '2,000%', savings: '$8.2B', speed: '1,200%' },
      url: '/blog/ai-2025-quantum-ai-revolution-ultimate-guide',
      featured: true
    },
    {
      id: 'autonomous-systems-success',
      title: 'Autonomous Systems Revolution',
      subtitle: '$1.8B Company Achieves 900% ROI',
      type: 'case-study',
      metrics: { roi: '900%', savings: '$162M', automation: '95%' },
      url: '/case-studies/ai-2025-autonomous-systems-revolution-success-story',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'Implementation Ultimate Success Framework',
      subtitle: 'Complete Roadmap to 1,500% ROI',
      type: 'resource',
      metrics: { roi: '1,500%', success: '94%', projects: '500+' },
      url: '/resources/ai-2025-implementation-ultimate-success-framework-1500-roi',
      featured: true
    }
  ];

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">NEW 2025 CONTENT REVOLUTION</span>
              </div>
              <div className="flex items-center space-x-1 bg-green-500/20 rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium">FEATURED</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentItem.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-4">
                {currentItem.subtitle}
              </p>
              
              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-semibold">ROI: {currentItem.metrics.roi}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                  <Target className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-semibold">Savings: {currentItem.metrics.savings}</span>
                </div>
                {currentItem.metrics.efficiency && (
                  <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-semibold">Efficiency: {currentItem.metrics.efficiency}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentItem.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Explore {currentItem.type === 'blog' ? 'Guide' : currentItem.type === 'case-study' ? 'Case Study' : 'Framework'}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                <span>View All Content</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;