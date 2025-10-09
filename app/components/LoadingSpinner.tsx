import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
<<<<<<< HEAD
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
=======
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
<<<<<<< HEAD
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin ${sizeClasses[size]} text-blue-600`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
=======
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-300 animate-pulse">
          {text}
        </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;