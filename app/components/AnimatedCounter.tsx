'use client';
import React from 'react';

interface AnimatedCounterProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`animatedcounter ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCounter;