import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
  gradient = 'cyan',
  size = 'md'
}) => {
  const baseClasses = "relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 group";
  
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const gradientClasses = {
    cyan: "hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10",
    purple: "hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10",
    pink: "hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/10",
    green: "hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10",
    orange: "hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10"
  };

  const glowClasses = glow ? "hover:shadow-2xl" : "";
  const hoverClasses = hover ? "hover:scale-105 hover:bg-white/20" : "";

  const cardClasses = `${baseClasses} ${sizeClasses[size]} ${gradientClasses[gradient]} ${glowClasses} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses}>
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Scan line effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;