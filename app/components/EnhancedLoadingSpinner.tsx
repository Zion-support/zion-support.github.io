<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
=======
import React from 'react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;