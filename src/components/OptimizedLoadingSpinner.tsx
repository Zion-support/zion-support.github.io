import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoadingSpinner({
  className = '',
  children
}: OptimizedLoadingSpinnerProps) {
  return (
    <div className={`optimizedloadingspinner ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Optimized Loading Spinner
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}