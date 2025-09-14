'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025PromotionalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "AI Trends 2025 Guide",
      description: "Revolutionary breakthroughs transforming industries",
      icon: "🚀",
      link: "/blog/ai-trends-2025-ultimate-guide"
    },
    {
      title: "Fortune 500 Case Study",
      description: "340% ROI with AI transformation",
      icon: "💼",
      link: "/case-studies/fortune-500-ai-transformation"
    },
    {
      title: "Interactive ROI Calculator",
      description: "Calculate your potential AI returns",
      icon: "📊",
      link: "#roi-calculator"
    },
    {
      title: "Success Stories",
      description: "Real results from industry leaders",
      icon: "⭐",
      link: "#testimonials"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content & Tools
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, real success stories, and interactive tools 
            that will transform your understanding of artificial intelligence in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:bg-opacity-20 hover:scale-105 ${
                index === currentFeature ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-sm font-medium bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">340%</div>
            <div className="text-lg opacity-90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-lg opacity-90">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join hundreds of companies already achieving remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all">
                Try ROI Calculator
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionalBanner;