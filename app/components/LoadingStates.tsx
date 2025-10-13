import React from 'react';
import { Brain } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div className="text-white text-lg font-semibold">Loading...</div>
        <div className="text-gray-400 text-sm mt-2">Please wait while we load the content</div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-3 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};