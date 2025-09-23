"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughPromotionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 NEW: AI 2025 Ultimate Content Revolution",
      subtitle: "50,000% ROI Success Stories & Implementation Guides",
      cta: "Explore Now",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "💰 Interactive ROI Calculator",
      subtitle: "Calculate Your AI Investment Returns in Real-Time",
      cta: "Calculate ROI",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "🏆 Success Stories Showcase",
      subtitle: "Real Results from Fortune 500 Companies",
      cta: "View Stories",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "📧 Revolutionary Newsletter",
      subtitle: "Exclusive AI Insights & Breakthrough Technologies",
      cta: "Subscribe Free",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCTAClick = () => {
    // Scroll to the content section
    const contentSection = document.getElementById('content-showcase');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-8 animate-pulse">
              <span className="text-sm font-bold">🔥 NEW CONTENT 2025 - ULTIMATE BREAKTHROUGH</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionary AI Content & Tools
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI insights, interactive calculators, success stories, 
              and exclusive content 'that', 's transforming businesses worldwide.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">ROI Calculator</h3>
                <p className="text-gray-300 text-sm">Calculate your AI investment returns</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-lg font-bold text-white mb-2">Success Stories</h3>
                <p className="text-gray-300 text-sm">Real results from top companies</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-bold text-white mb-2">Expert Content</h3>
                <p className="text-gray-300 text-sm">50+ articles from AI experts</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="text-lg font-bold text-white mb-2">Newsletter</h3>
                <p className="text-gray-300 text-sm">Weekly AI insights & trends</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Explore New Content
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">250K+</div>
                <div className="text-gray-300">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">340%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Rotating Slides */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`w-full flex-shrink-0 bg-gradient-to-r ${slide.color} p-8 md:p-12`}
                  >
                    <div className="text-center">
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90 mb-6">
                        {slide.subtitle}
                      </p>
                      <button
                        onClick={handleCTAClick}
                        className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                      >
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Google</div>
              <div className="text-white font-semibold">Amazon</div>
              <div className="text-white font-semibold">IBM</div>
              <div className="text-white font-semibold">Tesla</div>
              <div className="text-white font-semibold">OpenAI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughPromotionBanner;