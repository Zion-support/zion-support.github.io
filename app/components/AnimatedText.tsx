import React from 'react';

interface AnimatedtextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Animatedtext({ className = '', children }: AnimatedtextProps) {
  return (
    <div className={`AnimatedText-component ${className}`}>
      {children}
    </div>
  );
}