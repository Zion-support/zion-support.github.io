'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('promotion-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('promotion-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-4 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-bold text-lg">New!</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm sm:text-base">
              🚀 <strong>50+ Real AI Services</strong> now available with transparent pricing and free trials!
            </span>
          </div>
          <div className="block sm:hidden">
            <span className="text-sm">
              🚀 <strong>50+ AI Services</strong> available!
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href="/services/enhanced"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-4 h-4" />
            <span className="hidden sm:inline">Explore Services</span>
            <span className="sm:hidden">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;