import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FuturisticButtonProps {
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  to,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {icon && <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>}
        {children}
        {!icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
      >
        {icon && <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>}
        {children}
        {!icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {icon && <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>}
      {children}
      {!icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export default FuturisticButton;