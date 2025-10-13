import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticBackground({ className = '', children, ...props }: FuturisticBackgroundProps) {
  return (
    <div className={`futuristic-background-component ${className}`} {...props}>
      {children}
    </div>
  );
}