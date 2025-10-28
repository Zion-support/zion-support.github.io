import React, { memo } from 'react';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = memo(({ className = '', children }) => {
  return (
    <div className={`pageloader-component ${className}`}>
      {children}
    </div>
  );
});

PageLoader.displayName = 'PageLoader';

export default PageLoader;
