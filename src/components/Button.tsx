import React from 'react';
<<<<<<< HEAD
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  className = '',
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
    outline: 'border border-white/30 hover:border-white/60 text-white hover:bg-white/10',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
<<<<<<< HEAD
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </motion.button>
  );
};

export default Button;