import React from 'react';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'neon' | 'glow' | 'animated';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'base',
  weight = 'normal',
  color = 'text-white',
  as: Component = 'p',
  glowColor = 'purple'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const weightClasses = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const variantClasses = {
    default: '',
    gradient: 'bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent',
    neon: 'text-cyan-400 drop-shadow-lg',
    glow: `text-${glowColor}-400 drop-shadow-lg`,
    animated: 'bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse'
  };

  const glowColors = {
    purple: 'drop-shadow-purple-500/50',
    cyan: 'drop-shadow-cyan-500/50',
    pink: 'drop-shadow-pink-500/50',
    green: 'drop-shadow-green-500/50',
    blue: 'drop-shadow-blue-500/50',
    yellow: 'drop-shadow-yellow-500/50'
  };

  const glowClass = variant === 'glow' ? glowColors[glowColor] : '';

  const classes = `${sizeClasses[size]} ${weightClasses[weight]} ${variantClasses[variant]} ${glowClass} ${className}`;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default FuturisticTextEnhanced;