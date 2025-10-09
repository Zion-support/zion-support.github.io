'use client';
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Zap, Shield } from 'lucide-react';

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
    setIsDismissed(true);
    localStorage.setItem('promotion-banner-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="font-bold text-sm sm:text-base">NEW: AI-Powered Solutions</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>50+ AI Tools</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href="/ai-services"
            className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;