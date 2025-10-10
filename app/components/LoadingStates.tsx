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

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-600 rounded mb-4 w-3/4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-5/6"></div>
      <div className="h-4 bg-gray-600 rounded w-4/6"></div>
    </div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <div className="bg-slate-900/95 backdrop-blur-md h-16 flex items-center justify-between px-4 animate-pulse">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gray-600 rounded-lg"></div>
      <div className="h-6 bg-gray-600 rounded w-32"></div>
    </div>
    <div className="hidden lg:flex space-x-8">
      <div className="h-4 bg-gray-600 rounded w-16"></div>
      <div className="h-4 bg-gray-600 rounded w-20"></div>
      <div className="h-4 bg-gray-600 rounded w-24"></div>
    </div>
  </div>
);

export const FooterSkeleton: React.FC = () => (
  <div className="bg-gray-900 py-12 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 bg-gray-600 rounded w-24"></div>
            <div className="space-y-2">
              {[...Array(6)].map((_, j) => (
                <div key={j} className="h-4 bg-gray-600 rounded w-20"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);