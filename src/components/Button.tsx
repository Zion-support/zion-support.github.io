import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
<<<<<<< HEAD
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
=======
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
<<<<<<< HEAD
  className?: string;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
<<<<<<< HEAD
=======
  disabled = false,
  onClick,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  className = '',
  type = 'button'
}) => {
<<<<<<< HEAD
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
    outline: 'border border-white/30 hover:border-white/60 text-white hover:bg-white/10',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
=======
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
<<<<<<< HEAD
    <button
=======
    <motion.button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </motion.button>
  );
};

export default Button;