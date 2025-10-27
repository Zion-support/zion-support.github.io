import React from 'react';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Page Loader">
      {children || <p>Page Loader</p>}
    </div>
  );
};

export default PageLoader;
