import React from 'react';

interface ModernloadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Modernloadingspinner({ className = '', children }: ModernloadingspinnerProps) {
  return (
    <div className={`ModernLoadingSpinner-component ${className}`}>
      {children}
    </div>
  );
}