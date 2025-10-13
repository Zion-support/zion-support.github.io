import React, { ReactNode } from 'react';

interface FuturisticTextProps {
  children: ReactNode;
  variant?: 'default' | 'neon' | 'holographic' | 'cyber' | 'glitch' | 'gradient';
  color?: 'purple' | 'pink' | 'cyan' | 'green' | 'orange' | 'red' | 'white';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  className?: string;
  animate?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'default',
  color = 'white',
  size = 'base',
  weight = 'normal',
  className = '',
  animate = false
}) => {
  const getVariantClasses = () => {
    const variants = {
      default: 'text-white',
      neon: 'neon-glow-enhanced',
      holographic: 'holographic-text',
      cyber: 'cyber-text',
      glitch: 'glitch',
      gradient: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
    };
    return variants[variant];
  };

  const getColorClasses = () => {
    if (variant === 'neon') {
      const colors = {
        purple: 'neon-purple-enhanced',
        pink: 'neon-pink-enhanced',
        cyan: 'neon-cyan-enhanced',
        green: 'neon-green-enhanced',
        orange: 'text-orange-400',
        red: 'text-red-400',
        white: 'text-white'
      };
      return colors[color];
    }

    if (variant === 'holographic' || variant === 'gradient') {
      return '';
    }

    const colors = {
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      orange: 'text-orange-400',
      red: 'text-red-400',
      white: 'text-white'
    };
    return colors[color];
  };

  const getSizeClasses = () => {
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
      '6xl': 'text-6xl'
    };
    return sizes[size];
  };

  const getWeightClasses = () => {
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold'
    };
    return weights[weight];
  };

  const getAnimationClasses = () => {
    if (!animate) return '';
    
    const animations = {
      default: 'animate-pulse',
      neon: 'animate-pulse',
      holographic: 'animate-pulse',
      cyber: 'animate-pulse',
      glitch: 'animate-pulse',
      gradient: 'animate-pulse'
    };
    return animations[variant];
  };

  const baseClasses = `
    ${getVariantClasses()}
    ${getColorClasses()}
    ${getSizeClasses()}
    ${getWeightClasses()}
    ${getAnimationClasses()}
    ${className}
  `;

  if (variant === 'glitch') {
    return (
      <span className={baseClasses} data-text={children}>
        {children}
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