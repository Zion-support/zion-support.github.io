import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 animate-pulse">
      <div className="h-4 bg-white/20 rounded mb-4"></div>
      <div className="h-3 bg-white/20 rounded mb-2"></div>
      <div className="h-3 bg-white/20 rounded w-3/4"></div>
    </div>
  );
};
