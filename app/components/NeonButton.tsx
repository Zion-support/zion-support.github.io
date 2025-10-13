import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:shadow-2xl',
    secondary: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-2xl',
    accent: 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:shadow-2xl'
  };

  const neonEffect = 'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-purple-600 before:to-cyan-600 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-75';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;

  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
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
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default NeonButton;