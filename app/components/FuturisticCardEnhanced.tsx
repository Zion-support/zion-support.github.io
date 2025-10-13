import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'red' | 'orange' | 'yellow';
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
  gradient?: boolean;
  glass?: boolean;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
  children,
  className,
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true,
  neon = true,
  gradient = true,
  glass = true,
}) => {
  const glowColors = {
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    red: 'shadow-red-500/25 hover:shadow-red-500/40',
    orange: 'shadow-orange-500/25 hover:shadow-orange-500/40',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40',
  };

  const borderColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/50',
    purple: 'border-purple-500/30 hover:border-purple-500/50',
    pink: 'border-pink-500/30 hover:border-pink-500/50',
    blue: 'border-blue-500/30 hover:border-blue-500/50',
    green: 'border-green-500/30 hover:border-green-500/50',
    red: 'border-red-500/30 hover:border-red-500/50',
    orange: 'border-orange-500/30 hover:border-orange-500/50',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/50',
  };

  const gradientClasses = {
    cyan: 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10',
    purple: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    pink: 'bg-gradient-to-br from-pink-500/10 to-red-500/10',
    blue: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    green: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
    red: 'bg-gradient-to-br from-red-500/10 to-pink-500/10',
    orange: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    yellow: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
  };

  return (
    <div
      className={cn(
        'relative group p-6 rounded-xl transition-all duration-500',
        glass && 'backdrop-blur-sm bg-white/5',
        gradient && gradientClasses[glowColor],
        borderColors[glowColor],
        glowColors[glowColor],
        hoverEffect && 'hover:scale-105 hover:-translate-y-2',
        animated && 'animate-pulse',
        neon && 'shadow-2xl',
        'border-2',
        className
      )}
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className={cn(
          'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          `bg-gradient-to-r from-${glowColor}-500/20 via-transparent to-${glowColor}-500/20`,
          animated && 'animate-spin-slow'
        )} />
      </div>

      {/* Inner glow effect */}
      <div className={cn(
        'absolute inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500',
        `bg-gradient-to-br from-${glowColor}-500/5 to-transparent`
      )} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default FuturisticCardEnhanced;