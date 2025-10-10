'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-400">Please wait while we prepare your experience</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 rounded-lg shadow-lg p-6 animate-pulse cyber-card-enhanced" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="text-center cyber-card-enhanced p-6 animate-pulse">
        <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-2"></div>
        <div className="h-8 bg-gray-200 rounded mb-2 w-16 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
      </div>
    ))}
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
    <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
  </div>
);

export default PageLoader;
