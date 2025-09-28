import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-zion-cyan animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-zion-slate-light animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-zion-slate-dark/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-zion-slate-800 rounded-lg p-8 border border-zion-slate-700 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;