import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
=======
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  className?: string;
  disabled?: boolean;
}

<<<<<<< HEAD
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
=======
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  className = '',
  disabled = false 
}) => {
<<<<<<< HEAD
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
=======
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
    outline: 'border border-white/30 hover:border-white/60 text-white hover:bg-white/10',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
<<<<<<< HEAD
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
=======
      type={type}
      className={classes}
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;