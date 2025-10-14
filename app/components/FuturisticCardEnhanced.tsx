import React from 'react';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'gradient' | 'neon' | 'animated';
  hoverEffect?: boolean;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
  onClick?: () => void;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
  glowColor = 'purple',
  onClick
}) => {
  const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/10',
    glow: 'bg-white/10 shadow-lg shadow-purple-500/20',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    neon: 'bg-transparent border-2 border-cyan-400 shadow-lg shadow-cyan-500/25',
    animated: 'bg-white/10 shadow-lg shadow-purple-500/20 animate-pulse'
  };

  const glowColors = {
    purple: 'hover:shadow-purple-500/40 hover:border-purple-500/60',
    cyan: 'hover:shadow-cyan-500/40 hover:border-cyan-500/60',
    pink: 'hover:shadow-pink-500/40 hover:border-pink-500/60',
    green: 'hover:shadow-green-500/40 hover:border-green-500/60',
    blue: 'hover:shadow-blue-500/40 hover:border-blue-500/60',
    yellow: 'hover:shadow-yellow-500/40 hover:border-yellow-500/60'
  };

  const hoverClasses = hoverEffect ? 'hover:transform hover:scale-105 hover:-translate-y-1' : '';
  const glowClasses = variant === 'glow' ? glowColors[glowColor] : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <div
      className={classes}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </div>
  );
};

export default FuturisticCardEnhanced;