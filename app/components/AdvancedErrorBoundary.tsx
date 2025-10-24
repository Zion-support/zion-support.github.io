'use client';
import React from 'react';

interface AdvancedErrorBoundaryProps {
  className?: string;
}

const AdvancedErrorBoundary: React.FC<AdvancedErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AdvancedErrorBoundary</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default AdvancedErrorBoundary;
