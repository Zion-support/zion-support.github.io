'use client';
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div></div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we prepare everything for you</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;