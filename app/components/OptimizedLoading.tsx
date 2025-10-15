import React from 'react';

interface OptimizedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`optimizedloading ${className}`}>
      {children}
    </div>
  );
};

export default OptimizedLoading;