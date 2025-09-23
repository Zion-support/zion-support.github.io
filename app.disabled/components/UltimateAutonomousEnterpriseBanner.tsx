'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Zap, Shield, Brain } from 'lucide-react';

const UltimateAutonomousEnterpriseBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: Ultimate Autonomous Enterprise Revolution",
      subtitle: "Achieve 3,000% ROI with Fully Autonomous Operations",
      description: "Transform your enterprise into a self-optimizing, autonomous organization that operates 24/7 with minimal human intervention.",
      metrics: {
        roi: "3,000%",
        savings: "$5.2B+",
        efficiency: "99.8%",
        uptime: "99.99%"
      },
      cta: "Download Master Guide",
      link: "/resources/ai-2025-ultimate-autonomous-enterprise-implementation-master-guide"
    },
    {
      title: "Fortune 500 Success Story: 3,000% ROI Achievement",
      subtitle: "$8.2B Company Transforms with Autonomous Enterprise",
      description: "Discover how a global manufacturing conglomerate achieved unprecedented success with autonomous operations.",
      metrics: {
        roi: "3,000%",
        savings: "$5.2B",
        efficiency: "99.8%",
        satisfaction: "99.8%"
      },
      cta: "Read Case Study",
      link: "/case-studies/fortune-500-ultimate-autonomous-enterprise-3000-roi-success-story"
    },
    {
      title: "Ultimate Implementation Master Guide",
      subtitle: "Complete Roadmap to 3,000% ROI in 24 Months",
      description: "Step-by-step guide for transforming your enterprise into a fully autonomous, self-optimizing organization.",
      metrics: {
        roi: "3,000%",
        timeline: "24 months",
        success: "500+",
        savings: "$5.2B+"
      },
      cta: "Get Implementation Guide",
      link: "/resources/ai-2025-ultimate-autonomous-enterprise-implementation-master-guide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-autonomous-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-sm font-medium text-purple-200">NEW ULTIMATE BREAKTHROUGH</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <p className="text-lg font-semibold text-purple-200 mb-3">
              {currentContent.subtitle}
            </p>
            
            <p className="text-gray-200 mb-6 max-w-2xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-xs text-purple-200 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                {currentContent.cta}
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-64 h-64">
              {/* AI Brain Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <Zap className="w-4 h-4 text-white" />
              </div>
              
              <div className="absolute top-1/2 left-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce delay-2000">
                <Shield className="w-4 h-4 text-white" />
              </div>
              
              <div className="absolute top-1/2 right-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center animate-bounce delay-3000">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UltimateAutonomousEnterpriseBanner;