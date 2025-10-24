'use client';

import React from 'react';

interface LoadingStatesProps {
  // Add props here
}

const LoadingStates: React.FC<LoadingStatesProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-2 text-cyan-400">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Loading component...</span>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse">
      <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse">
      <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};

