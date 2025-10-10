import React, { memo } from 'react';

interface ModernLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  text?: string;
  className?: string;
}

const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = memo(({
  size = 'md',
  color = 'primary',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} rounded-full border-2 border-gray-300/20`}></div>
        
        {/* Spinning ring */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin`}></div>
        
        {/* Inner pulsing dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse`}></div>
      </div>
      
      {text && (
        <div className="text-center">
          <p className="text-gray-300 text-sm font-medium">{text}</p>
          <div className="flex space-x-1 mt-2 justify-center">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
});

ModernLoadingSpinner.displayName = 'ModernLoadingSpinner';

export default ModernLoadingSpinner;