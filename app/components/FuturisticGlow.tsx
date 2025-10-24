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
  color = '#8b5cf6',
  className = '',
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'shadow-purple-500/20';
      case 'medium':
        return 'shadow-purple-500/40';
      case 'high':
        return 'shadow-purple-500/60';
      default:
        return 'shadow-purple-500/40';
    }
  };

  const glowStyle = {
    boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20, 0 0 60px ${color}10`,
  };

  return (
    <div
      className={`relative ${className}`}
      style={glowStyle}
    >
      {children}
    </div>
  );
};

export default FuturisticGlow;