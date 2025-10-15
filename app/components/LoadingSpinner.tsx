import React from 'react';

interface LoadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingspinner({ className = '', children }: LoadingspinnerProps) {
  return (
    <div className={`LoadingSpinner-component ${className}`}>
      {children}
    </div>
  );
}