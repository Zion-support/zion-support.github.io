import React from 'react';

const AnimatedCounter: React.FC = () => {
  return (
    <div className="animated-counter">
      {/* Animated counter component */}
    </div>
  );
};

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
    <div className={'animatedcounter ' + className}>
      {children || <p>AnimatedCounter component</p>}
    </div>
  );
};

export default AnimatedCounter;
