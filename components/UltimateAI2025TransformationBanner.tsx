"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const UltimateAI2025TransformationBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      subtitle: 'Achieve 5,000% ROI with Our Complete Implementation Framework',
      description: 'Transform your business with the proven framework that has generated $15.8B in annual savings for Fortune 500 companies.',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        efficiency: '2,400%',
        satisfaction: '99.7%'
      },
      cta: 'Get Your Free Implementation Guide',
      link: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-5000-roi',
      badge: 'ULTIMATE BREAKTHROUGH'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success Story',
      subtitle: '$15.8B Annual Savings - 5,000% ROI Ultimate Success',
      description: 'Discover how a Fortune 500 manufacturing company achieved unprecedented results in just 18 months.',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        timeline: '18 months',
        uptime: '99.9%'
      },
      cta: 'Read the Complete Case Study',
      link: '/case-studies/fortune-500-ultimate-ai-transformation-5000-roi-ultimate-success-story',
      badge: 'SUCCESS STORY'
    },
    {
      id: 'implementation-guide',
      title: 'Complete AI Implementation Master Guide',
      subtitle: 'From Strategy to 5,000% ROI - Complete Roadmap',
      description: 'Get the comprehensive 45-minute guide that reveals the exact framework used by Fortune 500 companies.',
      metrics: {
        roi: '5,000%',
        guide: '45 min',
        success: '94%',
        projects: '500+'
      },
      cta: 'Download Free Guide',
      link: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-5000-roi',
      badge: 'MASTER GUIDE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }5000);

    return () => clearInterval(timer);
  }[content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-2025-banner-dismissed'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <span className="mr-2">🚀</span>
              {currentContent.badge}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {currentContent.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl md:text-2xl text-blue-200 mb-4 font-semibold">
              {currentContent.subtitle}
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-200 mb-6 max-w-3xl leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(currentContent.metrics).map(([keyvalue]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default UltimateAI2025TransformationBanner;