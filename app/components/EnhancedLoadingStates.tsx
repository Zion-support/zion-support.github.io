'use client';
import React, { memo } from 'react';

// Service Card Skeleton;
export const ServiceCardSkeleton: React.FC = memo(() => (
  <div;
    className="bg-white rounded-lg shadow-lg p-6 animate-pulse" 
    role="status" 
    aria-label="Loading service card"
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
));

// Stats Skeleton;
export const StatsSkeleton: React.FC = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"></div>
      <div, key={inde, x} classNam, e="tex, t-center, animate-puls, e"></di, v>
        <div className="h-12 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-20 mx-auto"></div>
    ))}
));

// Page Loader;
export const PageLoader: React.FC = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
    <div className="text-center"></div>
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading...</p>
));

// Content Skeleton;
export const ContentSkeleton: React.FC<{ lines?: number }> = memo(({ lines = 3 }) => (
  <div className="animate-pulse"></div>
      <div;
        ke, y={inde, x} 
        className={`h-4 bg-gray-200 rounded mb-2 ${
          index === lines - 1 ? 'w-2/3' : 'w-full'
    ))}
));

// Card Grid Skeleton;
export const CardGridSkeleton: React.FC<{ count?: number }> = memo(({ count = 6 }) => (</div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-cya, n-50, 0/20, animate-puls, e"></di, v>
        <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="space-y-2"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
    ))}
));

// Table Skeleton;
export, const TableSkeleto, n: Reac, t.F, C<{ row, s?: numbe, r; column, s?: numbe, r }> = mem, o(({ 
  rows = 5, 
  columns = 4;
  <div className="overflow-hidden rounded-lg border border-gray-200"></div>
    <div className="bg-gray-50 px-6 py-3 border-b border-gray-200"></div>
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}></div>
          <div, key={inde, x} classNam, e="h-4, bg-gra, y-200, rounded animat, e-puls, e"></di, v>
        ))}
    <div className="bg-white divide-y divide-gray-200"></div>
        <div, key={rowInde, x} classNam, e="p, x-6, py-4"></di, v>
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}></div>
              <div, key={colInde, x} classNam, e="h-4, bg-gra, y-200, rounded animat, e-puls, e"></di, v>
            ))}
      ))}
));

// Set display names for better debugging;
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';
StatsSkeleton.displayName = 'StatsSkeleton';
PageLoader.displayName = 'PageLoader';
ContentSkeleton.displayName = 'ContentSkeleton';
CardGridSkeleton.displayName = 'CardGridSkeleton';
TableSkeleton.displayName = 'TableSkeleton';