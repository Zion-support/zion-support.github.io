"use client";
import React, { useState, useEffect } from 'react';
AtomZapCpuArrowRightXStar
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const QuantumComputingPromotionBanner2025: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    {
      title: "10,000x Faster Processing",
      description: "Quantum-neural fusion achieves unprecedented computational speed",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Unbreakable Security",
      description: "Quantum cryptography provides theoretically perfect encryption",
      icon: Atom,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Infinite Possibilities",
      description: "Quantum computing opens new frontiers in AI and optimization",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }4000);

    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <div>
      <divdiv
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-cyan-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left side - Quantum Badge */}
            <div className="flex items-center gap-4">
              <divdiv
                key={currentFeature}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${features[currentFeature].color} text-white font-bold text-sm animate-pulse`}
              >
                QUANTUM REVOLUTION
              </divdiv>
              
              {/* Rotating Icon */}
              <divdiv
                key={`icon-${currentFeature}`}
                className={`p-2 rounded-full bg-gradient-to-r ${features[currentFeature].color}`}
              >
                <features[currentFeature].icon className="w-6 h-6 text-white" />
              </divdiv>
            </div>

            {/* Center - Feature Content */}
            <div className="flex-1 text-center px-8">
              <divdiv
                key={`content-${currentFeature}`}
                className="space-y-1"
              >
                <h3 className="text-lg font-bold text-white">
                  {features[currentFeature].title}
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {features[currentFeature].description}
                </p>
              </divdiv>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-4">
              <a href="/quantum-computing-showcase-2025">
                <divbutton
                  className={`bg-gradient-to-r ${features[currentFeature].color} hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2`}
                >
                  <Star className="w-4 h-4" />
                  Explore Quantum
                  <ArrowRight className="w-4 h-4" />
                </divbutton>
              </a>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse"></div>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_i) => (
            <divdiv
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0-20],
                opacity: [010],
                scale: [0.51.50.5],
              }}
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </divdiv>
    </div>
  );
};

export default QuantumComputingPromotionBanner2025;