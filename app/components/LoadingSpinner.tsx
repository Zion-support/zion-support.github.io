'use client';

import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({ className = '', children, ...props }: LoadingSpinnerProps) {
  return (
    <div className={`loadingspinner-component ${className}`} {...props}>
      {children || (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            LoadingSpinner
          </h1>
          <p className="text-gray-600">
            This component is under development.
          </p>
        </div>
      )}
    </div>
  );
}