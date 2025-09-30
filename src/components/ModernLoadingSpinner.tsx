import React from 'react';

interface ModernLoadingSpinnerProps {
  progress?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'dots';
}

export const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({
  progress = 0,
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className={`${sizeClasses[size]} border-2 border-blue-600 border-t-transparent rounded-full animate-spin`} />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-300 rounded-full`} />
        
        {/* Progress ring */}
        <div
          className={`${sizeClasses[size]} border-4 border-blue-600 border-t-transparent rounded-full absolute top-0 left-0 animate-spin`}
          style={{
            background: `conic-gradient(from 0deg, #3b82f6 0%, #3b82f6 ${progress}%, transparent ${progress}%, transparent 100%)`,
            mask: 'radial-gradient(circle, transparent 50%, black 50%)',
            WebkitMask: 'radial-gradient(circle, transparent 50%, black 50%)'
          }}
        />
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-blue-600 font-semibold text-sm">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-4 text-white text-lg font-medium">
        Loading Zion Tech Group...
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Loading dots */}
      <div className="flex space-x-1 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};