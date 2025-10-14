import React from 'react';

interface EnhancedLoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = "Loading...",
  size = 'md',
  className = ""
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin`}></div>
      <p className="text-gray-300 text-sm">{message}</p>
    </div>
  );
};

export default EnhancedLoading;