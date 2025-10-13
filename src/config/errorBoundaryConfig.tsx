import React from 'react';

interface ErrorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundaryConfig({ className = '', children }: ErrorBoundaryConfigProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}