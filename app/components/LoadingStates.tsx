'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
        <p className="text-gray-300 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-600 rounded mb-2"></div>
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-600 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-600 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-600 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center">
    <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
  </div>
);
