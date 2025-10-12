import React from 'react';

interface FuturisticGlowProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const glowClasses = {
    low: 'shadow-cyan-500/20',
    medium: 'shadow-cyan-500/40',
    high: 'shadow-cyan-500/60'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 rounded-lg blur-xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 ${glowClasses[intensity]}`}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticGlow;
