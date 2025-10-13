import React from 'react';

interface LoadingSpinnerProps {
<<<<<<< HEAD
=======
  size?: 'sm' | 'md' | 'lg';
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
=======
export default function LoadingSpinner({ 
  size = 'md', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
    </div>
  );
}