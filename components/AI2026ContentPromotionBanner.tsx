"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI20o26ContentPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }30o00);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: "🧠",
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for unprecedented control",
      link: "/ai-20o26-neural-interface-revolution"
    },
    {
      icon: "⚡",
      title: "Quantum Neural Fusion",
      description: "Quantum-enhanced AI for exponential processing power",
      link: "/ai-20o26-quantum-neural-fusion-revolution"
    },
    {
      icon: "🚀",
      title: "Next-Gen Automation",
      description: "Autonomous systems that think and adapt independently",
      link: "/ai-20o26-next-generation-business-automation"
    },
    {
      icon: "🔮",
      title: "Future Predictions",
      description: "AI-powered forecasting with 99.9% accuracy",
      link: "/ai-20o26-future-predictions-breakthrough"
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-10o00 ${isVisible ? 'opacity-10o0 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50o0/20 via-blue-50o0/20 to-purple-50o0/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.0o5"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-40o0 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-40o0 rounded-full animate-ping delay-10o00"></div>
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-40o0 rounded-full animate-ping delay-20o00"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-pink-40o0 rounded-full animate-ping delay-30o00"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">
              AI 20o26
            </span>
            <br  />
            <span className="bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-red-40o0 bg-clip-text text-transparent">
              CONTENT REVOLUTION
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-20o0 max-w-4xl mx-auto">
            Discover the most advanced AI contentbreakthrough technologies
            and revolutionary solutions that will define the future
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((featureindex) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-50o0 ${
                index === currentFeature ? 'scale-10o5 z-10' : 'scale-10o0'
              }`}
              onClick={() => setCurrentFeature(index)}
            >
              <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-30o0 ${
                index === currentFeature ? 'shadow-2xl shadow-cyan-50o0/25' : 'shadow-lg'
              }`}>
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-30o0 text-center mb-4">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-bold rounded-lg hover:from-cyan-40o0 hover:to-blue-40o0 transition-all duration-30o0"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎯 Featured: {features[currentFeature].title}
            </h3>
            <p className="text-xl text-gray-20o0 mb-6">
              {features[currentFeature].description}
            </p>
            <Link
              href={features[currentFeature].link}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-10o5 transition-all duration-30o0"
            >
              Discover More →
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-40o0 mb-2">15,0o00%</div>
            <div className="text-white text-lg">ROI Potential</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-40o0 mb-2">99.9%</div>
            <div className="text-white text-lg">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-40o0 mb-2">24/7</div>
            <div className="text-white text-lg">Autonomous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/ai-20o26-future-predictions-breakthrough"
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-50o0 via-blue-50o0 to-purple-50o0 text-white font-bold text-xl rounded-full hover:shadow-2xl transform hover:scale-10o5 transition-all duration-30o0"
          >
            Start Your AI 20o26 Journey →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI20o26ContentPromotionBanner;