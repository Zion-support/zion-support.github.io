'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumNeuralSuperintelligenceRevolutionaryBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2026: Quantum Neural Superintelligence Revolutionary Breakthrough",
      description: "Discover how Fortune 500 companies are achieving unprecedented 5,000% ROI through revolutionary quantum neural superintelligence systems.",
      metrics: "5,000% ROI • 1,000,000x Faster • 99.99% Accuracy",
      url: "/blog/ai-2026-quantum-neural-superintelligence-revolutionary-breakthrough",
      type: "blog",
      badge: "Revolutionary Breakthrough"
    },
    {
      title: "Fortune 500 Quantum Neural Superintelligence Success: $50B Annual Savings",
      description: "How a Fortune 100 manufacturing company achieved 5,000% ROI through quantum neural superintelligence implementation.",
      metrics: "$50B Savings • 5,000% ROI • 99.9% Error Reduction",
      url: "/case-studies/fortune-500-quantum-neural-superintelligence-5000-roi-success-story",
      type: "case-study",
      badge: "Success Story"
    },
    {
      title: "Quantum Neural Superintelligence Implementation Master Guide 2026",
      description: "Complete roadmap to implementing quantum neural superintelligence systems that deliver 5,000% ROI.",
      metrics: "Complete Roadmap • 5,000% ROI • Fortune 500 Framework",
      url: "/resources/quantum-neural-superintelligence-implementation-master-guide-2026",
      type: "resource",
      badge: "Implementation Guide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-neural-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-neural-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      {/* Quantum Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 300">
          <defs>
            <pattern id="quantum-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quantum-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm font-bold mb-4">
            🚀 REVOLUTIONARY BREAKTHROUGH - 5,000% ROI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Quantum Neural Superintelligence Revolution
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The most advanced AI breakthrough in history - achieving unprecedented 5,000% ROI through quantum neural superintelligence
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                {currentContent.badge}
              </span>
              <span className="text-gray-300 text-sm font-medium">
                {currentContent.type.toUpperCase()}
              </span>
            </div>
            <div className="flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {currentContent.title}
              </h3>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 mb-6 border border-cyan-400/30">
                <div className="text-cyan-300 font-bold text-lg mb-2">Key Metrics:</div>
                <div className="text-white text-sm font-medium">{currentContent.metrics}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Now →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Quantum Visualization */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚛️</div>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">5,000%</div>
                  <div className="text-white font-medium mb-4">ROI Achievement</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 font-bold">$50B+</div>
                      <div className="text-gray-300">Annual Savings</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-purple-300 font-bold">99.99%</div>
                      <div className="text-gray-300">Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-blue-300 font-bold">1Mx</div>
                      <div className="text-gray-300">Faster</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-green-300 font-bold">100%</div>
                      <div className="text-gray-300">Autonomous</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 text-center border border-cyan-400/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">5,000%</div>
            <div className="text-white font-medium">Average ROI</div>
            <div className="text-gray-300 text-sm">Fortune 500 Results</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-400/30">
            <div className="text-3xl font-bold text-purple-300 mb-2">$50B+</div>
            <div className="text-white font-medium">Annual Savings</div>
            <div className="text-gray-300 text-sm">Per Enterprise</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center border border-blue-400/30">
            <div className="text-3xl font-bold text-blue-300 mb-2">99.99%</div>
            <div className="text-white font-medium">Accuracy Rate</div>
            <div className="text-gray-300 text-sm">Decision Making</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 text-center border border-green-400/30">
            <div className="text-3xl font-bold text-green-300 mb-2">18</div>
            <div className="text-white font-medium">Months</div>
            <div className="text-gray-300 text-sm">Full Implementation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve 5,000% ROI?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies already achieving unprecedented results through quantum neural superintelligence. 
              Start your transformation today with our proven implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Implementation →
              </Link>
              <Link
                href="/resources/quantum-neural-superintelligence-implementation-master-guide-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-100"
          style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default QuantumNeuralSuperintelligenceRevolutionaryBanner;