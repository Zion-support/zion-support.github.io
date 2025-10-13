import React from 'react';

interface ErrorboundaryconfigProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorboundaryconfig({ className = '', children, ...props }: ErrorboundaryconfigProps) {
  return (
    <div className={`errorboundaryconfig-component ${className}`} {...props}>
      {children}
    </div>
  );
}
