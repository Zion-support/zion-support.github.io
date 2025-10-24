'use client';
import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ErrorBoundary</h2>
      <p>ErrorBoundary component for enhanced functionality.</p>
    </div>
  );
};

export default ErrorBoundary;