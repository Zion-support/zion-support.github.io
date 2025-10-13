import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:border-cyan-300',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:transform-none';
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && disabledClasses,
    !disabled && 'hover:scale-105 active:scale-95',
    className
  );

  const content = (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -top-1 -left-1 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        {icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
        {children}
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;