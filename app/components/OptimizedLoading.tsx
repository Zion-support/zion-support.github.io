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
    <div className={'optimizedloading ' + className}>
      {children || <p>OptimizedLoading component</p>}
    </div>
  );
};

export default OptimizedLoading;
