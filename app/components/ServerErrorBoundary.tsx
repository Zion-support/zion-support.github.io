'use client';

import React, { memo } from 'react';

interface ServerErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ServerErrorBoundary: React.FC<ServerErrorBoundaryProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`server-error-boundary ${className}`}>
      {children}
    </div>
  );
});

ServerErrorBoundary.displayName = 'ServerErrorBoundary';

export default ServerErrorBoundary;