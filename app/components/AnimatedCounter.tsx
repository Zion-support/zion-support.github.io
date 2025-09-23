import React from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
  return (
    <span className={className}>
      {value}
    </span>
  );
}