'use client';
import React from 'react';

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', children }) => (
  <div className={`animate-pulse bg-gray-700/50 rounded ${className}`}>
    {children}
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="text-center mb-16">
    <Skeleton className="h-16 w-96 mx-auto mb-6" />
    <Skeleton className="h-6 w-80 mx-auto mb-4" />
    <Skeleton className="h-4 w-96 mx-auto mb-8" />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="cyber-card p-6">
          <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
          <Skeleton className="h-6 w-24 mx-auto mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
        </div>
      ))}
    </div>
    
    <div className="flex gap-4 justify-center">
      <Skeleton className="h-12 w-40" />
      <Skeleton className="h-12 w-32" />
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="cyber-card p-6">
    <Skeleton className="h-16 w-16 mx-auto mb-6 rounded-xl" />
    <Skeleton className="h-6 w-3/4 mx-auto mb-3" />
    <Skeleton className="h-4 w-full mb-4" />
    <Skeleton className="h-4 w-5/6 mb-4" />
    
    <div className="space-y-2 mb-4">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-3 w-3/4" />
    </div>
    
    <div className="space-y-2 mb-4">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-3 w-2/3" />
    </div>
    
    <div className="text-center">
      <Skeleton className="h-6 w-20 mx-auto mb-2" />
      <Skeleton className="h-8 w-24 mx-auto" />
    </div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 sticky top-0 z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <Skeleton className="h-8 w-32" />
        <div className="hidden md:flex space-x-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  </nav>
);

export const FooterSkeleton: React.FC = () => (
  <footer className="bg-slate-900 border-t border-cyan-400/20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-24" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
    </div>
  </footer>
);

export const ContentSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="max-w-4xl mx-auto">
      <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mb-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <NavigationSkeleton />
    <ContentSkeleton />
    <FooterSkeleton />
  </div>
);

export default Skeleton;