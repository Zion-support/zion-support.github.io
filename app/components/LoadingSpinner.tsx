'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
<<<<<<< HEAD
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
=======
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
>>>>>>> f80dbd4bfb26cbb4c2a8054d396efe4c53526fb4
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-purple-500`} />
      {text && (
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-300">
          {text}
        </p>
=======
        <p className="mt-2 text-sm text-gray-300 animate-pulse">{text}</p>
>>>>>>> f80dbd4bfb26cbb4c2a8054d396efe4c53526fb4
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;