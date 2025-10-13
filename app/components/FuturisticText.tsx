import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'neon' | 'glow' | 'default';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  className?: string;
  animated?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'default',
  size = 'base',
  className,
  animated = false,
  as: Component = 'span',
}) => {
  const baseClasses = "font-bold";
  
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    '2xl': "text-2xl",
    '3xl': "text-3xl",
    '4xl': "text-4xl",
    '5xl': "text-5xl",
    '6xl': "text-6xl",
    '7xl': "text-7xl"
  };

  const variantClasses = {
    default: "text-white",
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
    neon: "text-cyan-400 neon-glow",
    glow: "text-cyan-400 drop-shadow-lg drop-shadow-cyan-500/50"
  };

  const animatedClasses = animated ? "animate-pulse" : "";

  const textClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    animatedClasses,
    className
  );

  return (
    <Component className={textClasses}>
      {children}
    </Component>
  );
};

export default FuturisticText;