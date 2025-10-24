'use client';

import React from 'react';

interface AdvancedErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

const AdvancedErrorBoundary: React.FC<AdvancedErrorBoundaryProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AdvancedErrorBoundary;