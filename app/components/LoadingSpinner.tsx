import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
=======
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
    </div>
  );
}