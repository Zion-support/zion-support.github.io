import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glass';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10';
  
  const variantClasses = {
    default: 'bg-white/10',
    elevated: 'bg-white/20 shadow-lg',
    glass: 'bg-white/5 backdrop-blur-md'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;