'use client';

import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'neon' | 'glass';
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'relative rounded-2xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-lg border border-white/20',
    glow: 'bg-white/10 backdrop-blur-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10',
    neon: 'bg-white/10 backdrop-blur-lg border border-cyan-500/50 shadow-lg shadow-cyan-500/20',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl',
  };

  const hoverClasses = hover ? 'hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1' : '';

  return (
    <div className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}>
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-2xl" />
    </div>
  );
};

export default FuturisticCard;