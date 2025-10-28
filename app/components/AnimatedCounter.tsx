import React from 'react';

interface AnimatedCounterProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ className = '', children }) => {
  return (
    <div className={`animatedcounter-component ${className}`}>
      {children || <p>AnimatedCounter component</p>}
    </div>
  );
};

export default AnimatedCounter;
