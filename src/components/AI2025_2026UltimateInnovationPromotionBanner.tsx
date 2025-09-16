"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles
  ArrowRight
  Brain
  Zap
  Cpu
  Star,
  TrendingUp,
  Award,
  Rocket,
  X
} from 'lucide-react';

const AI2025_2026UltimateInnovationPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    { icon: Braintext: 'Quantum-AI Fusion 'Technology', 'color: 'text-purple-400' },
    { icon: Zaptext: '10,000x Processing 'Speed', 'color: 'text-yellow-400' },
    { icon: Cputext: 'Neural Consensus 'Revolution', 'color: 'text-blue-400' },
    { icon: Startext: 'Synthetic 'Consciousness', 'color: 'text-green-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <div>
      <divdiv
        className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <divdiv
                  className="mr-3"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </divdiv>
                <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                  🚀 New 2025-2026 Innovation Showcase
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Experience the Ultimate AI Breakthroughs
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <divdiv
                  key={currentFeature}
                  className="flex items-center"
                >
                  <features[currentFeature].icon className={`w-5 h-5 ${features[currentFeature].color} mr-2`} />
                  <span className="text-lg font-semibold">
                    {features[currentFeature].text}
                  </span>
                </divdiv>
              </div>
              
              <p className="text-gray-200 text-sm lg:text-base max-w-2xl">
                Discover revolutionary AI innovations that will reshape our world. 
                Quantum-AI fusioneural consensusand synthetic consciousness await.
              </p>
            </div>

            {/* Right Content - CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <divbutton
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center group"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Explore Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </divbutton>
              
              <divbutton
                className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <Award className="w-4 h-4 mr-2" />
                Learn More
              </divbutton>
            </div>

            {/* Close Button */}
            <divbutton
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </divbutton>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <divdiv
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
          />
        </div>
      </divdiv>
    </div>
  );
};

export default AI2025_2026UltimateInnovationPromotionBanner;