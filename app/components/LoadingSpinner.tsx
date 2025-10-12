import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
<<<<<<< HEAD
    lg: 'w-8 h-8'
=======
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
>>>>>>> cursor/analyze-improve-and-deploy-application-41ac
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
<<<<<<< HEAD
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
=======
      <Loader2 className={`${sizeClasses[size]} text-blue-500 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-300 animate-pulse">
>>>>>>> cursor/analyze-improve-and-deploy-application-41ac
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;