import React from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedText = ({ className = '', children }) => {
  return (
    <div className={`animatedtext-component ${className}`}>
      {children}
    </div>
  );
};

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;