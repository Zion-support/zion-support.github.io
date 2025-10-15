
import React from 'react';
import { clsx } from 'clsx';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border';
  size?: 'sm' | 'md' | 'lg';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md'
}) => {
  const baseClasses = 'relative rounded-lg transition-all duration-300 transform hover:scale-105';
  
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-sm border border-white/20',
    glow: 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/25',
    border: 'bg-transparent border-2 border-purple-500/50'
  };
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const cardClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default FuturisticCard;

