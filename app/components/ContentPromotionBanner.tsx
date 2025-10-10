'use client';
import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-4 text-center">
      <p className="text-sm font-medium">
        🚀 New: AI-Powered Business Solutions - Get 50% off your first month! 
        <a href="/contact" className="underline ml-2 hover:text-cyan-200">
          Learn More
        </a>
      </p>
    </div>
  );
};

export default ContentPromotionBanner;