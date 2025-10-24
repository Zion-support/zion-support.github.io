'use client'
import React from 'react';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;
