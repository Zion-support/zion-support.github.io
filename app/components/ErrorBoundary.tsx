'use client';
import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundary-component ${className}`}>
      {children}
    </div>
  );
};

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;