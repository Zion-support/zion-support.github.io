"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
XShieldZapTrendingUpCheckCircle

const NewContent2025CybersecurityBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('cybersecurity-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('cybersecurity-banner-dismissed'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-6 w-6 text-yellow-300" />
              <span className="text-sm font-semibold bg-yellow-300 text-black px-3 py-1 rounded-full">
                NEW: AI CYBERSECURITY REVOLUTION 2025
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              🛡️ AI Cybersecurity Revolution: 99.9% Security with AI
            </h2>
            
            <p className="text-lg mb-4 opacity-90 max-w-3xl">
              Discover how AI is transforming enterprise security with 89% incident reduction
              340% faster threat detectionand $2.8M average savings. Learn from real Fortune 500 success stories.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-1 text-sm">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>89% Incident Reduction</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span>340% Faster Detection</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-300" />
                <span>$2.8M Average Savings</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-2025-cybersecurity-revolution"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Shield className="h-5 w-5 mr-2" />
                Read Cybersecurity Guide
              </Link>
              <Link
                href="/case-studies/ai-cybersecurity-enterprise-success-2025"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                View Success Story
              </Link>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025CybersecurityBanner;