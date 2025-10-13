import React from 'react';

interface EnhancederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancederrorboundary({ className = '', children, ...props }: EnhancederrorboundaryProps) {
  return (
    <div className={`enhancederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}