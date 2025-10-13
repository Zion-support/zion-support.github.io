'use client';

import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loading({ className = '', children, ...props }: LoadingProps) {
  return (
    <div className={`loading-component ${className}`} {...props}>
      {children || (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Loading
          </h1>
          <p className="text-gray-600">
            This component is under development.
          </p>
        </div>
      )}
    </div>
  );
}