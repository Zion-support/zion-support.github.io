<<<<<<< HEAD
import React from 'react;
import { Loader2 } from 'lucide-react;

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg;
  text?: string;'  className?: string}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md', text,'  className = ;
}) => {'  const sizeClasses = {'    sm: 'w-4 h-4',;
    md: 'w-8 h-8',;
    md: '    lg: 'w-12 h-12'}
  return (;
    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}"    </div>)}
export default LoadingSpinner;
=======
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default LoadingSpinner;
>>>>>>> pr-12866
