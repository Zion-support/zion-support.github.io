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
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"></div>
        
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-transparent border-t-blue-500 animate-spin`}></div>
        
        {/* Inner pulsing dot */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"></div>
        </div>
      </div>
      
      {/* Loading text */}
      {text && (
        <p className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          {text}
        </p>
      )}
      
      {/* Loading dots animation */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"></div>
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"></div>
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"></div>
      </div>
    </div>
  );
};

// Full page loader component
export const PageLoader: React.FC = () => (
  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
    <LoadingSpinner size="xl" text="Loading page..." />
  </div>
);

// Inline loader for smaller components
export const InlineLoader: React.FC = () => (
  <LoadingSpinner size="sm" text="Loading..." className="p-4" />
);

// Button loader for form submissions
export const ButtonLoader: React.FC = () => (
  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
    <LoadingSpinner size="sm" />
    <span>Processing...</span>
  </div>
);

export default LoadingSpinner;
