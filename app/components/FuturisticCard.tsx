import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow';
  hover?: boolean;
  animated?: boolean;
}

const FuturisticCard = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  hover = true,
  animated = true
}: FuturisticCardProps) => {
  const glowColors = {
    cyan: {
      shadow: 'hover:shadow-cyan-500/30',
      border: 'hover:border-cyan-400/50',
      glow: 'hover:shadow-cyan-500/20',
      gradient: 'from-cyan-500/20 via-cyan-400/10 to-cyan-500/20'
    },
    purple: {
      shadow: 'hover:shadow-purple-500/30',
      border: 'hover:border-purple-400/50',
      glow: 'hover:shadow-purple-500/20',
      gradient: 'from-purple-500/20 via-purple-400/10 to-purple-500/20'
    },
    pink: {
      shadow: 'hover:shadow-pink-500/30',
      border: 'hover:border-pink-400/50',
      glow: 'hover:shadow-pink-500/20',
      gradient: 'from-pink-500/20 via-pink-400/10 to-pink-500/20'
    },
    blue: {
      shadow: 'hover:shadow-blue-500/30',
      border: 'hover:border-blue-400/50',
      glow: 'hover:shadow-blue-500/20',
      gradient: 'from-blue-500/20 via-blue-400/10 to-blue-500/20'
    },
    green: {
      shadow: 'hover:shadow-green-500/30',
      border: 'hover:border-green-400/50',
      glow: 'hover:shadow-green-500/20',
      gradient: 'from-green-500/20 via-green-400/10 to-green-500/20'
    },
    orange: {
      shadow: 'hover:shadow-orange-500/30',
      border: 'hover:border-orange-400/50',
      glow: 'hover:shadow-orange-500/20',
      gradient: 'from-orange-500/20 via-orange-400/10 to-orange-500/20'
    },
    red: {
      shadow: 'hover:shadow-red-500/30',
      border: 'hover:border-red-400/50',
      glow: 'hover:shadow-red-500/20',
      gradient: 'from-red-500/20 via-red-400/10 to-red-500/20'
    },
    yellow: {
      shadow: 'hover:shadow-yellow-500/30',
      border: 'hover:border-yellow-400/50',
      glow: 'hover:shadow-yellow-500/20',
      gradient: 'from-yellow-500/20 via-yellow-400/10 to-yellow-500/20'
    },
  };

  const currentGlow = glowColors[glowColor];

  return (
    <div
      className={cn(
        'relative group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500',
        hover && 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl',
        hover && currentGlow.shadow,
        hover && currentGlow.border,
        animated && 'animate-pulse-slow',
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.1)'
      }}
    >
      {/* Animated border gradient */}
      <div 
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          'bg-gradient-to-r from-transparent via-white/20 to-transparent',
          'animate-pulse'
        )}
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor === 'cyan' ? '#00f5ff' : glowColor === 'purple' ? '#8b5cf6' : glowColor === 'pink' ? '#ec4899' : '#3b82f6'}, transparent)`,
          padding: '1px'
        }}
      />
      
      {/* Inner glow effect */}
      <div 
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          `bg-gradient-to-r ${currentGlow.gradient}`
        )}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;