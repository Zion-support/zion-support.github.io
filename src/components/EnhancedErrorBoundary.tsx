'use client';
import React from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>EnhancedErrorBoundary</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default EnhancedErrorBoundary;
