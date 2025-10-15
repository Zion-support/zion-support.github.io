import React from 'react';

interface FuturisticcardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristiccard({ className = '', children }: FuturisticcardProps) {
  return (
    <div className={`FuturisticCard-component ${className}`}>
      {children}
    </div>
  );
}