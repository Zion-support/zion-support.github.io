import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading...' 
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="text-left">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg className="text-left" viewBox="0 0 24 24">
          <circle
            className="text-left"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="text-left"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {message && (
        <p className="text-left">{message}</p>
      )}
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="text-left">
      <div className="text-left">
        <LoadingSpinner size="lg" />
        <p className="text-left">Loading...</p>
      </div>
    </div>
  );
};

PageLoader.displayName = 'PageLoader';

export default PageLoader;