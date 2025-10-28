'use client';

import React, { memo } from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-error-boundary ${className}`}>
      {children}
    </div>
  );
});

EnhancedErrorBoundary.displayName = 'EnhancedErrorBoundary';

export default EnhancedErrorBoundary;