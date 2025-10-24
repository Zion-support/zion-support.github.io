'use client'
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
