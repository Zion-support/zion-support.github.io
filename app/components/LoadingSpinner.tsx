import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-cyan-500',
    secondary: 'border-purple-500',
    white: 'border-white'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]}/30 border-t-${colorClasses[color].split('-')[1]}-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="mt-4 text-gray-300 text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
