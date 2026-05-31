import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoadingSpinner = ({ className = '', children }) => {
  return (
<div className={`optimizedloadingspinner-component ${className}`}>
      {children}
    </div>
  );
};

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner;