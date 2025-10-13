import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'neon' | 'glow' | 'default';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  animate?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'base',
  animate = false
}) => {
  const baseClasses = 'font-bold';
  
  const variantClasses = {
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400',
    neon: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
    glow: 'text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]',
    default: 'text-white'
  };
  
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };
  
  const animationClasses = animate ? 'animate-pulse' : '';
  
  const textClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    animationClasses,
    className
  );

  return (
    <span className={textClasses}>
      {children}
    </span>
  );
};

export default FuturisticText;