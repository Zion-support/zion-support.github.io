'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check if user has dismissed this banner
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const contentSlides = [
    {
      title: "AI 2025: The Enterprise Automation Revolution",
      subtitle: "How Companies Are Achieving 500% ROI",
      description: "Discover how leading enterprises are leveraging AI automation to achieve unprecedented ROI, reduce costs by 60%, and transform their operations.",
      link: "/blog/ai-2025-enterprise-automation-revolution",
      metrics: "500% ROI • 60% Cost Reduction • 340% Productivity",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "AI Transformation Success Story",
      subtitle: "How a $2B Company Achieved 500% ROI in 12 Months",
      description: "Real-world case study showing how TechCorp Global achieved $200M in annual savings and 400% productivity gains through strategic AI implementation.",
      link: "/case-studies/ai-transformation-500-roi-success-story",
      metrics: "$200M Savings • 400% Productivity • 99.8% Satisfaction",
      icon: <Star className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "The Ultimate AI Implementation Guide 2025",
      subtitle: "From Strategy to 500% ROI",
      description: "Complete guide to implementing AI in your organization. Learn proven strategies, best practices, and step-by-step processes to transform your business.",
      link: "/resources/ai-implementation-ultimate-guide-2025",
      metrics: "500+ Companies • 340% Average ROI • Proven Framework",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-red-600"
    }
  ];

  if (!isVisible) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-20 p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2025</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentContent.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl text-purple-200 mb-4">
                {currentContent.subtitle}
              </h3>
              
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto lg:mx-0">
                {currentContent.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-200">500+ Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-green-200">340% Average ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-yellow-200">98% Success Rate</span>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="flex-shrink-0">
              <div className={`w-64 h-64 bg-gradient-to-br ${currentContent.color} rounded-2xl flex items-center justify-center text-white shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                <div className="text-center">
                  {currentContent.icon}
                  <div className="mt-4 text-sm font-medium">
                    {currentContent.metrics}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;