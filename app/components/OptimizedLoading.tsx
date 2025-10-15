import React from 'react';
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`optimized-loading-container flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="loading-content text-center">
        <div className="spinner mb-4">
          <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
        </div>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default OptimizedLoading;
