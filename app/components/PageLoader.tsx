import React from 'react';

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

export default PageLoader;