import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoadingSpinner({ className = '', children }: OptimizedLoadingSpinnerProps) {
  return (
    <div className={`optimizedloadingspinner ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">OptimizedLoadingSpinner</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}