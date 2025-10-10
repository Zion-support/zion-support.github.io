'use client';

import React from 'react';

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="quantum-card p-4 sm:p-6 energy-pulse animate-pulse">
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
        <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto"></div>
      </div>
      <div className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
        <div className="h-6 bg-gray-600 rounded w-3/4 mx-auto"></div>
      </div>
      <div className="text-sm text-gray-300 text-center leading-relaxed mb-4">
        <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto"></div>
      </div>
      <div className="flex justify-center">
        <div className="h-8 bg-gray-600 rounded w-24"></div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;