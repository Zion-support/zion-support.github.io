import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticLoader({ className = '', children }: FuturisticLoaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}