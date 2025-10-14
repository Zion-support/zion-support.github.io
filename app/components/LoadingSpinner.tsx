import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-purple-600',
    secondary: 'text-cyan-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        <Loader2 
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
          style={{
            animation: 'spin 1s linear infinite',
            willChange: 'transform'
          }}
        />
      </div>
      {text && (
        <p className={`mt-3 text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Loading page"
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;