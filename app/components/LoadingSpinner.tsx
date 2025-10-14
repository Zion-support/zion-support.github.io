<<<<<<< HEAD
import React from 'react';
import { Loader2 } from 'lucide-react';
=======
'use client';
import React from 'react';
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
      {text && (
        <p className="text-gray-300 text-sm animate-pulse">{text}</p>
=======
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

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`}
          style={{
            borderTopColor: '#00ffff',
            animationDuration: '1s',
          }}
        />
        
        {/* Inner ring */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} border-2 border-transparent rounded-full animate-spin`}
          style={{
            borderTopColor: '#8b5cf6',
            animationDuration: '0.5s',
            animationDirection: 'reverse',
          }}
        />
      </div>
      
      {text && (
        <p className={`mt-4 text-gray-600 ${textSizeClasses[size]} font-medium`}>
          {text}
        </p>
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
      )}
    </div>
  );
};

export default LoadingSpinner;