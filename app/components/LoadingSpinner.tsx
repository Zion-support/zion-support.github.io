import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
<<<<<<< HEAD
=======
  color?: 'primary' | 'secondary' | 'white' | 'gray';
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  text?: string;
  fullScreen?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
<<<<<<< HEAD
<<<<<<< HEAD
=======
  color = 'primary',
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  text,
  fullScreen = false,
  className = ''
=======
  text = 'Loading...',
  fullScreen = false,
  className = '',
  color = 'primary'
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
<<<<<<< HEAD
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Loader2 className={`animate-spin text-blue-600 ${sizeClasses[size]}`} />
        {text && (
          <p className="text-sm text-gray-600">{text}</p>
        )}
      </div>
=======
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-purple-600',
    secondary: 'text-cyan-600',
<<<<<<< HEAD
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
          style={{
            animation: 'spin 1s linear infinite',
            willChange: 'transform'
          }}
        >
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
      </div>
      
      {text && (
        <p className={`mt-3 text-sm ${colorClasses[color]} animate-pulse`}>
=======
    white: 'text-white'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
          {text}
        </p>
      )}
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
    </div>
  );

  if (fullScreen) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
=======
      <div 
        className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Loading page"
      >
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
      <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-50">
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
        {spinner}
      </div>
    );
  }

  return spinner;
};

<<<<<<< HEAD
export default LoadingSpinner;
=======
export default LoadingSpinner;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
