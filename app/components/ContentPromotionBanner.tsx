'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">Latest AI Innovations</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <p className="text-sm sm:text-base">
            Discover cutting-edge AI solutions achieving 300% ROI and 70% cost reduction
          </p>
          <a
            href="/services"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm font-medium">Explore Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;