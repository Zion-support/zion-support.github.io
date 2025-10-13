import React from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticGlow({ className = '', children }: FuturisticGlowProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}