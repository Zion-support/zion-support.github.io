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
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-live="polite"></div>"
      <div className={`animate-spin rounded-full border-2 border-cyan-400 border-t-transparent ${sizeClasses[size]}`}></div>
      {text && (
        <p className="text-cyan-400 text-sm mt-2 animate-pulse">{text}</p>"
      )}
    </div>
  );
};

export default LoadingSpinner;