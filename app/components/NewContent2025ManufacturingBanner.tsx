'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Factory, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

const NewContent2025ManufacturingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('manufacturing-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('manufacturing-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Factory className="w-5 h-5" />
                <span className="text-sm font-medium">NEW: MANUFACTURING AI REVOLUTION</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium">500% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              AI 2025: The Manufacturing Revolution
              <span className="block text-yellow-300">Smart Factories Achieving 500% ROI</span>
            </h2>

            <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-4xl">
              Discover how Fortune 500 manufacturers are transforming operations with AI, 
              achieving unprecedented efficiency gains and cost savings.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">92% Defect Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">78% Efficiency Gain</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">$50M Annual Savings</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-manufacturing-revolution-ultimate-guide"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/fortune-500-manufacturing-ai-transformation-2025"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-center">Success Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">ROI Achievement</span>
                  <span className="text-yellow-300 font-bold">500%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Efficiency Gain</span>
                  <span className="text-green-300 font-bold">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cost Savings</span>
                  <span className="text-blue-300 font-bold">$50M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Defect Reduction</span>
                  <span className="text-purple-300 font-bold">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NewContent2025ManufacturingBanner;