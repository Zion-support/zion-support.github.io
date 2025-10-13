import React from 'react';

interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristictext-component ${className}`} {...props}>
      {children}
    </div>
  );
}
