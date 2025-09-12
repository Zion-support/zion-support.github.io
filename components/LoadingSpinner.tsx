import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg
          className="w-full h-full text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
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
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
      
      {/* Accessibility: Screen reader only text */}
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
};

// Skeleton loading component for content
export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`} />
);

// Page loading component
export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <LoadingSpinner size="lg" text="Loading Zion Tech Group..." />
      <div className="mt-8 text-gray-400">
        <p className="text-lg">Pioneering the future of technology...</p>
      </div>
    </div>
  </div>
);

// Inline loading component
export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size="sm" />
    <span className="text-sm text-gray-400">{text}</span>
  </div>
);

// Button loading state
export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size="sm" />
    <span className="text-sm">Processing...</span>
  </div>
);

export default LoadingSpinner;