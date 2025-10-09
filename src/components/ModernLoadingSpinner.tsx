import React from 'react';

interface ModernLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ModernLoadingSpinner({ 
  className = '', 
  children 
}: ModernLoadingSpinnerProps) {
  return (
    <div className={`modernloadingspinner ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Modern Loading Spinner
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}