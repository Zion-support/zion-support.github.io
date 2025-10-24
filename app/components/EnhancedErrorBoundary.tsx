'use client';

import React from 'react';

interface EnhancedErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedErrorBoundary;