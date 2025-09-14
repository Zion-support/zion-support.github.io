'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('revolutionary-content-2025-ultimate-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const featuredContent = [
    {
      title: "AI 2025: The Enterprise Automation Ultimate Breakthrough",
      description: "Complete guide revealing how Fortune 500 companies achieve 1,200% ROI with revolutionary AI automation strategies.",
      metrics: "1,200% ROI • $2.8B Savings • 18 Months",
      link: "/blog/ai-2025-enterprise-automation-ultimate-breakthrough-complete-guide",
      type: "Ultimate Guide",
      icon: "🚀",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Fortune 500 AI Transformation: $2.8B Annual Savings",
      description: "Real case study showing how a Fortune 500 manufacturing company achieved unprecedented success with AI automation.",
      metrics: "1,200% ROI • $2.8B Savings • Fortune 500",
      link: "/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success",
      type: "Success Story",
      icon: "🏆",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "AI 2025 Implementation Ultimate Success Framework",
      description: "The definitive framework for implementing AI automation. Proven strategies for achieving 1,200% ROI in your organization.",
      metrics: "1,200% ROI • 94% Success Rate • Complete Framework",
      link: "/resources/ai-2025-implementation-ultimate-success-framework",
      type: "Implementation Guide",
      icon: "📋",
      color: "from-orange-600 to-red-600"
    }
  ];

  const currentItem = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-indigo-500/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-36 h-36 bg-purple-500/5 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold">🔥 REVOLUTIONARY AI CONTENT 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              The Ultimate AI Breakthrough Collection
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary AI strategies that are transforming Fortune 500 companies with unprecedented ROI and efficiency gains
            </p>
          </div>

          {/* Main showcase */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentItem.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {currentItem.icon}
                  </div>
                  <div>
                    <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentItem.type}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {currentItem.title}
                </h2>

                <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Success metrics */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 mb-8 border border-green-500/30">
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-bold text-lg">{currentItem.metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentItem.link}
                    className={`bg-gradient-to-r ${currentItem.color} text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all transform hover:scale-105 text-center`}
                  >
                    Explore {currentItem.type}
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Get Expert Consultation
                  </Link>
                </div>
              </div>

              {/* Visual showcase */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`w-80 h-80 bg-gradient-to-br ${currentItem.color} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center z-10">
                      <div className="text-8xl mb-4">{currentItem.icon}</div>
                      <div className="text-4xl font-bold mb-2">1,200%</div>
                      <div className="text-lg opacity-75">Average ROI</div>
                    </div>
                    {/* Animated elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000"></div>
                    <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-2000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content navigation */}
          <div className="flex justify-center gap-3 mb-12">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Impact statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1,200%</div>
              <div className="text-sm opacity-75">Average ROI</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-sm opacity-75">Annual Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">94%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">18</div>
              <div className="text-sm opacity-75">Months to ROI</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Join the Fortune 500 companies that are achieving unprecedented success with AI automation. Get your comprehensive AI readiness assessment and implementation strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all transform hover:scale-105"
              >
                Start Your AI Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;