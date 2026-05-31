'use client';

import React from 'react';

interface AppErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const AppErrorBoundary = ({ className = '', children }) => {
  return (
    <div className={`app-error-boundary ${className}`}>
      {children}
    </div>
  );
};

AppErrorBoundary.displayName = 'AppErrorBoundary';

export default AppErrorBoundary;
