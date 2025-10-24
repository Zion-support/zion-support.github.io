<<<<<<< HEAD
import React from 'react';
interface LoadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
  return (
    <div className={`loadingspinner-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
'use client'
import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
=======
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  )
}

export default LoadingSpinner
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
