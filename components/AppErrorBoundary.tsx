'use client';

import React from 'react';

interface AppErrorBoundaryProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}

const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default AppErrorBoundary;
