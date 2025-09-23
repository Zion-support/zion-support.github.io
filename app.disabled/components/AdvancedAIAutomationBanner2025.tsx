'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Zap } from 'lucide-react';

const AdvancedAIAutomationBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: Advanced Automation Enterprise Mastery",
      subtitle: "750% ROI Breakthrough",
      description: "Discover how Fortune 500 companies are achieving unprecedented 750% ROI through advanced AI automation. Complete implementation guide with real-world case studies.",
      metrics: {
        roi: "750%",
        savings: "$3.2B",
        efficiency: "340%",
        satisfaction: "94%"
      },
      cta: "Read Full Guide",
      link: "/blog/ai-2025-advanced-automation-enterprise-mastery"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      subtitle: "$3.2B Annual Savings with 850% ROI",
      description: "Complete case study of how a Fortune 100 manufacturing giant achieved $3.2 billion in annual savings through comprehensive AI automation transformation.",
      metrics: {
        roi: "850%",
        savings: "$3.2B",
        efficiency: "340%",
        satisfaction: "94%"
      },
      cta: "View Case Study",
      link: "/case-studies/fortune-500-ai-automation-transformation-2025"
    },
    {
      title: "AI Automation Implementation Master Guide",
      subtitle: "From Strategy to 850% ROI",
      description: "Complete step-by-step guide for implementing AI automation in your enterprise. Includes proven frameworks, best practices, and real-world strategies.",
      metrics: {
        roi: "850%",
        success: "98%",
        timeframe: "18 months",
        payback: "2.1 months"
      },
      cta: "Download Guide",
      link: "/resources/ai-automation-implementation-master-guide-2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                NEW 2025 CONTENT
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>

              {/* Subtitle */}
              <div className="text-xl md:text-2xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  {currentContent.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              {/* Main Visual */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mx-auto">
                    <Zap className="w-8 h-8 text-black" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">750%</div>
                      <div className="text-sm text-gray-300">Average ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">$3.2B</div>
                      <div className="text-sm text-gray-300">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">340%</div>
                      <div className="text-sm text-gray-300">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">98%</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      <span>Proven Implementation Framework</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-blue-400" />
                      <span>Fortune 500 Case Studies</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Industry-Leading Results</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
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

export default AdvancedAIAutomationBanner2025;