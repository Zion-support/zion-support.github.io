import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-slate-500/25 hover:scale-105',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
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