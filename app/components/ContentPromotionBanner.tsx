'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Transform Your Business Today</h3>
            <p className="text-gray-300 text-sm">Get started with our AI solutions and see results in 30 days</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors">
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
