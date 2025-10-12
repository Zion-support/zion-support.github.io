import React from 'react';

interface OptimizedLoadingProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  children,
  className = '',
  size = 'md',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`optimized-loading ${className}`}>
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <div className="relative mb-4">
          <div className={`${sizeClasses[size]} border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin`}></div>
          <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className={`text-white font-semibold ${textSizeClasses[size]} mb-2`}>{text}</p>
        <p className="text-gray-300 text-sm">Please wait while we optimize your experience</p>
      </div>
      {children}
    </div>
  );
};

export default OptimizedLoading;