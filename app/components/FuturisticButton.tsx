import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'holographic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'red';
  animated?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  glowColor = 'cyan',
  animated = true,
  disabled = false,
  href,
  onClick,
  type = 'button'
}) => {
  const getSizeClass = () => {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    };
    return sizes[size];
  };

  const getVariantClass = () => {
    const variants = {
      primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700',
      secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700',
      outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
      ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300',
      neon: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-lg shadow-cyan-400/20',
      holographic: 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-white/20 hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30'
    };
    return variants[variant];
  };

  const getGlowEffect = () => {
    if (variant === 'neon' || variant === 'holographic') {
      const colors = {
        cyan: 'shadow-cyan-400/50 hover:shadow-cyan-400/80',
        purple: 'shadow-purple-400/50 hover:shadow-purple-400/80',
        pink: 'shadow-pink-400/50 hover:shadow-pink-400/80',
        green: 'shadow-green-400/50 hover:shadow-green-400/80',
        blue: 'shadow-blue-400/50 hover:shadow-blue-400/80',
        orange: 'shadow-orange-400/50 hover:shadow-orange-400/80',
        red: 'shadow-red-400/50 hover:shadow-red-400/80'
      };
      return colors[glowColor];
    }
    return '';
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900',
    getSizeClass(),
    getVariantClass(),
    getGlowEffect(),
    {
      'hover:scale-105 hover:shadow-xl': !disabled,
      'opacity-50 cursor-not-allowed': disabled,
      'animate-pulse': animated && variant === 'holographic'
    },
    className
  );

  const ButtonContent = () => (
    <>
      {/* Shimmer effect */}
      {animated && variant === 'primary' && (
        <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 hover:animate-pulse transition-opacity duration-300"></div>
      )}
      
      {/* Neon glow effect */}
      {variant === 'neon' && (
        <div className={cn(
          'absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300',
          {
            'bg-gradient-to-r from-cyan-400/20 to-purple-400/20': glowColor === 'cyan',
            'bg-gradient-to-r from-purple-400/20 to-pink-400/20': glowColor === 'purple',
            'bg-gradient-to-r from-pink-400/20 to-rose-400/20': glowColor === 'pink',
            'bg-gradient-to-r from-green-400/20 to-emerald-400/20': glowColor === 'green',
            'bg-gradient-to-r from-blue-400/20 to-cyan-400/20': glowColor === 'blue',
            'bg-gradient-to-r from-orange-400/20 to-yellow-400/20': glowColor === 'orange',
            'bg-gradient-to-r from-red-400/20 to-pink-400/20': glowColor === 'red'
          }
        )}></div>
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonContent />
    </button>
  );
};

export default FuturisticButton;