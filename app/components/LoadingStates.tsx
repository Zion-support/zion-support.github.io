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
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-2 text-cyan-400">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export const InlineLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
    </div>
  );
};

export const FullScreenLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg p-8 flex items-center space-x-3">
        <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
        <span className="text-white">Loading...</span>
      </div>
    </div>
  );
};