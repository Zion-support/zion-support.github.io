'use client';

import React, { useState, useEffect } from 'react';
import { X, Brain, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const NeuralInterfaceRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      title: "Neural Interface Revolution 2025",
      subtitle: "800% ROI • $12.5M Annual Savings • 340% Productivity Increase",
      description: "Transform your business with brain-computer interfaces and neural AI integration",
      metrics: [
        { label: "ROI", value: "800%", icon: TrendingUp },
        { label: "Savings", value: "$12.5M", icon: Target },
        { label: "Speed", value: "1,200%", icon: Zap },
        { label: "Accuracy", value: "99.8%", icon: Brain }
      ],
      cta: "Explore Neural Interfaces",
      link: "/blog/ai-2025-neural-interface-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "Real Results from Global Manufacturing Leader",
      description: "See how a Fortune 500 company achieved 800% ROI with neural interfaces",
      metrics: [
        { label: "Implementation", value: "8 months", icon: Target },
        { label: "ROI", value: "800%", icon: TrendingUp },
        { label: "Savings", value: "$12.5M", icon: Zap },
        { label: "Productivity", value: "340%", icon: Brain }
      ],
      cta: "Read Case Study",
      link: "/case-studies/neural-interface-fortune-500-success-800-roi"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "Complete Framework for Neural Interface Success",
      description: "Step-by-step guide to implementing neural interfaces in your organization",
      metrics: [
        { label: "Timeline", value: "6-8 months", icon: Target },
        { label: "Success Rate", value: "98%", icon: TrendingUp },
        { label: "ROI", value: "800%", icon: Zap },
        { label: "Payback", value: "3.5 months", icon: Brain }
      ],
      cta: "Get Implementation Guide",
      link: "/resources/neural-interface-implementation-master-guide-2025"
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
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-indigo-500/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Brain className="w-5 h-5 text-purple-300" />
                <span className="text-sm font-medium">NEURAL INTERFACE REVOLUTION 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium">800% ROI</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-purple-200 mb-4">
              {currentContent.subtitle}
            </p>
            
            <p className="text-base text-gray-300 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {currentContent.metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <metric.icon className="w-6 h-6 mx-auto mb-2 text-purple-300" />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentContent.link}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                {currentContent.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;