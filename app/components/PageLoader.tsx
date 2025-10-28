'use client';


import React, { memo, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
  children: React.ReactNode;
  loading?: boolean;
  fallback?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = memo(({ 
  children, 
  loading = false, 
  fallback 
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    // Simulate page load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"> <div className="text-center"> <LoadingSpinner size="lg" text="Loading..." />
            <p className="mt-4 text-gray-600">Please wait while we load the page</p>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
});

PageLoader.displayName = 'PageLoader';

export default PageLoader;