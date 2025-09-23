'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, SparklesIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { Brain } from 'lucide-react';

const AdvancedNeuralArchitecturesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-architectures-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-architectures-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const content = [
    {
      title: "Advanced Neural Architectures",
      subtitle: "450% ROI with 99.2% Accuracy",
      description: "Revolutionary AI systems delivering unprecedented enterprise results",
      icon: CpuChipIcon,
      metrics: "450% ROI • 99.2% Accuracy • 67% Cost Reduction",
      link: "/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Enterprise Automation Success",
      subtitle: "500% ROI in 18 Months",
      description: "Fortune 500 company achieves $140M savings through AI automation",
      icon: ChartBarIcon,
      metrics: "500% ROI • $140M Savings • 85% Efficiency Gain",
      link: "/case-studies/ai-2025-enterprise-automation-500-percent-roi-success-story",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Ultimate Success Framework",
      subtitle: "94% Implementation Success Rate",
      description: "Proven methodology for achieving 500%+ ROI through strategic AI implementation",
      icon: SparklesIcon,
      metrics: "94% Success Rate • 500%+ ROI • 67% Faster Implementation",
      link: "/resources/ai-2025-implementation-ultimate-success-framework",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-500/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/30 rounded-full animate-pulse delay-2000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <SparklesIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">🚀 NEW: Advanced AI Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI Breakthroughs for 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge neural architectures, enterprise automation success stories, and proven implementation frameworks
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === currentSlide;
              
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105 z-10' : 'scale-100'
                  }`}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-white" />
                      <div className="text-white/80 text-sm font-medium">
                        {index + 1}/3
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="text-yellow-300 font-semibold mb-2">
                      {item.subtitle}
                    </div>
                    
                    <p className="text-white/90 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    <div className="text-white/80 text-xs mb-4 font-mono">
                      {item.metrics}
                    </div>
                    
                    <div className="flex items-center text-white text-sm font-medium group-hover:text-yellow-300 transition-colors">
                      Read More
                      <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Explore All AI Content
              </Link>
              <Link
                href="/services/ai-implementation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors flex items-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Get AI Implementation Help
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AdvancedNeuralArchitecturesBanner;