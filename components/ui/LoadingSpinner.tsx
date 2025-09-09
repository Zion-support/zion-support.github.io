import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'pulse' | 'dots' | 'quantum';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const variants = {
    default: (
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`} />
    ),
    pulse: (
      <div className={`animate-pulse rounded-full bg-blue-600 ${sizeClasses[size]}`} />
    ),
    dots: (
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    ),
    quantum: (
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 border-b-purple-500 border-l-pink-500`} />
        <div className={`absolute inset-0 ${sizeClasses[size]} animate-ping rounded-full border-2 border-cyan-400 opacity-20`} />
      </div>
    )
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {variants[variant]}
    </div>
  );
}