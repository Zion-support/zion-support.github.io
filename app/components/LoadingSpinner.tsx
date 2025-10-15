import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'lg', 
  className = '',
  text,
  variant = 'default',
  fullScreen = true
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const containerClasses = fullScreen 
    ? "flex items-center justify-center min-h-screen" 
    : "flex items-center justify-center";

  if (variant === 'futuristic') {
    return (
      <div className={`${containerClasses} ${className}`} role="status" aria-live="polite">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={`${sizeClasses[size]} animate-spin`}>
              <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin">
                <div className="w-full h-full rounded-full bg-slate-900 m-0.5"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          {text && (
            <p className={`mt-4 text-cyan-400 font-medium ${textSizeClasses[size]} animate-pulse`}>
              {text}
            </p>
          )}
        </div>
        <span className="sr-only">Loading content, please wait...</span>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`${containerClasses} ${className}`} role="status" aria-live="polite">
        <div className="flex flex-col items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          {text && (
            <span className={`mt-3 text-gray-600 ${textSizeClasses[size]}`}>{text}</span>
          )}
        </div>
        <span className="sr-only">Loading content, please wait...</span>
      </div>
    );
  }

  return (
    <div className={`${containerClasses} ${className}`} role="status" aria-live="polite">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} aria-hidden="true"></div>
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className={`${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} border-2 border-transparent border-t-purple-600 rounded-full animate-spin`}></div>
          </div>
        </div>
        {text && (
          <p className={`mt-4 text-gray-600 font-medium ${textSizeClasses[size]}`}>
            {text}
          </p>
        )}
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};

export default LoadingSpinner;
