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

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center">
        <div className="h-12 bg-gray-600 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto animate-pulse"></div>
      </div>
    ))}
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="h-8 bg-gray-600 rounded w-1/2 animate-pulse"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-600 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-600 rounded w-4/6 animate-pulse"></div>
    </div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-16 h-16 bg-gray-600 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-3"></div>
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    </div>
    <div className="h-8 bg-gray-600 rounded w-1/3"></div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="h-6 bg-gray-600 rounded w-1/4 animate-pulse"></div>
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex space-x-4">
          <div className="h-4 bg-gray-600 rounded flex-1 animate-pulse"></div>
          <div className="h-4 bg-gray-600 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-600 rounded w-1/6 animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
    <div className="h-6 bg-gray-600 rounded w-1/3 mb-6 animate-pulse"></div>
    <div className="h-64 bg-gray-600 rounded animate-pulse"></div>
  </div>
);

export const ListSkeleton: React.FC = () => (
  <div className="space-y-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-600 rounded mb-1 animate-pulse"></div>
          <div className="h-3 bg-gray-600 rounded w-2/3 animate-pulse"></div>
        </div>
      </div>
    ))}
  </div>
);

export const FormSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="space-y-4">
      <div className="h-4 bg-gray-600 rounded w-1/4 animate-pulse"></div>
      <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-600 rounded w-1/4 animate-pulse"></div>
      <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-600 rounded w-1/4 animate-pulse"></div>
      <div className="h-24 bg-gray-600 rounded animate-pulse"></div>
    </div>
    <div className="h-10 bg-gray-600 rounded w-1/3 animate-pulse"></div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <div className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="h-8 bg-gray-600 rounded w-32 animate-pulse"></div>
        <div className="hidden md:flex space-x-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-600 rounded w-16 animate-pulse"></div>
          ))}
        </div>
        <div className="h-10 bg-gray-600 rounded w-24 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const FooterSkeleton: React.FC = () => (
  <footer className="bg-slate-900 border-t border-white/10">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="h-6 bg-gray-600 rounded w-1/2 animate-pulse"></div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="h-4 bg-gray-600 rounded w-1/3 animate-pulse"></div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-600 rounded w-20 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center max-w-4xl mx-auto px-4">
      <div className="h-16 bg-gray-600 rounded w-3/4 mx-auto mb-6 animate-pulse"></div>
      <div className="h-6 bg-gray-600 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>
      <div className="space-y-3 mb-12">
        <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-600 rounded w-4/6 mx-auto animate-pulse"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="h-12 bg-gray-600 rounded w-32 animate-pulse"></div>
        <div className="h-12 bg-gray-600 rounded w-32 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const GridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
);

export const EnhancedLoadingStates = {
  PageLoader,
  ServiceCardSkeleton,
  StatsSkeleton,
  ContentSkeleton,
  CardSkeleton,
  TableSkeleton,
  ChartSkeleton,
  ListSkeleton,
  FormSkeleton,
  NavigationSkeleton,
  FooterSkeleton,
  HeroSkeleton,
  GridSkeleton
};

export default EnhancedLoadingStates;