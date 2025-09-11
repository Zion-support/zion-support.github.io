import React from 'react';

type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  showText?: boolean;
};

export function LoadingSpinner({
  size = 'md',
  className = '',
  text = 'Loading...',
  showText = false
}: LoadingSpinnerProps) {
  const sizeClasses: Record<string, string> = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-t-transparent border-white rounded-full animate-spin`}
        role="status"
        aria-label={text}
      />
      {showText && <p className="mt-2 text-sm text-gray-300">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;

