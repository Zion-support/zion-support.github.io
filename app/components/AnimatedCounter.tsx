import React from 'react';

interface AnimatedCounterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedCounter({ className, children }: AnimatedCounterProps) {
  return (
    <div className={}>
      {children || 'AnimatedCounter Component'}
    </div>
  );
}
