import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}