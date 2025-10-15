import React from 'react';

interface FuturisticloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicloader({ className = '', children }: FuturisticloaderProps) {
  return (
    <div className={`FuturisticLoader-component ${className}`}>
      {children}
    </div>
  );
}