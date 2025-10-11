'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we prepare your content.</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
        <Loader2 className="w-4 h-4 text-slate-900 animate-spin" />
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
    </div>
  );
};

export default PageLoader;
