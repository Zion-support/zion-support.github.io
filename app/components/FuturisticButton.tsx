<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

// import React from 'react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
<<<<<<< HEAD
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
=======
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

<<<<<<< HEAD
// import React from 'react';

=======
const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  if (href) {
    return (
      <Link
        to={href}
        className={`${classes} hover:scale-105`}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={`${classes} hover:scale-105`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
