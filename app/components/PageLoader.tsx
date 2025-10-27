const PageLoader = () => {
  return (
    <div className="p-4">
      <h2>PageLoader</h2>
      <p>Component implementation coming soon...</p>
    </div>
  );
};

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className = '', children }) => {
  return (
    <div className={`page-loader ${className}`}>
      {children}
    </div>
  );
};

PageLoader.displayName = 'PageLoader';

import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default PageLoader;