import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red';
  neon?: boolean;
  animated?: boolean;
  className?: string;
}

export default function FuturisticButtonEnhanced({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  glowColor = 'cyan',
  neon = false,
  animated = false,
  className = ''
}: FuturisticButtonEnhancedProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    ghost: 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
  };

  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/25',
    purple: 'hover:shadow-purple-500/25',
    pink: 'hover:shadow-pink-500/25',
    blue: 'hover:shadow-blue-500/25',
    green: 'hover:shadow-green-500/25',
    orange: 'hover:shadow-orange-500/25',
    red: 'hover:shadow-red-500/25'
  };

  const neonClasses = {
    cyan: 'border-cyan-500/50 hover:border-cyan-400/80',
    purple: 'border-purple-500/50 hover:border-purple-400/80',
    pink: 'border-pink-500/50 hover:border-pink-400/80',
    blue: 'border-blue-500/50 hover:border-blue-400/80',
    green: 'border-green-500/50 hover:border-green-400/80',
    orange: 'border-orange-500/50 hover:border-orange-400/80',
    red: 'border-red-500/50 hover:border-red-400/80'
  };

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    glowClasses[glowColor],
    neon && neonClasses[glowColor],
    animated && 'animate-pulse',
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
      )}
      
      {/* Animated background */}
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}