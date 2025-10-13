import React from 'react';

interface OptimizedImage.testProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedImage.test({ className = '', children }: OptimizedImage.testProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}