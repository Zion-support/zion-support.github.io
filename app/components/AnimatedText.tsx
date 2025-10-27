import React from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`animatedtext ${className}`}>
      {children || <p>AnimatedText component</p>}
    </div>
  );
};

export default AnimatedText;