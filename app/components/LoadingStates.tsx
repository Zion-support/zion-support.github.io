import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-700 rounded mb-2"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
    </div>
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-2" />
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  );
};