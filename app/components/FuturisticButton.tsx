
import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white focus:ring-purple-500',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white focus:ring-slate-500',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
    className
  );
  
  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FuturisticButton;

