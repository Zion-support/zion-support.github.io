'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
    <div className="h-12 bg-gray-200/20 rounded mb-4"></div>
    <div className="h-6 bg-gray-200/20 rounded w-1/2"></div>
  </div>
);