'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, TrendingUp, Users, Shield } from 'lucide-react';

const AutomationMasteryBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('automation-mastery-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('automation-mastery-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">🚀 AUTOMATION MASTERY</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-white/80">
                <Users className="w-4 h-4" />
                <span>Enterprise Ready</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              AI 2025: Enterprise Automation Mastery
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-3">
              Ultimate Guide to 1,500% ROI
            </p>
            <p className="text-sm sm:text-base text-white/80 mb-4 max-w-2xl">
              Master enterprise automation with our comprehensive guide achieving 1,500% ROI through advanced AI systems and autonomous operations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm font-medium text-white/90">Success Metrics</div>
                  <div className="text-xs text-white/70">1,500% ROI • $8.5B Savings • 99% Automation</div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Shield className="w-4 h-4" />
                  <span>Fortune 500 Proven</span>
                </div>
              </div>
              
              <Link
                href="/blog/ai-2025-enterprise-automation-mastery"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Discover Mastery
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomationMasteryBanner;