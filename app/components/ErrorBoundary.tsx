'use client';

import React, { memo } from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`error-boundary ${className}`}>
      {children}
    </div>
  );
});

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;