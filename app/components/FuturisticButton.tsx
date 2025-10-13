import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const FuturisticButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className,
  icon,
  disabled = false
}: FuturisticButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25",
    secondary: "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-cyan-500",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;