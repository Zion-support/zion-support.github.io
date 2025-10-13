import React from 'react';

interface errorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode;
}

export default function errorBoundaryConfig({ className = '', children }: errorBoundaryConfigProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}