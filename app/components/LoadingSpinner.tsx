import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingspinner-component ${className}`}>
      {children}
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
