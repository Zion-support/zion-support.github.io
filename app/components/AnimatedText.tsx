import React from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = (_{ className = '', _children }) => {
  return (
    <div className={`animatedtext-component ${className}`}>
      {children}
    </div>
  );
};

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;