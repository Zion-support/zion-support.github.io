'use client';

import React from 'react';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`page-loader ${className}`}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Please wait while we load the page</p>
        </div>
      </div>
      {children}
    </div>
  );
};

PageLoader.displayName = 'PageLoader';

export default PageLoader;