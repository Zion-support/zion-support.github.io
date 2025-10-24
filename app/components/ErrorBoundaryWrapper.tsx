'use client';
import React from 'react';

interface ErrorBoundaryWrapperProps {
  className?: string;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ErrorBoundaryWrapper</h2>
      <p>ErrorBoundaryWrapper component for enhanced functionality.</p>
    </div>
  );
};

export default ErrorBoundaryWrapper;