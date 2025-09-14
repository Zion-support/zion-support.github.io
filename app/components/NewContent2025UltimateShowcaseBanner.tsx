'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Users, Award, Zap, Target, DollarSign } from 'lucide-react';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('new-content-2025-ultimate-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  // Auto-rotate content every 6 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('new-content-2025-ultimate-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,000% ROI through intelligent automation and advanced business intelligence',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,000%',
        savings: '$2.8B',
        efficiency: '156%',
        accuracy: '99.7%'
      },
      badge: 'Ultimate Guide',
      color: 'from-purple-600 to-indigo-600',
      icon: Target
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'How a Fortune 500 company achieved 567% ROI in just 18 months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      badge: 'Success Story',
      color: 'from-blue-600 to-cyan-600',
      icon: Award
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      description: 'Complete guide to achieving 800% ROI in 18 months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      badge: 'Implementation Guide',
      color: 'from-green-600 to-emerald-600',
      icon: TrendingUp
    }
  ];

  if (isDismissed || !isVisible) return null;

  const currentContent = featuredContent[currentSlide];
  const IconComponent = currentContent.icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Zap className="w-6 h-6 mr-3 text-yellow-400" />
              <span className="text-lg font-bold">🚀 NEW 2025 ULTIMATE CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionary AI Content That's
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Delivering 1,000% ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the most powerful AI strategies, proven success stories, and comprehensive implementation guides that are transforming businesses across industries with unprecedented results.
            </p>
          </div>

          {/* Main Content Showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 mb-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Preview */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      currentContent.type === 'blog' ? 'bg-blue-500/20 text-blue-300' :
                      currentContent.type === 'case-study' ? 'bg-green-500/20 text-green-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {currentContent.badge}
                    </span>
                    <span className="text-sm text-gray-400 capitalize font-medium">{currentContent.type}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-gray-300 text-xl leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">{value}</div>
                      <div className="text-sm text-gray-400 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Star className="w-6 h-6 mr-2" />
                    Read Full Content
                    <ChevronRight className="w-6 h-6 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 mr-2" />
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentContent.color} rounded-3xl p-12 text-center shadow-2xl`}>
                  <div className="space-y-8">
                    <div className="text-8xl font-bold text-white/90 mb-4">
                      {currentContent.metrics.roi}
                    </div>
                    <div className="text-2xl text-white/80 font-semibold">Average ROI</div>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white/90 mb-2">{currentContent.metrics.savings}</div>
                        <div className="text-sm text-white/70 font-medium">Total Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white/90 mb-2">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                        <div className="text-sm text-white/70 font-medium">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Success Icons */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <DollarSign className="w-8 h-8 text-gray-900" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-12">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Success Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-yellow-400 mb-3">500+</div>
              <div className="text-lg text-gray-300 font-medium">Success Stories</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-green-400 mb-3">1,000%</div>
              <div className="text-lg text-gray-300 font-medium">Max ROI Achieved</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-3">$2.8B</div>
              <div className="text-lg text-gray-300 font-medium">Total Savings</div>
            </div>
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-3">99%</div>
              <div className="text-lg text-gray-300 font-medium">Success Rate</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center shadow-2xl"
              >
                <Users className="w-7 h-7 mr-3" />
                Start Your AI Transformation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 flex items-center"
              >
                <Award className="w-7 h-7 mr-3" />
                Explore All Content
              </Link>
            </div>
            <p className="text-gray-400 mt-6 text-lg">
              Join 500+ companies already achieving unprecedented ROI with our AI solutions
            </p>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;