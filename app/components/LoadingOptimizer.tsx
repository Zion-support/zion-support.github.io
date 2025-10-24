'use client';

import React from 'react';

interface LoadingOptimizerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export default function LoadingOptimizer({ 
  size = 'md', 
  text = 'Loading...',
  className = '' 
}: LoadingOptimizerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4`}></div>
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );
}