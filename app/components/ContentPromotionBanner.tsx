'use client';
import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🚀 Latest AI Innovations & Breakthroughs
        </h2>
        <p className="text-lg mb-6">
          Discover cutting-edge AI solutions that are transforming businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">✨ 300% ROI Guaranteed</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">⚡ 24/7 Support</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🔒 Enterprise Security</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🌐 Global Reach</span>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;