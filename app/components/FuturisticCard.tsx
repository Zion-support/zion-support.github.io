import React, { ReactNode } from 'react';

interface FuturisticCardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'neon' | 'holographic' | 'cyber';
  glow?: 'purple' | 'pink' | 'cyan' | 'green' | 'orange' | 'red' | 'none';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  variant = 'default',
  glow = 'none',
  hover = true,
  className = '',
  onClick
}) => {
  const getVariantClasses = () => {
    const variants = {
      default: 'bg-white/10 backdrop-blur-sm border border-white/20',
      glass: 'glass-enhanced',
      neon: 'bg-slate-900/50 border-2 border-cyan-400 neon-glow-enhanced',
      holographic: 'holographic-enhanced border border-white/10',
      cyber: 'bg-slate-900/80 border border-cyan-500/30 cyber-text'
    };
    return variants[variant];
  };

  const getGlowClasses = () => {
    if (glow === 'none') return '';
    
    const glows = {
      purple: 'hover:shadow-purple-500/25 hover:border-purple-400/50',
      pink: 'hover:shadow-pink-500/25 hover:border-pink-400/50',
      cyan: 'hover:shadow-cyan-500/25 hover:border-cyan-400/50',
      green: 'hover:shadow-green-500/25 hover:border-green-400/50',
      orange: 'hover:shadow-orange-500/25 hover:border-orange-400/50',
      red: 'hover:shadow-red-500/25 hover:border-red-400/50'
    };
    return glows[glow];
  };

  const getHoverClasses = () => {
    if (!hover) return '';
    return 'hover:scale-105 hover:shadow-2xl transition-all duration-300';
  };

  const baseClasses = `
    relative rounded-xl p-6 overflow-hidden
    ${getVariantClasses()}
    ${getGlowClasses()}
    ${getHoverClasses()}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  const getSpecialEffects = () => {
    if (variant === 'holographic') {
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full hover:translate-x-full"></div>
        </>
      );
    }

    if (variant === 'neon') {
      return (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      );
    }

    if (variant === 'cyber') {
      return (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </>
      );
    }

    return (
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full hover:translate-x-full"></div>
    );
  };

  return (
    <div
      className={baseClasses}
      onClick={onClick}
    >
      {getSpecialEffects()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;