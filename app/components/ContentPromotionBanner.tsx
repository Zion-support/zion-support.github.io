'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-sm text-cyan-400">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-medium">
            🚀 New: AI-Powered Business Solutions - Get 30% off your first month!
          </span>
          <a 
            href="/contact" 
            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors ml-2"
          >
            Learn More
            <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;