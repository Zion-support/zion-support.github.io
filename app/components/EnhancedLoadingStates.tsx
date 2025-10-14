'use client';
import React from 'react';

interface LoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function EnhancedLoadingStates({ 
  isLoading, 
  children, 
  fallback 
}: LoadingStateProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        {fallback || (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}