import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`optimizedloadingspinner-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">OptimizedLoadingSpinner</h3>
          <p className="text-gray-600">This is the OptimizedLoadingSpinner component.</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedLoadingSpinner;