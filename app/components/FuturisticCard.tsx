import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'neon' | 'cyber' | 'holographic' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  animated?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  glow = true,
  animated = true,
  hover = true,
  className = '',
  onClick
}) => {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-sm border border-white/20',
    neon: 'bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-pink-500/30',
    cyber: 'bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/30',
    holographic: 'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-purple-500/30',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10'
  };

  const baseClasses = `
    relative rounded-xl overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${hover ? 'hover:bg-white/20 transition-all duration-300 hover:scale-105' : ''}
    ${glow ? 'shadow-lg hover:shadow-2xl' : ''}
    ${animated ? 'hover:shadow-cyan-500/10' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  return (
    <div
      className={`${baseClasses} group`}
      onClick={onClick}
    >
      {/* Animated background effect */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      {/* Glow effect */}
      {glow && variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
      )}
      
      {glow && variant === 'cyber' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
      )}
      
      {glow && variant === 'holographic' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCard;