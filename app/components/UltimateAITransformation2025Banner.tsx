'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Zap, Target } from 'lucide-react';

const UltimateAITransformation2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: The Ultimate Enterprise Transformation Revolution",
      description: "Complete Guide to 15,000% ROI - Discover how Fortune 500 companies are achieving unprecedented results through revolutionary AI transformation strategies.",
      metrics: "15,000% ROI • $85.2B+ Savings • 4,200% Efficiency",
      type: "blog",
      url: "/blog/ai-2025-ultimate-enterprise-transformation-revolution",
      readingTime: "45 min read",
      featured: true
    },
    {
      title: "Fortune 100 AI Transformation: $85.2B Company Achieves 15,000% ROI",
      description: "Ultimate Success Story - Learn how a Fortune 100 manufacturing conglomerate achieved unprecedented 15,000% ROI through comprehensive AI transformation.",
      metrics: "15,000% ROI • $12.8B Savings • 99.99% Accuracy",
      type: "case-study",
      url: "/case-studies/fortune-100-ai-transformation-15000-roi-ultimate-success",
      readingTime: "25 min read",
      featured: true
    },
    {
      title: "AI 2025 Ultimate Transformation Implementation Guide",
      description: "Complete Roadmap to 15,000% ROI - The definitive guide to achieving extraordinary results through comprehensive AI transformation with proven strategies.",
      metrics: "15,000% ROI • 99.7% Success Rate • 18 Months",
      type: "resource",
      url: "/resources/ai-2025-ultimate-transformation-implementation-guide",
      readingTime: "60 min read",
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
    localStorage.setItem('ultimate-ai-transformation-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">ULTIMATE AI TRANSFORMATION 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">15,000% ROI</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {currentContent.title}
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">{currentContent.metrics}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{currentContent.readingTime}</span>
                </div>
                <div className="flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-yellow-400 uppercase">Featured</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Read {currentContent.type === 'case-study' ? 'Case Study' : currentContent.type === 'resource' ? 'Guide' : 'Article'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">15,000%</div>
                        <div className="text-sm text-blue-200">Average ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">$85.2B+</div>
                        <div className="text-sm text-blue-200">Total Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">4,200%</div>
                        <div className="text-sm text-blue-200">Efficiency Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400">99.99%</div>
                        <div className="text-sm text-blue-200">Accuracy Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-center">Featured Content</h4>
                    <div className="space-y-2">
                      {content.map((item, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                            index === currentSlide
                              ? 'bg-white/20 border border-white/30'
                              : 'bg-white/5 hover:bg-white/10'
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">{item.title}</div>
                              <div className="text-xs text-blue-200 truncate">{item.metrics}</div>
                            </div>
                            <div className="ml-2">
                              <div className={`w-2 h-2 rounded-full ${
                                index === currentSlide ? 'bg-white' : 'bg-white/30'
                              }`}></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformation2025Banner;