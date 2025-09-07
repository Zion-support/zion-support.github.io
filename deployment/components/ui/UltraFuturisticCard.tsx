import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'neon';
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const baseClasses = 'relative p-6 rounded-xl backdrop-blur-sm border';
  
  const variantClasses = {
    default: 'bg-white/10 border-white/20 text-white',
    glow: 'bg-white/10 border-white/20 text-white shadow-lg shadow-blue-500/25',
    neon: 'bg-white/10 border-blue-400/50 text-white shadow-lg shadow-blue-400/50'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default UltraFuturisticCard;