'use client';
import React from 'react';
import { Zap, Shield, Star, Users, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Star className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>New AI Solutions Available
            </span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>
              Transform your business with cutting-edge AI technology
            </span>
            <a
              href="/services"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <span><span className="sr-only">Screen reader: </span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
