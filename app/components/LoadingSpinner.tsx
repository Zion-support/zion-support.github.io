import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Loading Spinner</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}