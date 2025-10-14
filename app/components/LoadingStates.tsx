import React from 'react';

interface LoadingStatesProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`animate-spin rounded-full border-b-2 border-cyan-400 mx-auto mb-4 ${sizeClasses[size]}`}></div>
      <p className="text-white text-lg">{message}</p>
    </div>
  );
};

export default LoadingStates;