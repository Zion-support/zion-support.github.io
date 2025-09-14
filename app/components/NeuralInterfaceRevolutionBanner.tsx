'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Brain, Zap, TrendingUp, Users, Shield, Brain } from 'lucide-react';

const NeuralInterfaceRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "Neural Interface Revolution",
      subtitle: "750% ROI with Brain-Computer Integration",
      description: "Fortune 500 companies achieve unprecedented 750% ROI through revolutionary neural interface technology.",
      metrics: "750% ROI • $4.2B Savings • 99.9% Accuracy",
      link: "/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough",
      icon: Brain,
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Autonomous AI Agents",
      subtitle: "900% ROI with Self-Managing Systems",
      description: "Revolutionary autonomous AI agents achieving 900% ROI through independent operation and real-time adaptation.",
      metrics: "900% ROI • $5.8B Savings • 95% Automation",
      link: "/blog/ai-2025-autonomous-ai-agents-enterprise-revolution",
      icon: Zap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Predictive Analytics Revolution",
      subtitle: "650% ROI with AI-Powered Intelligence",
      description: "Advanced predictive analytics delivering 650% ROI through AI-powered forecasting and intelligent insights.",
      metrics: "650% ROI • $3.6B Savings • 99.8% Accuracy",
      link: "/blog/ai-2025-advanced-predictive-analytics-revolution",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600"
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];
  const IconComponent = currentContent.icon;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <IconComponent className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">🚀 NEW BREAKTHROUGH</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-white/80">
                <Users className="w-4 h-4" />
                <span>Fortune 500 Success</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-3">
              {currentContent.subtitle}
            </p>
            <p className="text-sm sm:text-base text-white/80 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm font-medium text-white/90">Success Metrics</div>
                  <div className="text-xs text-white/70">{currentContent.metrics}</div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
              
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Discover More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
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

export default NeuralInterfaceRevolutionBanner;