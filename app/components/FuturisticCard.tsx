import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  hoverEffect = true 
}) => {
  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/20 shadow-cyan-500/10',
    purple: 'hover:shadow-purple-500/20 shadow-purple-500/10',
    pink: 'hover:shadow-pink-500/20 shadow-pink-500/10',
    blue: 'hover:shadow-blue-500/20 shadow-blue-500/10',
    green: 'hover:shadow-green-500/20 shadow-green-500/10',
    orange: 'hover:shadow-orange-500/20 shadow-orange-500/10',
    red: 'hover:shadow-red-500/20 shadow-red-500/10',
    yellow: 'hover:shadow-yellow-500/20 shadow-yellow-500/10'
  };

  return (
    <div
      className={cn(
        'relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:bg-white/10 hover:border-white/20 hover:scale-105',
        hoverEffect && glowClasses[glowColor as keyof typeof glowClasses],
        hoverEffect && 'hover:shadow-2xl',
        className
      )}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default FuturisticCard;