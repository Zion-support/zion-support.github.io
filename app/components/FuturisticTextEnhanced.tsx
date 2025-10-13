import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  variant?: 'display' | 'heading' | 'body' | 'caption';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
  neon?: boolean;
  className?: string;
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  variant = 'body',
  size = 'base',
  gradient = false,
  animated = false,
  glow = false,
  neon = false,
  className,
}) => {
  const variantClasses = {
    display: 'font-black tracking-tight',
    heading: 'font-bold tracking-tight',
    body: 'font-normal',
    caption: 'font-medium text-sm',
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
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  const gradientClasses = gradient
    ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
    : 'text-white';

  const glowClasses = glow
    ? 'drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]'
    : '';

  const neonClasses = neon
    ? 'text-shadow-neon'
    : '';

  const animatedClasses = animated
    ? 'animate-pulse'
    : '';

  return (
    <span
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        gradientClasses,
        glowClasses,
        neonClasses,
        animatedClasses,
        className
      )}
      style={{
        textShadow: neon
          ? '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff'
          : undefined,
      }}
    >
      {children}
    </span>
  );
};

export default FuturisticTextEnhanced;