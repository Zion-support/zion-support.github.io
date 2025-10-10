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

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 animate-pulse">
      <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto mb-4"></div>
      <div className="h-6 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4 mb-6"></div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded w-2/3"></div>
      </div>
      <div className="h-12 bg-slate-700 rounded"></div>
    </div>
  );
};

export const StatsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="text-center animate-pulse">
          <div className="h-12 bg-slate-700 rounded mb-2"></div>
          <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6"></div>
    </div>
  );
};