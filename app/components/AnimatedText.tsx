'use client';

import React, { memo } from 'react';

interface AnimatedTextProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`animated-text ${className}`}>
      {children}
    </div>
  );
});

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;