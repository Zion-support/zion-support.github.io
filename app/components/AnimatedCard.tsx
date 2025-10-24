'use client'
import React from 'react';

interface AnimatedCardProps {
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Animated Card</h2>
      <p className="text-gray-600">This is a placeholder component for Animated Card.</p>
    </div>
  );
};

export default AnimatedCard;
