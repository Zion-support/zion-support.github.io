import React from 'react';

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Hero({ className = '', children }: HeroProps) {
  return (
    <div className={`Hero-component ${className}`}>
      {children}
    </div>
  );
}