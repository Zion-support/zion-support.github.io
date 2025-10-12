'use client';

import React from 'react';
import { cn } from '../lib/utils';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
    accent: 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-border animate-pulse" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
};

export default NeonButton;