import React from 'react';

interface FuturisticglowProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicglow({ className = '', children }: FuturisticglowProps) {
  return (
    <div className={`FuturisticGlow-component ${className}`}>
      {children}
    </div>
  );
}