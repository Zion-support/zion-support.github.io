import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundary({ className = '', children, ...props }: ErrorBoundaryProps) {
  return (
    <div className={`error-boundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}