'use client';
import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-200/20 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-200/20 rounded mb-3 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-gray-200/20 rounded mb-2 ${
          i === lines - 1 ? 'w-5/6' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export const ButtonSkeleton: React.FC<{ className?: string }> = ({ 
  className = '' 
}) => (
  <div className={`h-10 bg-gray-200/20 rounded-lg animate-pulse ${className}`}></div>
);

export const ImageSkeleton: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string 
}> = ({ 
  width = 'w-full', 
  height = 'h-48', 
  className = '' 
}) => (
  <div className={`${width} ${height} bg-gray-200/20 rounded-lg animate-pulse ${className}`}></div>
);

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="animate-pulse">
    <div className="grid grid-cols-4 gap-4 mb-4">
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200/20 rounded"></div>
      ))}
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid grid-cols-4 gap-4 mb-2">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div key={colIndex} className="h-3 bg-gray-200/20 rounded"></div>
        ))}
      </div>
    ))}
  </div>
);

export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-gray-200/20 rounded"></div>
        <div className="h-4 bg-gray-200/20 rounded flex-1"></div>
      </div>
    ))}
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200/20 rounded mb-4 w-1/3"></div>
    <div className="h-64 bg-gray-200/20 rounded"></div>
  </div>
);

export const FormSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-4 bg-gray-200/20 rounded w-1/4"></div>
    <div className="h-10 bg-gray-200/20 rounded"></div>
    <div className="h-4 bg-gray-200/20 rounded w-1/3"></div>
    <div className="h-10 bg-gray-200/20 rounded"></div>
    <div className="h-10 bg-gray-200/20 rounded w-1/2"></div>
  </div>
);