

'use client';

import React from 'react';
'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;

const LoadingSpinner: React.FC<LoadingSpinnerProps /> = ({ 
  const size = 'md', 
  color = 'primary', 
  text 
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white'
  };
  return (

      {text && (
        <p className="text-gray-400text-smanimate-pulse">{text}</p>
      )}
  );
};

export default LoadingSpinner;

