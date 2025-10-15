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
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500/50',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500/50',
    accent: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 focus:ring-green-500/50'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  const neonGlow = `
    before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-20
    after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:opacity-0 after:transition-opacity after:duration-300 after:blur-sm
    hover:after:opacity-30
  `;

  const content = (
    <span className="relative z-10 flex items-center">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`${buttonClasses} ${neonGlow}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${buttonClasses} ${neonGlow}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${buttonClasses} ${neonGlow}`} disabled={disabled}>
      {content}
    </button>
  );
};

export default NeonButton;