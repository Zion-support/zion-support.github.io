import React from 'react';

interface FuturisticGlowProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'blue' | 'purple' | 'cyan' | 'pink';
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  className = '',
  intensity = 'medium',
  color = 'blue'
}) => {
  const intensityClasses = {
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  };

  const colorClasses = {
    blue: 'shadow-blue-500/50',
    purple: 'shadow-purple-500/50',
    cyan: 'shadow-cyan-500/50',
    pink: 'shadow-pink-500/50'
  };

  return (
    <div 
      className={`${intensityClasses[intensity]} ${colorClasses[color]} ${className}`}
      style={{
        filter: `drop-shadow(0 0 20px ${color === 'blue' ? '#3b82f6' : color === 'purple' ? '#8b5cf6' : color === 'cyan' ? '#06b6d4' : '#ec4899'}40)`
      }}
    >
      {children}
    </div>
  );
};

export default FuturisticGlow;