'use client';
import React, { Suspense, ReactNode } from 'react';

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  ) 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyWrapper;