import React from 'react';

interface AnimatedCounterProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ className = '', children }) => {
  return (
    <div className={`animatedcounter-component ${className}`}>
      {children}
    </div>
  );
};

AnimatedCounter.displayName = 'AnimatedCounter';

export default AnimatedCounter;
cursor/fix-errors-and-merge-to-main-7271