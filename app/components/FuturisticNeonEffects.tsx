import React from 'react';

interface FuturisticNeonEffectsProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticNeonEffects: React.FC<FuturisticNeonEffectsProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-lg border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticNeonEffects;