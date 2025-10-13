import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glass' | 'neon';
  hover?: boolean;
  glow?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = false
}) => {
  const baseClasses = 'relative rounded-xl transition-all duration-300 overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-sm border border-white/20',
    elevated: 'bg-white/15 backdrop-blur-md border border-white/30 shadow-2xl',
    glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
    neon: 'bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 shadow-cyan-500/10'
  };
  
  const hoverClasses = hover ? 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10' : '';
  const glowClasses = glow ? 'shadow-2xl shadow-cyan-500/20' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${glowClasses} ${className} group`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default FuturisticCard;