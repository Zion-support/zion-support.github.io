<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  text 
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      </div>
=======
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-purple-600 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
    </div>
  );
};

export default LoadingSpinner;
<<<<<<< HEAD
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
