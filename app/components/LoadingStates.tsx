'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

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

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-2/3"></div>
      </div>
    ))}
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const EnhancedLoadingStates = {
  PageLoader,
  ServiceCardSkeleton,
  StatsSkeleton,
  LoadingSpinner
};