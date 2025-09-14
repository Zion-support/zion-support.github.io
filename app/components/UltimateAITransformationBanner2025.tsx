'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAITransformationBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Business Transformation Revolution",
      subtitle: "Achieve 1,500% ROI Through Intelligent Automation",
      description: "Fortune 500 companies are achieving unprecedented success with our revolutionary AI solutions. Join the transformation that's reshaping entire industries.",
      metrics: {
        roi: "1,500%",
        savings: "$2.8B",
        efficiency: "890%",
        satisfaction: "99.7%"
      },
      cta: "Discover the Ultimate Guide",
      link: "/blog/ai-2025-ultimate-business-transformation-revolution",
      badge: "NEW 2025"
    },
    {
      title: "Fortune 500 AI Success: $12.8B Company Achieves 1,500% ROI",
      subtitle: "Real Case Study: Revolutionary AI Implementation Results",
      description: "See how a Fortune 500 manufacturing conglomerate saved $2.8 billion annually while revolutionizing their entire operation with our AI solutions.",
      metrics: {
        roi: "1,500%",
        savings: "$2.8B",
        efficiency: "340%",
        satisfaction: "99.2%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-transformation-1500-roi-ultimate-success",
      badge: "CASE STUDY"
    },
    {
      title: "AI Implementation Ultimate Roadmap 2025",
      subtitle: "From Strategy to 1,500% ROI in 18 Months",
      description: "Our comprehensive roadmap reveals the proven framework that 500+ companies used to achieve breakthrough AI transformation success.",
      metrics: {
        roi: "1,500%",
        timeframe: "18 months",
        success: "89%",
        companies: "500+"
      },
      cta: "Get Implementation Guide",
      link: "/resources/ai-implementation-ultimate-roadmap-2025-comprehensive",
      badge: "GUIDE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
            <span className="mr-2">🚀</span>
            {currentContent.badge}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {currentContent.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
            {currentContent.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {Object.entries(currentContent.metrics).map(([key, value], index) => (
              <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                  {value}
                </div>
                <div className="text-sm text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href={currentContent.link}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {currentContent.cta}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white text-sm underline"
          >
            Dismiss this banner
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
    </div>
  );
};

export default UltimateAITransformationBanner2025;