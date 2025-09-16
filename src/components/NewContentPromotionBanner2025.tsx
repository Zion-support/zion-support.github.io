"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: 'Interactive Demos',
      description: 'Experience AI in action with our hands-on demonstrations',
      icon: '🎮',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Success Stories',
      description: 'Real case studies with measurable ROI results',
      icon: '📈',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Expert Insights',
      description: 'Latest AI trends and industry analysis from our experts',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Interactive Tools',
      description: 'ROI calculators and assessment tools to explore your potential',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">✨ NEW CONTENT 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Our Latest
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Content
              </span>
            </h2>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Explore interactive demos, success stories, expert insights, and powerful tools 
              that showcase the future of AI in business transformation.
            </p>

            {/* Feature Highlight */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className={`text-4xl bg-gradient-to-r ${features[currentFeature].color} bg-clip-text text-transparent`}>
                  {features[currentFeature].icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/content"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore New Content
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Try Interactive Demo
              </a>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 transition-all duration-500 hover:bg-opacity-20 hover:transform hover:scale-105 ${
                  index === currentFeature ? 'ring-2 ring-white ring-opacity-50' : ''
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className={`text-3xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-yellow-300 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-sm opacity-90">New Articles</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-green-300 mb-2">25+</div>
            <div className="text-sm opacity-90">Case Studies</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-300 mb-2">10+</div>
            <div className="text-sm opacity-90">Interactive Tools</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
            <div className="text-sm opacity-90">Live Demos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;