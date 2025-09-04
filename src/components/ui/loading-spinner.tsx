import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'white';
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text, 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-cyan-500',
    primary: 'text-blue-600',
    secondary: 'text-purple-600',
    white: 'text-white'
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-current border-t-transparent ${sizeClasses[size]} ${variantClasses[variant]}`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <p className="text-gray-500 font-medium text-sm">
          {text}
        </p>
      )}
    </div>
  );
}

export default LoadingSpinner;