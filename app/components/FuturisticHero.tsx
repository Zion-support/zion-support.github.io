import React from 'react';

interface FuturisticheroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristichero({ className = '', children }: FuturisticheroProps) {
  return (
    <div className={`FuturisticHero-component ${className}`}>
      {children}
    </div>
  );
}