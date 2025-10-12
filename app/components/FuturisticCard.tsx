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
  const baseClasses = 'relative rounded-xl transition-all duration-300 transform';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl' : '';
  const glowClasses = glow ? 'shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20' : '';
  const borderClasses = border ? 'border border-white/20 hover:border-purple-500/50' : '';
  const backgroundClasses = 'bg-white/5 backdrop-blur-sm hover:bg-white/10';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${borderClasses} ${backgroundClasses} ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;