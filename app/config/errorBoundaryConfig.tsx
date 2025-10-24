'use client';
import React from 'react';

interface ErrorBoundaryConfigProps {
  className?: string;
}

const ErrorBoundaryConfig: React.FC<ErrorBoundaryConfigProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ErrorBoundaryConfig</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ErrorBoundaryConfig;
