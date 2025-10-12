'use client';

import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  border = true
}) => {
  const baseClasses = 'relative rounded-2xl transition-all duration-300 group';
  
  const backgroundClasses = 'bg-white/10 backdrop-blur-lg';
  
  const borderClasses = border 
    ? 'border border-white/20 hover:border-blue-400/50' 
    : '';
  
  const hoverClasses = hover 
    ? 'hover:bg-white/15 hover:scale-105 hover:shadow-2xl' 
    : '';
  
  const glowClasses = glow 
    ? 'hover:shadow-blue-500/20 hover:shadow-2xl' 
    : '';

  const cardClasses = `${baseClasses} ${backgroundClasses} ${borderClasses} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <div className={cardClasses}>
      {/* Animated border effect */}
      {border && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      )}
      
      {/* Inner glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;