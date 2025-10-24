'use client';

import React from 'react';

interface AnimatedCounterProps {
  children?: React.ReactNode;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnimatedCounter;