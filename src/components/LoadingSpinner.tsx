import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20"></div>
        
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full bg-cyan-400/10 animate-pulse"></div>
      </div>
      
      {text && (
        <p className="mt-4 text-cyan-400 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;