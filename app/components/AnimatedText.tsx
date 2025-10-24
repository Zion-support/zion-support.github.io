'use client'
import React from 'react';

interface AnimatedTextProps {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Animated Text</h2>
      <p className="text-gray-600">This is a placeholder component for Animated Text.</p>
    </div>
  );
};

export default AnimatedText;
