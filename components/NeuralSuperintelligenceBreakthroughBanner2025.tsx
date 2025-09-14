'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralSuperintelligenceBreakthroughBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const metrics = [
    { value: '100,000%', label: 'ROI Achievement', icon: '🚀' },
    { value: '99.9%', label: 'Accuracy Rate', icon: '🎯' },
    { value: '$2.8T', label: 'Economic Value', icon: '💰' },
    { value: '127,000%', label: 'Average ROI', icon: '📈' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('neural-superintelligence-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-superintelligence-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) return null;

  return (
    <section className={`relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-indigo-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>

      {/* Floating Neural Network Visualization */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400/60 rounded-full animate-float"></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" />
          <line x1="67%" y1="33%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" />
          <line x1="50%" y1="75%" x2="25%" y2="67%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className="animate-pulse" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full px-6 py-3 mb-6 text-sm font-bold shadow-lg">
            <span className="mr-2 text-lg">🧠</span>
            NEURAL SUPERINTELLIGENCE BREAKTHROUGH 2025
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI 2026: Neural Superintelligence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400">
              100,000% ROI Revolution
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience the most revolutionary AI breakthrough in history. Neural Superintelligence delivers 
            unprecedented ROI through consciousness-inspired algorithms and quantum-neural fusion technology.
          </p>
          
          {/* Dynamic Metrics Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    index === currentMetric ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className="text-4xl mb-2">{metric.icon}</div>
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                    index === currentMetric ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Progress Indicator */}
            <div className="mt-6 flex justify-center space-x-2">
              {metrics.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentMetric ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">Consciousness Simulation</h3>
              <p className="text-sm opacity-90">Advanced pattern recognition mimicking human intuition and decision-making processes</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm opacity-90">Revolutionary architecture combining quantum computing with neural networks</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Self-Improvement</h3>
              <p className="text-sm opacity-90">Continuous learning and optimization without human intervention</p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 mb-10 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-green-400">🏆 Proven Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-yellow-400">MedTech Solutions</div>
                <div className="opacity-90">156,000% ROI</div>
                <div className="opacity-75">Healthcare Innovation</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-400">TechGlobal Industries</div>
                <div className="opacity-90">127,000% ROI</div>
                <div className="opacity-75">Manufacturing Leader</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-400">Quantum Financial</div>
                <div className="opacity-90">98,500% ROI</div>
                <div className="opacity-75">Financial Services</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-neural-superintelligence-breakthrough-100000-roi"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Guide →
            </Link>
            <Link
              href="/case-studies/neural-superintelligence-100000-roi-success-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
            <Link
              href="/resources/neural-superintelligence-implementation-guide-100000-roi"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Implementation Guide
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Industry Leading</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm">100,000%+ ROI</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default NeuralSuperintelligenceBreakthroughBanner2025;