'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon, ArrowRightIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline';

export default function NewContentPromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('new-content-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('new-content-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-5 w-5 text-yellow-300 animate-pulse" />
              <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🚀 NEW CONTENT DROPPED
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/blog/ai-2025-revolutionary-breakthroughs" 
                className="text-sm hover:text-yellow-200 transition-colors"
              >
                Revolutionary AI Breakthroughs
              </Link>
              <span className="text-indigo-300">•</span>
              <Link 
                href="/case-studies/ai-financial-services-transformation-2025" 
                className="text-sm hover:text-yellow-200 transition-colors"
              >
                300% ROI Case Study
              </Link>
              <span className="text-indigo-300">•</span>
              <Link 
                href="/resources/ai-implementation-master-guide-2025" 
                className="text-sm hover:text-yellow-200 transition-colors"
              >
                Free 200+ Page Guide
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/content-showcase"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <FireIcon className="h-4 w-4 mr-2" />
              Explore All
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile version */}
        <div className="md:hidden pb-3">
          <div className="flex flex-wrap gap-2">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs" 
              className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
            >
              AI Breakthroughs
            </Link>
            <Link 
              href="/case-studies/ai-financial-services-transformation-2025" 
              className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
            >
              300% ROI Study
            </Link>
            <Link 
              href="/resources/ai-implementation-master-guide-2025" 
              className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
            >
              Free Guide
            </Link>
            <Link
              href="/content-showcase"
              className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}