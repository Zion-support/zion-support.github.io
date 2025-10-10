'use client';
<<<<<<< HEAD
import React from 'react';

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="text-center">
        <div className="h-8 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    ))}
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);
=======
;
;
;
import React from 'react'
import { Loader2, Brain, Cloud, Shield, Code  } from 'lucide-react'
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size;

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6 animate-pulse"></div>
    <div className="h-8 bg-gray-600 rounded w-3/4"></div>
    <div className="space-y-2"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  </div>
)
>>>>>>> main
