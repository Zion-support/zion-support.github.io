'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Zap, Brain } from 'lucide-react';

const AI2027BreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2027-breakthrough-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-2027-breakthrough-banner-dismissed', 'true');
  };

  const slides = [
    {
      title: "AI 2027: Autonomous Business Ecosystems Revolution",
      subtitle: "2000% ROI Through Self-Managing AI Systems",
      description: "Discover how autonomous AI ecosystems will revolutionize enterprise operations by 2027",
      metrics: "2000% ROI • 95% Automation • $9.2B Savings",
      link: "/blog/ai-2027-autonomous-business-ecosystems-revolution",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      gradient: "from-purple-600 via-blue-600 to-indigo-600"
    },
    {
      title: "Quantum Computing Enterprise Breakthrough 2027",
      subtitle: "1000x Faster Processing, 99.9% Accuracy",
      description: "Explore revolutionary quantum computing applications transforming enterprise operations",
      metrics: "1000% ROI • 1000x Speed • 99.9% Accuracy",
      link: "/blog/quantum-computing-enterprise-breakthrough-2027",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      title: "Autonomous Enterprise Transformation Success",
      subtitle: "Fortune 500 Company Achieves 2000% ROI",
      description: "Real-world case study of comprehensive AI-driven business transformation",
      metrics: "2000% ROI • 18 Months • $9.2B Value",
      link: "/case-studies/ai-2027-autonomous-enterprise-transformation-2000-roi-success",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      gradient: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      title: "Quantum Supply Chain Optimization Success",
      subtitle: "1500% ROI Through Quantum-Powered Logistics",
      description: "Global logistics company revolutionizes supply chain with quantum computing",
      metrics: "1500% ROI • 12 Months • $4.8B Savings",
      link: "/case-studies/quantum-computing-supply-chain-optimization-1500-roi-success",
      icon: <Star className="w-8 h-8 text-orange-600" />,
      gradient: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-cyan-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Progress Indicator */}
              <div className="flex space-x-2 mb-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-8 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  {currentSlideData.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      🚀 NEW 2027 BREAKTHROUGH
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {currentSlideData.title}
                  </h3>
                  
                  <p className="text-lg text-blue-200 mb-2 font-semibold">
                    {currentSlideData.subtitle}
                  </p>
                  
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    {currentSlideData.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-sm font-medium text-white">
                        {currentSlideData.metrics}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Link
                      href={currentSlideData.link}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    
                    <Link
                      href="/services"
                      className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default AI2027BreakthroughPromotionBanner;