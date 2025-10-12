import React from 'react';

interface FuturisticGlowProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticGlow;
