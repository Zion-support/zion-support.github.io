import React from 'react';

interface OptimizedimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Optimizedimage({ className = '', children }: OptimizedimageProps) {
  return (
    <div className={`OptimizedImage-component ${className}`}>
      {children}
    </div>
  );
}