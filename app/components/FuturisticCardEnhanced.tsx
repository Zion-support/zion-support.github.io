import React from 'react';
import { cn } from '@/utils/cn';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red';
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
}

export default function FuturisticCardEnhanced({ 
  children, 
  className = "",
  glowColor = 'cyan',
  hoverEffect = true,
  animated = false,
  neon = false
}: FuturisticCardEnhancedProps) {
  const glowColors = {
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/30',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/30',
    pink: 'shadow-pink-500/20 hover:shadow-pink-500/30',
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/30',
    green: 'shadow-green-500/20 hover:shadow-green-500/30',
    orange: 'shadow-orange-500/20 hover:shadow-orange-500/30',
    red: 'shadow-red-500/20 hover:shadow-red-500/30',
  };

  const neonColors = {
    cyan: 'border-cyan-500/50 hover:border-cyan-400/80',
    purple: 'border-purple-500/50 hover:border-purple-400/80',
    pink: 'border-pink-500/50 hover:border-pink-400/80',
    blue: 'border-blue-500/50 hover:border-blue-400/80',
    green: 'border-green-500/50 hover:border-green-400/80',
    orange: 'border-orange-500/50 hover:border-orange-400/80',
    red: 'border-red-500/50 hover:border-red-400/80',
  };

  return (
    <div
      className={cn(
        'bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 relative overflow-hidden',
        hoverEffect && 'hover:scale-105 hover:bg-white/20',
        animated && 'animate-pulse',
        neon && neonColors[glowColor],
        !neon && 'border-white/20 hover:border-white/30',
        glowColors[glowColor],
        className
      )}
    >
      {/* Animated background gradient */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
      )}
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ${
        hoverEffect ? 'group-hover:opacity-100' : ''
      } ${glowColors[glowColor].replace('shadow-', 'bg-gradient-to-r from-').replace('/20', '/5').replace('hover:', '')}`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}