'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Success Stories Showcase",
      description: "Discover real results from real clients with our comprehensive success stories collection",
      cta: "View Success Stories",
      href: "/success-stories",
      color: "from-purple-600 to-blue-600",
      bgColor: "from-purple-50 to-blue-50"
    },
    {
      id: 2,
      title: "💰 INTERACTIVE: ROI Calculator 2025",
      description: "Calculate your potential AI automation ROI with our advanced interactive calculator",
      cta: "Calculate Your ROI",
      href: "/roi-calculator",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      title: "🔍 DISCOVER: Content Discovery Widget",
      description: "Explore our comprehensive library of guides, case studies, and frameworks",
      cta: "Explore Content",
      href: "/content-discovery",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 4,
      title: "📊 FEATURED: Case Studies Showcase",
      description: "Proven success across industries with detailed transformation stories",
      cta: "View Case Studies",
      href: "/case-studies",
      color: "from-slate-600 to-blue-600",
      bgColor: "from-slate-50 to-blue-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Promotion Banner */}
        <div className={`bg-gradient-to-r ${currentContent.bgColor} rounded-3xl p-12 mb-16 relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {currentContent.title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={currentContent.href}
                className={`bg-gradient-to-r ${currentContent.color} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/content"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {promotionalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promotionalContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                index === currentSlide ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                {index === 0 && '🏆'}
                {index === 1 && '💰'}
                {index === 2 && '🔍'}
                {index === 3 && '📊'}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {content.title.split(': ')[1]}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.description}
              </p>
              <Link
                href={content.href}
                className={`inline-flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${content.color} hover:opacity-80 transition-opacity`}
              >
                {content.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Library Statistics</h3>
            <p className="text-xl text-gray-600">Our comprehensive collection of resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Guides & Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Interactive Tools</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with New Content</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new case studies, guides, and interactive tools. 
            Join thousands of professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2025;