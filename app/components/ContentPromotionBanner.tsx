'use client';
import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium">
            🚀 New AI Solutions Available - Get 20% off your first project! 
            <a href="/contact" className="underline ml-2 hover:text-cyan-200">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;