import React from 'react';

interface ModernLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ModernLoadingSpinner({ className = '', children }: ModernLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}