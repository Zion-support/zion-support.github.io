'use client';
import React from 'react';

export const ServiceCardSkeleton: React.FC = React.memo(() => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse" role="status" aria-label="Loading service card">
    <div className="w-16 h-16 bg-gray-600 rounded-lg mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export const StatsSkeleton: React.FC = React.memo(() => (
  <div className="text-center animate-pulse" role="status" aria-label="Loading statistics">
    <div className="h-8 bg-gray-600 rounded mb-2 w-20 mx-auto"></div>
    <div className="h-4 bg-gray-600 rounded w-24 mx-auto"></div>
  </div>
));

StatsSkeleton.displayName = 'StatsSkeleton';