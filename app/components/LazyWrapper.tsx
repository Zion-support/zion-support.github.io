import React from 'react';

interface LazywrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazywrapper({ className = '', children }: LazywrapperProps) {
  return (
    <div className={`LazyWrapper-component ${className}`}>
      {children}
    </div>
  );
}