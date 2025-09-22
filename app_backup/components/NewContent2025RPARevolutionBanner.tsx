'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const NewContent2025RPARevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('rpa-revolution-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('rpa-revolution-banner-dismissed', 'true');
  };

  const slides = [
    {
      title: "AI 2025: RPA Revolution",
      subtitle: "800% ROI Through Intelligent Automation",
      description: "Transform your business with AI-powered Robotic Process Automation",
      metrics: "800% ROI • $4.2M Savings • 340% Efficiency",
      cta: "Explore RPA Guide",
      link: "/blog/ai-2025-robotic-process-automation-revolution-ultimate-guide",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Fortune 100 Success Story",
      subtitle: "$4.2B Annual Savings Achieved",
      description: "See how a global manufacturing giant achieved unprecedented RPA success",
      metrics: "800% ROI • 127 Processes • 12 Months",
      cta: "Read Case Study",
      link: "/case-studies/fortune-100-rpa-transformation-800-roi-success",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "Complete Blueprint for RPA Success",
      description: "Step-by-step guide from strategy to 800% ROI implementation",
      metrics: "35 Min Read • Complete Framework • Proven Results",
      cta: "Get Implementation Guide",
      link: "/resources/rpa-implementation-master-guide-2025",
      color: "from-purple-600 to-pink-600"
    }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-20"></div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            RPA Revolution: 800% ROI Success Stories
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Discover how Fortune 100 companies are achieving unprecedented success with AI-powered Robotic Process Automation
          </p>
        </div>

        {/* Slide Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} rounded-2xl p-8 text-center`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-lg md:text-xl font-semibold mb-3 opacity-90">{slide.subtitle}</p>
                    <p className="text-base md:text-lg mb-4 opacity-80 max-w-2xl mx-auto">{slide.description}</p>
                    
                    {/* Metrics */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{slide.metrics}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={slide.link}
                      className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {slide.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
            <h4 className="text-lg font-semibold mb-2">800% ROI Guaranteed</h4>
            <p className="text-sm opacity-80">Proven results from Fortune 100 implementations</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-blue-300" />
            <h4 className="text-lg font-semibold mb-2">12-Month Implementation</h4>
            <p className="text-sm opacity-80">Complete transformation in under one year</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-purple-300" />
            <h4 className="text-lg font-semibold mb-2">340% Efficiency Gain</h4>
            <p className="text-sm opacity-80">Dramatic improvement in process efficiency</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-sm opacity-80 mb-4">
            Ready to transform your business with RPA? Get started with our comprehensive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025RPARevolutionBanner;