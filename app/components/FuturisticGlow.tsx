'use client';

import React from 'react';

interface FuturisticGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  intensity = 'medium',
  color = 'blue',
  className = ''
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-xl';
      case 'high':
        return 'shadow-2xl';
      default:
        return 'shadow-xl';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'shadow-blue-500/50';
      case 'purple':
        return 'shadow-purple-500/50';
      case 'green':
        return 'shadow-green-500/50';
      case 'pink':
        return 'shadow-pink-500/50';
      default:
        return 'shadow-blue-500/50';
    }
  };

  return (
    <div className={`${getIntensityClasses()} ${getColorClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticGlow;