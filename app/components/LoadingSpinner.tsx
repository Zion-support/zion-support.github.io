<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
<<<<<<< HEAD
  fullScreen?: boolean;
=======
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}
<<<<<<< HEAD
  )
const Loading Spinner: React.FC<Loading Spinner Props> = ({
  size = 'md'
  text = 'Loading...'
  full Screen = false
  class Name = ''
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-purple-500',
    secondary: 'border-cyan-500',
    white: 'border-white'
  };

  const spinner = (
    <div class Name={`flex flex-col items-center justify-center ${class Name}`}>
      <div
        class Name={`${size Classes} border-2 border-gray-300 border-t-2 border-t-current rounded-full animate-spin ${color Classes}`}
  )
      />
      {text && (
        <p className="mt-2text-smtext-gray-300">
          {text}
        </p>
      )}
  )
=======

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="mt-4 text-gray-300 text-sm font-medium">{text}</p>
      )}
>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
    </div>
  )
  if (full Screen) {
    return (
      <div className="fixe dinset-0bg-slate-900/8 0backdrop-blur-smflexitems-centerjustify-centerz-50">
        <div className="bg-slate-800rounded-lgp-8shadow-xl">{spinner}
          </div>
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;