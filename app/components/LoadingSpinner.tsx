<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Zap } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  fullScreen?: boolean
}

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    <div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">
      )}
  className = '',
=======
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  className = ''
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
=======
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
<<<<<<< HEAD
      <Loader2 className={`${sizeClasses[size]} text-purple-600 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
=======
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-cyan-500/20 rounded-full animate-spin`}></div>
        {/* Inner ring */}
        <div className={`${sizeClasses[size]} border-4 border-transparent border-t-cyan-400 rounded-full animate-spin absolute top-0 left-0`}></div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className={`${size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-3 w-3' : size === 'lg' ? 'h-4 w-4' : 'h-6 w-6'} text-cyan-400 animate-pulse`} />
        </div>
      </div>
      
      {text && (
        <p className={`text-gray-300 ${textSizeClasses[size]} font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}>
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
