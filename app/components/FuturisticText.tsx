import React from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'neon' | 'glow' | 'animated';
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  animate?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'gradient',
  color = 'cyan',
  size = 'md',
  animate = true
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
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };

  const colorGradients = {
    cyan: 'from-cyan-400 via-cyan-300 to-cyan-500',
    purple: 'from-purple-400 via-purple-300 to-purple-500',
    pink: 'from-pink-400 via-pink-300 to-pink-500',
    blue: 'from-blue-400 via-blue-300 to-blue-500',
    green: 'from-green-400 via-green-300 to-green-500',
    orange: 'from-orange-400 via-orange-300 to-orange-500',
    red: 'from-red-400 via-red-300 to-red-500',
    yellow: 'from-yellow-400 via-yellow-300 to-yellow-500'
  };

  const neonColors = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
    pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]',
    orange: 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]',
    red: 'text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]',
    yellow: 'text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]'
  };

  const glowColors = {
    cyan: 'text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]',
    purple: 'text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    pink: 'text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]',
    blue: 'text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    green: 'text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.3)]',
    orange: 'text-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.3)]',
    red: 'text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    yellow: 'text-yellow-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return `text-transparent bg-clip-text bg-gradient-to-r ${colorGradients[color]}`;
      case 'neon':
        return neonColors[color];
      case 'glow':
        return glowColors[color];
      case 'animated':
        return `text-transparent bg-clip-text bg-gradient-to-r ${colorGradients[color]} animate-pulse`;
      default:
        return `text-transparent bg-clip-text bg-gradient-to-r ${colorGradients[color]}`;
    }
  };

  const animationClasses = animate ? 'animate-pulse' : '';

  return (
    <span
      className={cn(
        'font-bold',
        sizeClasses[size],
        getVariantClasses(),
        animationClasses,
        className
      )}
    >
      {children}
    </span>
  );
};

export default FuturisticText;