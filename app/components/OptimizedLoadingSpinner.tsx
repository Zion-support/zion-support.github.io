import React from 'react';

interface OptimizedLoadingSpinnerProps {
  children?: React.ReactNode;
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OptimizedLoadingSpinner;
