'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, Star, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContent2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '89%'
      },
      description: 'Master advanced AI automation with our comprehensive guide. Learn how Fortune 500 companies achieve 1,200% ROI through intelligent automation strategies.',
      badge: 'Featured',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '98%'
      },
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI and $2.8B annual savings through comprehensive AI transformation in just 18 months.',
      badge: 'Success Story',
      badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to AI implementation success. Learn the proven framework that has delivered 1,000%+ ROI for Fortune 500 companies worldwide.',
      badge: 'Framework',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    // Auto-rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">NEW ULTIMATE CONTENT 2025</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>1,200% ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>500+ Companies</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>98% Success</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${currentContent.badgeColor}`}>
                  {currentContent.badge}
                </span>
                <span className="text-sm text-white/80">{currentContent.type}</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-white/90 text-lg leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-yellow-400">{value}</div>
                  <div className="text-xs text-white/70 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read Full {currentContent.type}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          {/* Content Carousel */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <span className="text-sm text-white/70">Featured Content Collection</span>
            </div>
            
            <div className="space-y-3">
              {featuredContent.map((content, index) => (
                <div
                  key={content.id}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    index === currentSlide
                      ? 'border-yellow-400 bg-white/10'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${content.badgeColor}`}>
                          {content.badge}
                        </span>
                        <span className="text-xs text-white/70">{content.type}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white line-clamp-2">
                        {content.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-white/70">
                        <span>ROI: {content.metrics.roi}</span>
                        <span>Savings: {content.metrics.savings}</span>
                      </div>
                    </div>
                    {index === currentSlide && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">1,200%</div>
              <div className="text-sm text-white/70">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">$5.6B+</div>
              <div className="text-sm text-white/70">Total Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-white/70">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">98%</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025PromotionBanner;