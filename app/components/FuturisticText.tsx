import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
  as?: string;
}

export default function Futuristictext({ className = '', children }: FuturistictextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
