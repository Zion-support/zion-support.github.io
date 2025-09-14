"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
XCloudZapTrendingUpCheckCircleDollarSign

const NewContent2025CloudOptimizationBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('cloud-optimization-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('cloud-optimization-banner-dismissed'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white overflow-hidden">
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
              <Cloud className="h-6 w-6 text-yellow-300" />
              <span className="text-sm font-semibold bg-yellow-300 text-black px-3 py-1 rounded-full">
                NEW: AI CLOUD OPTIMIZATION BREAKTHROUGH 2025
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              ☁️ AI Cloud Optimization: 67% Cost Reduction340% Performance Boost
            </h2>
            
            <p className="text-lg mb-4 opacity-90 max-w-3xl">
              Transform your cloud infrastructure with AI-powered optimization. Achieve 67% cost reduction
              340% performance improvementand $4.2M average savings. Complete implementation guide included.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-1 text-sm">
                <DollarSign className="h-4 w-4 text-green-300" />
                <span>67% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span>340% Performance Boost</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-300" />
                <span>$4.2M Average Savings</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-2025-cloud-optimization-breakthrough"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Cloud className="h-5 w-5 mr-2" />
                Read Cloud Optimization Guide
              </Link>
              <Link
                href="/resources/ai-cloud-optimization-master-guide-2025"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Get Master Guide
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

export default NewContent2025CloudOptimizationBanner;