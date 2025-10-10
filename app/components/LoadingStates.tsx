'use client';

import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-600 rounded mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-5/6"></div>
      <div className="h-4 bg-gray-600 rounded w-4/6"></div>
    </div>
  </div>
);