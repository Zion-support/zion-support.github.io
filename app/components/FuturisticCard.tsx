import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'neon';
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true
}) => {
  const baseClasses = 'rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/10',
    gradient: 'bg-gradient-to-br from-slate-800/50 to-slate-900/50',
    glass: 'bg-white/5 backdrop-blur-md',
    neon: 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30'
  };

  const hoverClasses = hover ? 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10' : '';

  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default FuturisticCard;