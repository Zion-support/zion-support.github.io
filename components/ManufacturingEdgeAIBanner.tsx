"use client";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Factory, Cpu, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export default function ManufacturingEdgeAIBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-8 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Factory className="w-4 h-4" />
                <span className="text-sm font-semibold">MANUFACTURING BREAKTHROUGH</span>
              </div>
              <div className="bg-green-400/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-bold">$12.7B SUCCESS</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Manufacturing: $12.7B Edge AI & Robotics Transformation 🏭
            </h3>
            
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              <strong>Fortune 100 Manufacturer</strong> | 847 Facilities | 50,000+ Robots
              <br/>
              Edge AI and autonomous robotics deliver 94% reduction in downtime and 99.2% equipment uptime
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Cpu className="w-4 h-4 text-cyan-300" />
                <span>98.7% Quality Detection</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>99.2% Equipment Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>62% Carbon Reduction</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Link
              to="/case-studies/ai-2025-oct-01-manufacturing-edge-ai-robotics-transformation-12-7-billion-success"
              className="group bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-bold text-center transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Success Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services/manufacturing-ai"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 border border-white/30"
            >
              Request Demo
            </Link>
            
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
