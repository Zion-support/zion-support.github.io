'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
      <p className="text-gray-300 text-lg">Loading...</p>
    </div>
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-4">
    <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
  </div>
);

export const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
  </div>
);
