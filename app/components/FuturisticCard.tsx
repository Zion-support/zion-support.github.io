import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'yellow' | 'green';
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true
}) => {
  const glowColors = {
    cyan: 'hover:shadow-cyan-500/20 hover:border-cyan-400/50',
    purple: 'hover:shadow-purple-500/20 hover:border-purple-400/50',
    pink: 'hover:shadow-pink-500/20 hover:border-pink-400/50',
    yellow: 'hover:shadow-yellow-500/20 hover:border-yellow-400/50',
    green: 'hover:shadow-green-500/20 hover:border-green-400/50'
  };

  const baseClasses = "relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden";
  const hoverClasses = hover ? "transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl" : "";
  const glowClasses = hover ? glowColors[glowColor] : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-400/60 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/60 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400/60 rounded-br-lg"></div>
    </div>
  );
};

export default FuturisticCard;
