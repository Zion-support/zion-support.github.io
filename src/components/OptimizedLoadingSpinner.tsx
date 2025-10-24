import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`optimizedloadingspinner ${className}`}>
      {children}
    </div>
  );
};

export default OptimizedLoadingSpinner;