'use client';
import React, { memo } from 'react';

// Service Card Skeleton
export const ServiceCardSkeleton: React.FC = memo(() => (
  <div 
    className="bg-white rounded-lg shadow-lg p-6 animate-pulse" 
    role="status" 
    aria-label="Loading service card"
  >
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
));

// Stats Skeleton
export const StatsSkeleton: React.FC = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="text-center animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-20 mx-auto"></div>
      </div>
    ))}
  </div>
));

// Page Loader
export const PageLoader: React.FC = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading...</p>
    </div>
  </div>
));

// Content Skeleton
export const ContentSkeleton: React.FC<{ lines?: number }> = memo(({ lines = 3 }) => (
  <div className="animate-pulse">
    {[...Array(lines)].map((_, index) => (
      <div 
        key={index} 
        className={`h-4 bg-gray-200 rounded mb-2 ${
          index === lines - 1 ? 'w-2/3' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
));

// Card Grid Skeleton
export const CardGridSkeleton: React.FC<{ count?: number }> = memo(({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(count)].map((_, index) => (
      <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20 animate-pulse">
        <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    ))}
  </div>
));

// Table Skeleton
export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = memo(({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-200">
    <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {[...Array(columns)].map((_, index) => (
          <div key={index} className="h-4 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
    <div className="bg-white divide-y divide-gray-200">
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4">
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {[...Array(columns)].map((_, colIndex) => (
              <div key={colIndex} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
));

// Set display names for better debugging
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';
StatsSkeleton.displayName = 'StatsSkeleton';
PageLoader.displayName = 'PageLoader';
ContentSkeleton.displayName = 'ContentSkeleton';
CardGridSkeleton.displayName = 'CardGridSkeleton';
TableSkeleton.displayName = 'TableSkeleton';