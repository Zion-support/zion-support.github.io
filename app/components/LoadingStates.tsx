'use client';
import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export const ComponentLoader: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const ButtonLoader: React.FC = () => (
  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
);