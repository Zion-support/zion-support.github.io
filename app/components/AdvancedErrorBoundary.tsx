'use client';

import React, { memo } from 'react';

interface AdvancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const AdvancedErrorBoundary: React.FC<AdvancedErrorBoundaryProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`advanced-error-boundary ${className}`}>
      {children}
    </div>
  );
});

AdvancedErrorBoundary.displayName = 'AdvancedErrorBoundary';

export default AdvancedErrorBoundary;