import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundary({ className = '', children }: ErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}