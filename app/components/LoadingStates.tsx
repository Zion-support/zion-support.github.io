'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading...</p>
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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-700 rounded w-20"></div>
        <div className="h-8 bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-700 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center">
    <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
  </div>
);
