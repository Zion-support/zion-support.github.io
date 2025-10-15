import React from 'react';

interface AnimatedcounterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Animatedcounter({ className = '', children }: AnimatedcounterProps) {
  return (
    <div className={`AnimatedCounter-component ${className}`}>
      {children}
    </div>
  );
}