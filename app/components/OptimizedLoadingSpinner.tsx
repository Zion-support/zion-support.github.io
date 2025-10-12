import React from 'react';

interface OptimizedLoadingSpinnerProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'blue' | 'green';
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  children,
  className = '',
  size = 'md',
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    cyan: 'border-cyan-500',
    purple: 'border-purple-500',
    blue: 'border-blue-500',
    green: 'border-green-500'
  };

  return (
    <div className={`optimized-loading-spinner ${className}`}>
      <div className="flex items-center justify-center">
        <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full animate-spin ${colorClasses[color]}`}></div>
      </div>
      {children}
    </div>
  );
};

export default OptimizedLoadingSpinner;