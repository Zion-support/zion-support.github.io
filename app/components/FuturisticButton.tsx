import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500',
    outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500',
    ghost: 'text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          disabled={disabled}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </a>
      );
    } else {
      return (
        <Link
          to={href}
          className={classes}
          onClick={onClick}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default FuturisticButton;