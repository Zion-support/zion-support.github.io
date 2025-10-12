import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green';
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`} />
      {text && (
        <div className="text-gray-600 font-medium">{text}</div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default EnhancedLoading;