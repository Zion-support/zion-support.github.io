import React from 'react';
import { cn } from '../lib/utils';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'red' | 'orange' | 'yellow';
  neon?: boolean;
  animated?: boolean;
  disabled?: boolean;
  className?: string;
}

const FuturisticButtonEnhanced: React.FC<FuturisticButtonEnhancedProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  glowColor = 'cyan',
  neon = true,
  animated = true,
  disabled = false,
  className,
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const variantClasses = {
    primary: 'text-white',
    secondary: 'text-gray-300 bg-slate-800/50',
    outline: 'text-cyan-400 border-2 border-cyan-500/30 hover:border-cyan-500/50',
    ghost: 'text-gray-300 hover:text-white',
  };

  const glowColors = {
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    red: 'shadow-red-500/25 hover:shadow-red-500/40',
    orange: 'shadow-orange-500/25 hover:shadow-orange-500/40',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40',
  };

  const gradientClasses = {
    cyan: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
    pink: 'bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700',
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700',
    green: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
    red: 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700',
    orange: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
    yellow: 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700',
  };

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variant === 'primary' ? gradientClasses[glowColor] : variantClasses[variant],
    neon && glowColors[glowColor],
    animated && 'hover:scale-105 active:scale-95',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      {/* Animated background */}
      <div className={cn(
        'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        `bg-gradient-to-r from-${glowColor}-500/20 to-transparent`,
        animated && 'animate-pulse'
      )} />

      {/* Shimmer effect */}
      <div className={cn(
        'absolute inset-0 rounded-lg overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-1000'
      )} />

      {/* Content */}
      <div className="relative z-10 flex items-center">
        {Icon && iconPosition === 'left' && (
          <Icon className={cn('mr-2', size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5')} />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className={cn('ml-2', size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5')} />
        )}
      </div>

      {/* Neon border effect */}
      {neon && (
        <div className={cn(
          'absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          `border-${glowColor}-400/50`,
          animated && 'animate-pulse'
        )} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {content}
    </button>
  );
};

export default FuturisticButtonEnhanced;