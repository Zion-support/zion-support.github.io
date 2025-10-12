import React from 'react';

interface AnimatedCounterProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AnimatedCounter({ children, className = '' }: AnimatedCounterProps) {
  return (
    <div className={`animatedcounter ${className}`}>
      {children || <div>Animated Counter Component</div>}
    </div>
  );
}