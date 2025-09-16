"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2025PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "50,000%", label: "Average ROI", color: "text-green-500" },
    { number: "500+", label: "Success Stories", color: "text-blue-500" },
    { number: "98%", label: "Client Satisfaction", color: "text-purple-500" },
    { number: "24/7", label: "Support Available", color: "text-orange-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎉 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, success stories, and interactive tools that are transforming businesses worldwide.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                currentStat === index ? 'transform scale-110' : 'opacity-70'
              }`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Automation</h3>
            <p className="opacity-90">
              Streamline operations with intelligent automation solutions
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Analytics & Insights</h3>
            <p className="opacity-90">
              Make data-driven decisions with advanced AI analytics
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Transformation</h3>
            <p className="opacity-90">
              Complete digital transformation with proven results
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/services"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore New Content
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Started Today
            </a>
          </div>
          <p className="text-lg opacity-75">
            Join 10,000+ companies already transforming with our AI solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionalBanner;