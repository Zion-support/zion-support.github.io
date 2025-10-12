import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500',
    secondary: 'bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 focus:ring-cyan-500'
  };

  const neonEffect = 'shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40';
  const glowEffect = 'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-purple-600 before:to-blue-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-sm';

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${glowEffect} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default NeonButton;