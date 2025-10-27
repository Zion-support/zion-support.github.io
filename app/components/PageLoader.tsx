import React from 'react';

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className, children }) => {
  return (
    <div className={`pageloader-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default PageLoader;
