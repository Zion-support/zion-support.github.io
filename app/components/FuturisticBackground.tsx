import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticBackground({ className = '', children }: FuturisticBackgroundProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}