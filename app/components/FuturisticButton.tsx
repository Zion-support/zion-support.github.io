import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'holographic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
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
  disabled = false
}) => {
  const getVariantClasses = () => {
    const variants = {
      primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25',
      secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25',
      outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/25',
      ghost: 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm',
      neon: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 neon-glow-enhanced hover:neon-glow-enhanced',
      holographic: 'holographic-enhanced text-white hover:scale-105'
    };
    return variants[variant];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    };
    return sizes[size];
  };

  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    overflow-hidden group
  `;

  const buttonClasses = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`;

  // Add special effects for certain variants
  const getSpecialEffects = () => {
    if (variant === 'neon') {
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
        </>
      );
    }
    
    if (variant === 'holographic') {
      return (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      );
    }

    return (
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
    );
  };

  const buttonContent = (
    <>
      {getSpecialEffects()}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;