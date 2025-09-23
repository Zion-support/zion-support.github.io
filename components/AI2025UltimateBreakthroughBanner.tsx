"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "100,000%", label: "ROI Increase", color: "text-green-400" },
    { value: "$500M+", label: "Revenue Generated", color: "text-blue-400" },
    { value: "99.9%", label: "Success Rate", color: "text-purple-400" },
    { value: "24/7", label: "AI Operations", color: "text-orange-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-bounce delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH 2025</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Breakthrough
            </span>
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Experience the most revolutionary AI transformation that delivers unprecedented results and transforms your business beyond imagination
          </p>
        </div>

        {/* Dynamic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`text-5xl font-bold mb-2 ${stat.color} ${currentStat === index ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Neural Superintelligence</h3>
            <p className="text-sm opacity-80">Advanced AI consciousness that thinks and learns like humans</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quantum Processing</h3>
            <p className="text-sm opacity-80">Quantum-powered AI that processes data at light speed</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-sm opacity-80">See the future with 99.9% accuracy predictions</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready for the Ultimate AI Breakthrough?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Join the elite companies already experiencing the future of AI. 
              Transform your business with technology that was once science fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughBanner;