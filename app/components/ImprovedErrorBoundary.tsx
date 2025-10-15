import React from 'react';

interface ImprovederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvederrorboundary({ className = '', children }: ImprovederrorboundaryProps) {
  return (
    <div className={`ImprovedErrorBoundary-component ${className}`}>
      {children}
    </div>
  );
}