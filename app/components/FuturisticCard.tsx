import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow';
  hover?: boolean;
  neon?: boolean;
}

const FuturisticCard = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  hover = true,
  neon = true
}: FuturisticCardProps) => {
  const glowColors = {
    cyan: 'hover:shadow-cyan-500/25 hover:shadow-cyan-400/10',
    purple: 'hover:shadow-purple-500/25 hover:shadow-purple-400/10',
    pink: 'hover:shadow-pink-500/25 hover:shadow-pink-400/10',
    blue: 'hover:shadow-blue-500/25 hover:shadow-blue-400/10',
    green: 'hover:shadow-green-500/25 hover:shadow-green-400/10',
    orange: 'hover:shadow-orange-500/25 hover:shadow-orange-400/10',
    red: 'hover:shadow-red-500/25 hover:shadow-red-400/10',
    yellow: 'hover:shadow-yellow-500/25 hover:shadow-yellow-400/10',
  };

  const neonColors = {
    cyan: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]',
    purple: 'hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    pink: 'hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]',
    blue: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    green: 'hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
    orange: 'hover:border-orange-400/50 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]',
    red: 'hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    yellow: 'hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]',
  };

  return (
    <div
      className={cn(
        'relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 group',
        hover && 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl',
        hover && glowColors[glowColor],
        neon && neonColors[glowColor],
        'before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500',
        'after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500',
        // Animated border effect
        'hover:before:animate-spin hover:before:duration-[3000ms]',
        // Subtle inner glow
        'hover:ring-1 hover:ring-white/10',
        className
      )}
    >
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
      
      {/* Floating particles inside card */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-500"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-700"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;