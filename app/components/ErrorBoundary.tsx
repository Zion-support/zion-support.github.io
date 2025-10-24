'use client';
import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ErrorBoundary</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ErrorBoundary;
