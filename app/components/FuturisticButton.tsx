import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-purple-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 focus:ring-slate-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500',
    ghost: 'text-purple-400 hover:bg-purple-500/20 hover:text-white focus:ring-purple-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
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
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;