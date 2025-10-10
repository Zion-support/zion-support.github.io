'use client';

import React from 'react';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <Zap className="w-4 h-4" />
              <span>50+ Micro SAAS Tools</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400 font-semibold">Starting at $15/month</span>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;