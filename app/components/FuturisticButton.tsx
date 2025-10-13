import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:from-cyan-600 hover:to-purple-700 hover:shadow-cyan-500/25 focus:ring-cyan-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:from-purple-600 hover:to-pink-700 hover:shadow-purple-500/25 focus:ring-purple-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-cyan-500'
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <>
      {/* Animated background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative flex items-center">
        {icon && (
          <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        {children}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={`${buttonClasses} group`}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses} group`}
    >
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;