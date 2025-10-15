import React from 'react';

interface AnimatedcardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Animatedcard({ className = '', children }: AnimatedcardProps) {
  return (
    <div className={`AnimatedCard-component ${className}`}>
      {children}
    </div>
  );
}