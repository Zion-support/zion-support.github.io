'use client';

import React from 'react';

interface AppErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = ({ children, fallback: _fallback }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AppErrorBoundary;
