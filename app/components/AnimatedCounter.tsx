import React from 'react';

interface AnimatedCounterProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ className = '', children }) => {
  return (
    <div className={`animatedcounter ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCounter;