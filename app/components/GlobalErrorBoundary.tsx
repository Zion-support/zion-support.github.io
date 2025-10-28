'use client';

import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`}>
      {children}
    </div>
  );
};

GlobalErrorBoundary.displayName = 'GlobalErrorBoundary';

export default GlobalErrorBoundary;