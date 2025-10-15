import React from 'react';

interface LoadingskeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingskeleton({ className = '', children }: LoadingskeletonProps) {
  return (
    <div className={`LoadingSkeleton-component ${className}`}>
      {children}
    </div>
  );
}