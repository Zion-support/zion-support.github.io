import React from 'react';

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    <div className="mt-4 space-y-2">
      <div className="h-3 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="h-16 bg-gray-200 rounded mb-6 w-96 mx-auto animate-pulse"></div>
      <div className="h-6 bg-gray-200 rounded mb-4 w-80 mx-auto animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
    </div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="bg-slate-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
      <div className="hidden md:flex space-x-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
        ))}
      </div>
    </div>
  </nav>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <NavigationSkeleton />
    <div className="container mx-auto px-4 py-8">
      <HeroSkeleton />
      <div className="mt-16">
        <ContentSkeleton />
      </div>
    </div>
  </div>
);