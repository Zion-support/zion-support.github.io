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
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <Loader2 className="w-6 h-6 text-slate-900 animate-spin" />
        </div>
        <p className="text-gray-300 text-sm">Loading component...</p>
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="h-4 bg-gray-600 rounded mb-4 w-3/4"></div>
        <div className="h-3 bg-gray-600 rounded mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
      <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  );
};

export const TableSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="space-y-3">
          <div className="h-4 bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-600 rounded w-4/6"></div>
          <div className="h-4 bg-gray-600 rounded w-3/6"></div>
        </div>
      </div>
    </div>
  );
};

export const ChartSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="h-6 bg-gray-600 rounded mb-4 w-1/3"></div>
        <div className="h-64 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export const ListSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-3">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-700 rounded mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const GridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export const FormSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        <div className="h-20 bg-gray-700 rounded"></div>
      </div>
      <div className="h-10 bg-gray-700 rounded w-1/3"></div>
    </div>
  );
};

export default PageLoader;