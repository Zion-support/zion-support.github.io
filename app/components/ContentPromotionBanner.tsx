'use client';
import React, { useState } from 'react';
import { X, ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-b border-cyan-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-cyan-400">New Feature</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-300">
                Discover our latest AI-powered solutions and get <span className="text-cyan-400 font-semibold">20% off</span> your first project
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;