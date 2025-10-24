import React from 'react';

interface PageOptimizedProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageOptimized: React.FC<PageOptimizedProps> = ({ className = '', children }) => {
  return (
    <div className={`pageoptimized ${className}`}>
      {children}
    </div>
  );
};

export default PageOptimized;