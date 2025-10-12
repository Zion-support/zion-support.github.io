import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" 
               style={{ animationDuration: '1s' }} />
          <div className="absolute inset-2 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" 
               style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 mt-8">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Preparing your experience...</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
    </div>
  );
};

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  );
};