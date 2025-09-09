import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className = '', 
  text = 'Loading...' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} rounded-full border-2 border-zion-slate-light/20`}></div>
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} rounded-full border-2 border-transparent border-t-zion-cyan border-r-zion-purple animate-spin absolute top-0 left-0`}></div>
        {/* Inner pulse */}
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple opacity-20 animate-pulse absolute top-0 left-0`}></div>
      </div>
      {text && (
        <p className="mt-2 text-sm text-zion-slate-light animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}