'use client'
import React from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Hero</h2>
      <p className="text-gray-600">This is a placeholder component for Hero.</p>
    </div>
  );
};

export default Hero;
