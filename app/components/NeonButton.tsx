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
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500",
    secondary: "bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white focus:ring-cyan-400",
    accent: "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 focus:ring-purple-500"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );
  
  if (href) {
    return (
      <Link
        to={href}
        className={`${classes} group ${disabled ? 'pointer-events-none' : ''}`}
      >
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} group ${disabled ? 'pointer-events-none' : ''}`}
    >
      {buttonContent}
    </button>
  );
};

export default NeonButton;