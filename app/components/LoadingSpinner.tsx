import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', children }) => {
  return (
<div className={`loadingspinner-component ${className}`}>
      {children}
cursor/fix-errors-and-merge-to-main-7271
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';export default LoadingSpinner;
cursor/fix-errors-and-merge-to-main-7271