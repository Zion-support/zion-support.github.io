'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps>= ({
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
<<<<<<< HEAD
</LoadingSpinnerProps>
  return (</LoadingSpinnerProps>
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}></div>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} >{text && (<p className="text-gray-300 text-sm animate-pulse">{text}</p>
=======

  return(<div className={`flex flex-col items-center justify-center gap-3 ${className}`}>)
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />)
      {text && ()
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      )}
    </div>
  );
};

export default LoadingSpinner;