import React from 'react';

interface OptimizedLoadingProps {
  children?: React.ReactNode;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OptimizedLoading;
