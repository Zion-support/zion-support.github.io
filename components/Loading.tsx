import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-slate-300/20 border-t-blue-600`}></div>
        <div className={`absolute inset-0 ${sizeClasses[size]} animate-ping rounded-full border-4 border-blue-500/20`}></div>
      </div>
      <p className="mt-4 text-slate-400 text-center font-medium">{message}</p>
    </div>
  );
}
export default Loading;