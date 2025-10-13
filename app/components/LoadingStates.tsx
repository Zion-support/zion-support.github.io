'use client';
import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content.</p>
      </div>
    </div>
  );
};

export const AppLoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
    </div>
  );
};

export const ServiceLoadingCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="w-16 h-16 bg-gray-600 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-600 rounded mb-2"></div>
      <div className="h-4 bg-gray-600 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-600 rounded"></div>
        <div className="h-3 bg-gray-600 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}