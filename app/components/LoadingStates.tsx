'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
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
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-pulse">
      <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
      <div className="h-3 bg-white/20 rounded w-5/6"></div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-white/20 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-white/20 rounded w-full"></div>
        <div className="h-4 bg-white/20 rounded w-4/5"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
);
