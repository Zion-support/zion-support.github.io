import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}