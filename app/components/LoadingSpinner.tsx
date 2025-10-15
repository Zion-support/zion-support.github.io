import React from 'react';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'cyan';
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
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    cyan: 'text-cyan-400'
  };

  const spinnerClasses = `
    animate-spin rounded-full border-2 border-gray-300 border-t-transparent
    ${sizeClasses[size]}
    ${colorClasses[color]}
  `;

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-gray-50 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="text-center">
        <div className={spinnerClasses}></div>
        {text && (
          <p className={`mt-4 text-sm ${colorClasses[color]} animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;