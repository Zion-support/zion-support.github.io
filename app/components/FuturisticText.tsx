import React from 'react';

interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristictext({ className = '', children }: FuturistictextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
