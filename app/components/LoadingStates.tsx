'use client';
import React from 'react';

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
      <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export const StatsSkeleton: React.FC = () => {
  return (
    <div className="text-center animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-2 w-16 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};