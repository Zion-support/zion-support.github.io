"use client";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Sparkles, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export default function EnterprisePlatformModernizationBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white py-8 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Badge & Title */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">NEW ENTERPRISE GUIDE</span>
              </div>
              <div className="bg-green-400/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-bold">OCTOBER 2025</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Enterprise AI Platform Modernization Guide 🚀
            </h3>
            
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              <strong>$2.8B+ Value Creation</strong> | 10x Faster Deployments | 65% Cost Reduction
              <br/>
              The complete roadmap for modernizing legacy AI infrastructure into cloud-native platforms
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>10x Development Velocity</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>99.8% Platform Reliability</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>MLOps Excellence</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Link
              to="/blog/ai-2025-oct-01-enterprise-ai-platform-modernization-guide"
              className="group bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-center transition-all duration-200 flex items-center justify-center gap-2"
            >
              Read Complete Guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services/enterprise-ai"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 border border-white/30"
            >
              Get Free Assessment
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
