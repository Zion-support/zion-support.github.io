import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'neon' | 'cyber' | 'holographic' | 'glitch' | 'typing';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'red' | 'white';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  animated?: boolean;
  delay?: number;
  speed?: number;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'gradient',
  color = 'cyan',
  size = 'base',
  weight = 'normal',
  animated = true,
  delay = 0,
  speed = 100
}) => {
  const getSizeClass = () => {
    const sizes = {
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
    return sizes[size];
  };

  const getWeightClass = () => {
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    };
    return weights[weight];
  };

  const getVariantClass = () => {
    const variants = {
      gradient: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
      neon: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]',
      cyber: 'font-mono tracking-wider uppercase text-cyan-400',
      holographic: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse',
      glitch: 'text-cyan-400 relative',
      typing: 'text-cyan-400'
    };
    return variants[variant];
  };

  const getColorClass = () => {
    if (variant === 'gradient' || variant === 'holographic') return '';
    
    const colors = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      green: 'text-green-400',
      blue: 'text-blue-400',
      orange: 'text-orange-400',
      red: 'text-red-400',
      white: 'text-white'
    };
    return colors[color];
  };

  const getAnimationClass = () => {
    if (!animated) return '';
    
    const animations = {
      gradient: 'animate-pulse',
      neon: 'animate-pulse',
      cyber: '',
      holographic: 'animate-pulse',
      glitch: 'animate-pulse',
      typing: ''
    };
    return animations[variant];
  };

  const baseClasses = cn(
    getSizeClass(),
    getWeightClass(),
    getVariantClass(),
    getColorClass(),
    getAnimationClass(),
    className
  );

  // Glitch effect for glitch variant
  if (variant === 'glitch' && animated) {
    return (
      <span className={baseClasses}>
        <span className="relative inline-block">
          {children}
          <span className="absolute inset-0 text-red-400 opacity-0 animate-ping">
            {children}
          </span>
          <span className="absolute inset-0 text-blue-400 opacity-0 animate-ping delay-75">
            {children}
          </span>
        </span>
      </span>
    );
  }

  // Typing effect for typing variant
  if (variant === 'typing' && animated) {
    return (
      <span className={baseClasses}>
        <span className="inline-block">
          {children}
          <span className="animate-pulse">|</span>
        </span>
      </span>
    );
  }

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
};

export default FuturisticText;