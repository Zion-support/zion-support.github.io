import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  variant?: 'default' | 'dots' | 'pulse' | 'bars';
  color?: 'blue' | 'gray' | 'white' | 'green' | 'red';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text, 
  className = '',
  variant = 'default',
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-${color === 'blue' ? 'blue' : color === 'green' ? 'green' : color === 'red' ? 'red' : 'gray'}-600 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} rounded-full bg-${color === 'blue' ? 'blue' : color === 'green' ? 'green' : color === 'red' ? 'red' : 'gray'}-600 animate-pulse`}></div>
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 bg-${color === 'blue' ? 'blue' : color === 'green' ? 'green' : color === 'red' ? 'red' : 'gray'}-600 animate-pulse`}
                style={{ 
                  height: `${12 + i * 4}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-${color === 'blue' ? 'blue' : color === 'green' ? 'green' : color === 'red' ? 'red' : 'gray'}-600`}></div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label={text || 'Loading'}>
      {renderSpinner()}
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;