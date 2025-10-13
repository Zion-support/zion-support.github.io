import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105",
    outline: "border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10",
    neon: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/75 hover:scale-105 neon-glow"
  };

  const shimmerEffect = (
    <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  );

  const buttonContent = (
    <>
      {shimmerEffect}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
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
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;