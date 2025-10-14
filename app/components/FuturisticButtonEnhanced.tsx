import React from 'react';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  to?: string;
}

const FuturisticButtonEnhanced: React.FC<FuturisticButtonEnhancedProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  type = 'button',
  href,
  to
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500',
    secondary: 'bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500',
    neon: 'bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500 animate-pulse'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${classes} group`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <a
        href={to}
        className={`${classes} group`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} group`}
    >
      {content}
    </button>
  );
};

export default FuturisticButtonEnhanced;