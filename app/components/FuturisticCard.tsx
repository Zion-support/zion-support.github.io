import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  border = true
}) => {
  const baseClasses = "relative backdrop-blur-sm transition-all duration-300";
  const hoverClasses = hover ? "hover:bg-white/20 hover:scale-105 hover:shadow-2xl" : "";
  const glowClasses = glow ? "shadow-lg shadow-purple-500/10" : "";
  const borderClasses = border ? "border border-white/20" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${borderClasses} ${className}`}>
      {/* Animated border gradient */}
      {border && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      {border && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-60 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-60 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400 opacity-60 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-400 opacity-60 rounded-br-lg"></div>
        </>
      )}
    </div>
  );
};

export default FuturisticCard;