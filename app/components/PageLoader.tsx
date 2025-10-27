
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
    <div className={'pageloader ' + className}>
      {children || <p>PageLoader component</p>}
    </div>
  );
};

export default PageLoader;