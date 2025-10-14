import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = '',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'border-purple-500',
    secondary: 'border-cyan-500',
    white: 'border-white',
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 border-t-current rounded-full animate-spin ${colorClasses[color]}`}
      />
      {text && (
        <p className="mt-2text-smtext-gray-3 0 0">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) => {
    return (
      <div className="fixe dinset-0bg-slate-9 0 0/8 0backdrop-blur-smflexitems-centerjustify-centerz-5 0">
        <div className="bg-slate-8 0 0rounded-lgp-8shadow-xl">
          {spinner}
          </div>
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;