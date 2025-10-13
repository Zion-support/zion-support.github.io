import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'red';
  hover?: boolean;
  animated?: boolean;
  variant?: 'default' | 'glass' | 'neon' | 'holographic';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true,
  animated = true,
  variant = 'default'
}) => {
  const getGlowColor = () => {
    const colors = {
      cyan: 'shadow-cyan-500/20 border-cyan-500/30',
      purple: 'shadow-purple-500/20 border-purple-500/30',
      pink: 'shadow-pink-500/20 border-pink-500/30',
      green: 'shadow-green-500/20 border-green-500/30',
      blue: 'shadow-blue-500/20 border-blue-500/30',
      orange: 'shadow-orange-500/20 border-orange-500/30',
      red: 'shadow-red-500/20 border-red-500/30'
    };
    return colors[glowColor];
  };

  const getVariantClass = () => {
    const variants = {
      default: 'bg-white/10 backdrop-blur-sm border border-white/20',
      glass: 'bg-white/5 backdrop-blur-md border border-white/10',
      neon: 'bg-black/20 backdrop-blur-sm border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20',
      holographic: 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20'
    };
    return variants[variant];
  };

  const baseClasses = cn(
    'relative rounded-xl p-6 transition-all duration-300 overflow-hidden',
    getVariantClass(),
    getGlowColor(),
    {
      'hover:scale-105 hover:shadow-2xl hover:border-white/40': hover,
      'animate-pulse': animated && variant === 'holographic'
    },
    className
  );

  return (
    <div className={baseClasses}>
      {/* Animated border gradient */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      {/* Holographic shimmer effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div className={cn(
        'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none',
        {
          'hover:opacity-100': hover,
          'opacity-20': !hover
        },
        {
          'bg-gradient-to-r from-cyan-500/10 to-purple-500/10': glowColor === 'cyan',
          'bg-gradient-to-r from-purple-500/10 to-pink-500/10': glowColor === 'purple',
          'bg-gradient-to-r from-pink-500/10 to-rose-500/10': glowColor === 'pink',
          'bg-gradient-to-r from-green-500/10 to-emerald-500/10': glowColor === 'green',
          'bg-gradient-to-r from-blue-500/10 to-cyan-500/10': glowColor === 'blue',
          'bg-gradient-to-r from-orange-500/10 to-yellow-500/10': glowColor === 'orange',
          'bg-gradient-to-r from-red-500/10 to-pink-500/10': glowColor === 'red'
        }
      )}></div>
    </div>
  );
};

export default FuturisticCard;