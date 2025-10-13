import React from 'react';
import { cn } from '@/utils/cn';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  variant?: 'display' | 'heading' | 'body' | 'caption';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
  neon?: boolean;
  className?: string;
}

export default function FuturisticTextEnhanced({
  children,
  variant = 'body',
  size = 'base',
  gradient = false,
  animated = false,
  glow = false,
  neon = false,
  className = ''
}: FuturisticTextEnhancedProps) {
  const variantClasses = {
    display: 'font-bold tracking-tight',
    heading: 'font-semibold',
    body: 'font-normal',
    caption: 'font-medium text-sm'
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
    '6xl': 'text-6xl'
  };

  const gradientClasses = gradient ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' : '';
  const glowClasses = glow ? 'drop-shadow-lg drop-shadow-cyan-500/50' : '';
  const neonClasses = neon ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' : '';
  const animatedClasses = animated ? 'animate-pulse' : '';

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
    >
      {children}
    </span>
  );
}