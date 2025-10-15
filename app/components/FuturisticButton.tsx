import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40';
      case 'outline':
        return 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/25';
      case 'ghost':
        return 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm';
      default:
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300
    transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-cyan-400/50
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    group overflow-hidden
  `;

  const buttonClasses = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`;

  // Neon glow effect for primary and secondary variants
  const glowEffect = (variant === 'primary' || variant === 'secondary') && (
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
  );

  const content = (
    <>
      {glowEffect}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;