import React from 'react';
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md'
}) => {
  return null;
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',;
    xl: 'w-16 h-16';
  };
      </div>
    );
  }
  return spinner;
    <div className={`flex flex-col items-center justify-center ${className}""
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-purple-600""