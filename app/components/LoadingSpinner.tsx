import React from 'react';

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
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-purple-600',
    secondary: 'text-cyan-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
          style={{
            animation: 'spin 1s linear infinite'
          }}
        >
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        
        {/* Inner pulse */}
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          <div className="w-full h-full rounded-full bg-current opacity-20"></div>
        </div>
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
      <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;