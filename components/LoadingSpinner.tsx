import React from 'react';

interface LoadingSpinnerProps {
<<<<<<< HEAD
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
=======
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
>>>>>>> origin/main
  };

  const colorClasses = {
    blue: 'text-blue-600',
    white: 'text-white',
<<<<<<< HEAD
    gray: 'text-gray-600'
=======
    gray: 'text-gray-600',
    slate: 'text-slate-600'
>>>>>>> origin/main
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`} />
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
import React from 'react;
import { Loader2 } from 'lucide-react;
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg;
  text?: string;'  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md', text,'  className = ; }) => {'  const sizeClasses = {'    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    md: '    lg: 'w-12 h-12', };
  return (;
    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}"    </div>);
};
export default LoadingSpinner;
>>>>>>> origin/main
