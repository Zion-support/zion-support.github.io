'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-purple-400 mx-auto mb-4" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 animate-pulse">
      <div className="h-6 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-slate-700 rounded w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6"></div>
      <div className="h-4 bg-slate-700 rounded w-2/3"></div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
);
