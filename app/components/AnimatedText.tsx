'use client';
import React from 'react';

interface AnimatedTextProps {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AnimatedText</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default AnimatedText;
