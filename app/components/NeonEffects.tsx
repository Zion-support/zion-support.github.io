'use client';

import React from 'react';

interface NeonEffectsProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function NeonEffects({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  intensity = 'medium' 
}: NeonEffectsProps) {
  const getGlowClass = () => {
    const intensityMap = {
      low: 'shadow-sm',
      medium: 'shadow-lg',
      high: 'shadow-2xl'
    };

    const colorMap = {
      cyan: 'shadow-cyan-500/50',
      purple: 'shadow-purple-500/50',
      pink: 'shadow-pink-500/50',
      green: 'shadow-green-500/50',
      yellow: 'shadow-yellow-500/50',
      red: 'shadow-red-500/50',
      blue: 'shadow-blue-500/50',
      orange: 'shadow-orange-500/50'
    };

    return `${intensityMap[intensity]} ${colorMap[glowColor as keyof typeof colorMap] || colorMap.cyan}`;
  };

  return (
    <div className={`${getGlowClass()} ${className}`}>
      {children}
    </div>
  );
}

// Neon Button Component
interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function NeonButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false
}: NeonButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white border-cyan-500/50';
      case 'secondary':
        return 'bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10';
      case 'accent':
        return 'bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white border-pink-500/50';
      default:
        return 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white border-cyan-500/50';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
        relative overflow-hidden
        rounded-lg font-semibold
        transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-cyan-500/50
        disabled:opacity-50 disabled:cursor-not-allowed
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
        shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40
        border
      `}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// Neon Card Component
interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
}

export function NeonCard({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  hover = true
}: NeonCardProps) {
  const getGlowColor = () => {
    const colorMap = {
      cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
      purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
      pink: 'shadow-pink-500/20 hover:shadow-pink-500/40',
      green: 'shadow-green-500/20 hover:shadow-green-500/40',
      yellow: 'shadow-yellow-500/20 hover:shadow-yellow-500/40',
      red: 'shadow-red-500/20 hover:shadow-red-500/40',
      blue: 'shadow-blue-500/20 hover:shadow-blue-500/40',
      orange: 'shadow-orange-500/20 hover:shadow-orange-500/40'
    };

    return colorMap[glowColor as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <div className={`
      bg-white/10 backdrop-blur-lg
      rounded-2xl border border-white/20
      ${getGlowColor()}
      ${hover ? 'hover:bg-white/15 hover:scale-105' : ''}
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}

// Neon Text Component
interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

export function NeonText({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  size = 'md'
}: NeonTextProps) {
  const getSizeClass = () => {
    const sizeMap = {
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
    return sizeMap[size];
  };

  const getGlowColor = () => {
    const colorMap = {
      cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]',
      green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      yellow: 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]',
      red: 'text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]',
      blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]',
      orange: 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]'
    };

    return colorMap[glowColor as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <span className={`
      ${getSizeClass()}
      ${getGlowColor()}
      font-bold
      ${className}
    `}>
      {children}
    </span>
  );
}