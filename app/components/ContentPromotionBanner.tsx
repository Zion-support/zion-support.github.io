'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5" />
          <span className="font-semibold">New AI Solutions Available!</span>
        </div>
        <button className="flex items-center space-x-1 hover:underline">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;