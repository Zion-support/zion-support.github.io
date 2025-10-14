import React from 'react';

interface Loading Spinner Props {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  full Screen?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'white'
  }

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  full Screen = false,
  className = '',
  color = 'primary'
}) => {
  const size Classes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const color Classes = {
    primary: 'border-purple-500',
    secondary: 'border-cyan-500',
    white: 'border-white',
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${size Classes[size]} border-2 border-gray-300 border-t-2 border-t-current rounded-full animate-spin ${color Classes[color]}`}
      />
      {text && (
        <p className="mt-2 text-smtext-gray-300">
          {text}
        </p>
      )}
    </div>
  );

  if (full Screen) {
    return (
      <div className="fixedinset-0 bg-slate-900/80backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lgp-8 shadow-xl">
          {spinner}
        </div>
      </div>
    )
  }

  return spinner
  };

export default LoadingSpinner;