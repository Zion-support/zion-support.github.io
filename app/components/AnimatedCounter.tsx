'use client';
import React from 'react';

interface AnimatedCounterProps {
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AnimatedCounter</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default AnimatedCounter;
