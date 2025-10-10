'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-2">
        <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
        <span className="text-gray-300">Loading...</span>
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-4 w-3/4 mb-2"></div>
      <div className="bg-gray-300 rounded-lg h-3 w-1/2 mb-2"></div>
      <div className="bg-gray-300 rounded-lg h-3 w-2/3"></div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-3 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded"></div>
    </div>
  );
};

export default PageLoader;