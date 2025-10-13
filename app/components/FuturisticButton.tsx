import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  href?: string;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default FuturisticButton;