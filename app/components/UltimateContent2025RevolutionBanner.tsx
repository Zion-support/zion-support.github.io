'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const content = [
    {
      title: "AI 2025: The Ultimate Business Transformation Complete Guide",
      description: "Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with AI transformation strategies.",
      type: "Blog Post",
      url: "/blog/ai-2025-ultimate-business-transformation-complete-guide",
      metrics: {
        roi: "1000%",
        savings: "$2.8B",
        readingTime: "35 min read"
      },
      badge: "NEW",
      badgeColor: "bg-red-500"
    },
    {
      title: "Fortune 100 AI Transformation: $5.2B Company Achieves 1000% ROI",
      description: "Complete case study with implementation details and lessons learned from a Fortune 100 manufacturing giant.",
      type: "Case Study",
      url: "/case-studies/fortune-100-ai-transformation-1000-percent-roi-success-story",
      metrics: {
        roi: "1000%",
        savings: "$1.8B",
        readingTime: "25 min read"
      },
      badge: "FEATURED",
      badgeColor: "bg-blue-500"
    },
    {
      title: "AI 2025 Implementation Ultimate Roadmap: From Strategy to 1000% ROI",
      description: "Complete step-by-step roadmap with frameworks, templates, and real-world examples from Fortune 500 companies.",
      type: "Resource",
      url: "/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi",
      metrics: {
        roi: "1000%",
        timeline: "12 months",
        readingTime: "45 min read"
      },
      badge: "ULTIMATE",
      badgeColor: "bg-purple-500"
    }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">🚀 Ultimate AI 2025 Content Revolution</h2>
              <p className="text-sm text-white/80">1000% ROI Success Stories & Complete Implementation Guides</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Slides */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {content.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content Info */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full">
                            {item.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-white/90 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded-lg p-4">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-5 h-5 text-green-400" />
                              <span className="text-sm font-medium">ROI</span>
                            </div>
                            <div className="text-2xl font-bold text-green-400">{item.metrics.roi}</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-4">
                            <div className="flex items-center space-x-2">
                              <Award className="w-5 h-5 text-yellow-400" />
                              <span className="text-sm font-medium">Savings</span>
                            </div>
                            <div className="text-2xl font-bold text-yellow-400">{item.metrics.savings}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <Link
                            href={item.url}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                          >
                            Read Now
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </Link>
                          <span className="text-sm text-white/70">
                            {item.metrics.readingTime}
                          </span>
                        </div>
                      </div>

                      {/* Visual Elements */}
                      <div className="relative">
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                              <Star className="w-12 h-12 text-black" />
                            </div>
                            
                            <div className="space-y-4">
                              <div className="text-4xl font-bold text-yellow-400">1000%</div>
                              <div className="text-lg font-medium">Average ROI</div>
                              <div className="text-sm text-white/80">Across All Implementations</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-bold text-green-400">$2.8B</div>
                                <div className="text-xs text-white/80">Average Savings</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-blue-400">99.7%</div>
                                <div className="text-xs text-white/80">Success Rate</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 p-4">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="border-t border-white/20 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-lg font-bold">500+</div>
                  <div className="text-xs text-white/80">Success Stories</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-lg font-bold">1000%</div>
                  <div className="text-xs text-white/80">Average ROI</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-lg font-bold">$2.8B</div>
                  <div className="text-xs text-white/80">Average Savings</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-lg font-bold">99.7%</div>
                  <div className="text-xs text-white/80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;