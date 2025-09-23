"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: '🧠', title: 'Neural Superintelligence', description: 'Advanced AI with human-level cognition' },
    { icon: '⚛️', title: 'Quantum-Neural Fusion', description: 'Revolutionary quantum computing integration' },
    { icon: '🤖', title: 'Autonomous Systems', description: 'Self-managing business operations' },
    { icon: '🎯', title: 'Neural Interfaces', description: 'Direct brain-computer connectivity' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/10 rounded-full w-2 h-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Technologies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the latest breakthroughs in neural superintelligence, quantum computing, 
              and autonomous business systems that are transforming industries worldwide.
            </p>

            {/* Rotating Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{features[currentFeature].icon}</div>
                <div>
                  <div className="text-sm text-white/80 mb-1">Featured Technology:</div>
                  <div className="text-xl font-bold text-yellow-300 transition-all duration-500">
                    {features[currentFeature].title}
                  </div>
                  <div className="text-sm text-white/80">
                    {features[currentFeature].description}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/content"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Content - Interactive Elements */}
          <div className="space-y-6">
            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">500%+</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">1000+</div>
                <div className="text-sm opacity-80">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">99%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>

            {/* Technology Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-center">Featured Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`text-center p-3 rounded-lg transition-all duration-300 ${
                      currentFeature === index ? 'bg-white/20' : 'bg-white/5'
                    }`}
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="text-sm font-medium">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity="0.25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity="0.5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;