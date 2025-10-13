import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'neon' | 'glass';
  hover?: boolean;
  animated?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  animated = true,
}) => {
  const baseClasses = "relative rounded-xl overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/10 backdrop-blur-sm border border-white/20",
    glow: "bg-white/10 backdrop-blur-sm border border-cyan-500/30 shadow-lg shadow-cyan-500/10",
    neon: "bg-white/5 backdrop-blur-sm border border-cyan-500/50 shadow-lg shadow-cyan-500/20",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
  };

  const hoverClasses = hover ? "hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105" : "";
  const animatedClasses = animated ? "animate-fade-in-up" : "";

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverClasses,
      animatedClasses,
      className
    )}>
      {/* Animated border effect */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;