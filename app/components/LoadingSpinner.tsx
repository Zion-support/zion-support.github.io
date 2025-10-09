'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
<<<<<<< HEAD
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-400">{text}</p>
=======
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      {text && (
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
      )}
    </div>
  );
};

export default LoadingSpinner;