import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  variant?: 'default' | 'accent' | 'premium';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  variant = 'default'
}) => {
  const baseClasses = 'relative rounded-2xl border transition-all duration-300 overflow-hidden group';
  
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15',
    accent: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-lg border-cyan-400/30 hover:from-cyan-400/20 hover:to-blue-500/20',
    premium: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-lg border-purple-400/30 hover:from-purple-400/20 hover:to-pink-500/20'
  };

  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl' : '';
  const glowClasses = glow ? 'hover:shadow-cyan-500/20' : '';

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <div className={cardClasses}>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-lg" />
      </div>
    </div>
  );
};

export default FuturisticCard;