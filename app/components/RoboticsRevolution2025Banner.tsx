'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';

const RoboticsRevolution2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('robotics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('robotics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const slides = [
    {
      title: "AI 2025: Advanced Robotics Revolution",
      subtitle: "600% ROI • $4.2B Annual Savings",
      description: "Transform your business with next-generation robotic intelligence",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "600% ROI in 12 Months",
      description: "See how a global manufacturer achieved $4.2B in annual savings",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "Complete Roadmap to Success",
      description: "Step-by-step guide from strategy to 600% ROI achievement",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Main Content */}
          <div className="flex-1 flex items-center space-x-6">
            {/* Icon */}
            <div className={`p-3 rounded-full bg-gradient-to-r ${currentSlideData.color} bg-opacity-20`}>
              {currentSlideData.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <h3 className="text-xl font-bold">{currentSlideData.title}</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
              </div>
              
              <p className="text-lg font-semibold text-blue-200 mb-1">
                {currentSlideData.subtitle}
              </p>
              
              <p className="text-gray-300 text-sm">
                {currentSlideData.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/blog/ai-2025-advanced-robotics-revolution-ultimate-guide"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/case-studies/fortune-500-robotics-transformation-600-roi-success"
              className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center space-x-2"
            >
              <span>View Case Study</span>
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">600%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">$4.2B</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-gray-300">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">340%</div>
            <div className="text-sm text-gray-300">Productivity Boost</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsRevolution2025Banner;