import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'indigo' | 'blue' | 'green' | 'purple';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'indigo',
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-live="polite">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
        style={{
          border: '3px solid rgba(0, 0, 0, 0.1)',
          borderTop: '3px solid currentColor',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      {text && (
        <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;