import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'cyan'
}) => {
  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/25 hover:shadow-2xl',
    purple: 'hover:shadow-purple-500/25 hover:shadow-2xl',
    pink: 'hover:shadow-pink-500/25 hover:shadow-2xl',
    blue: 'hover:shadow-blue-500/25 hover:shadow-2xl',
    green: 'hover:shadow-green-500/25 hover:shadow-2xl',
    orange: 'hover:shadow-orange-500/25 hover:shadow-2xl',
    red: 'hover:shadow-red-500/25 hover:shadow-2xl'
  };

  return (
    <div 
      className={`
        relative group
        bg-gradient-to-br from-slate-800/50 to-slate-900/50 
        backdrop-blur-sm 
        rounded-2xl 
        border border-white/10 
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:border-white/30 hover:transform hover:scale-105' : ''}
        ${hoverEffect ? glowClasses[glowColor as keyof typeof glowClasses] : ''}
        ${className}
      `}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FuturisticCard;