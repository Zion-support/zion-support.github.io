'use client';
import React from 'react';

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-pulse border border-white/20">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-pulse border border-white/20">
    <div className="h-12 bg-gray-200/20 rounded mb-4 w-1/2"></div>
    <div className="h-6 bg-gray-200/20 rounded w-3/4"></div>
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export default { ServiceCardSkeleton, StatsSkeleton, PageLoader };