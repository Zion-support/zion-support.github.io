import React from 'react';

interface EnhancedloadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloadingspinner({ className = '', children }: EnhancedloadingspinnerProps) {
  return (
    <div className={`EnhancedLoadingSpinner-component ${className}`}>
      {children}
    </div>
  );
}