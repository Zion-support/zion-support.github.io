"use client";
import React from 'react';

interface AnimatedCounterProps {
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        AnimatedCounter
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default AnimatedCounter;