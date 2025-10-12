'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-4 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" style={{ animationDuration: '1s' }}></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 mt-8">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
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

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 animate-pulse">
      <div className="h-4 bg-slate-700 rounded mb-4"></div>
      <div className="h-3 bg-slate-700 rounded mb-2"></div>
      <div className="h-3 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};