import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {/* Animated spinner */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-transparent border-t-blue-500 animate-spin`}></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute inset-2 rounded-full bg-blue-500 opacity-75 animate-pulse"></div>
      </div>
      
      {/* Loading text */}
      {text && (
        <p className="mt-4 text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
      
      {/* Loading dots animation */}
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

// Full page loader component
export const PageLoader: React.FC = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner size="xl" text="Loading page..." />
  </div>
));

// Inline loader for smaller components
export const InlineLoader: React.FC = React.memo(() => (
  <LoadingSpinner size="sm" text="Loading..." className="p-4" />
));

// Button loader for form submissions
export const ButtonLoader: React.FC = React.memo(() => (
  <div className="flex items-center space-x-2">
    <LoadingSpinner size="sm" />
    <span>Processing...</span>
  </div>
));

export default LoadingSpinner;