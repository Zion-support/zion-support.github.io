import React from 'react';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'indigo' | 'blue' | 'green' | 'purple' | 'gray' | 'white';
  text?: string;
  className?: string;
  fullScreen?: boolean;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'indigo',
  text,
  className = '',
  fullScreen = false,
  variant = 'spinner',
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600',
    white: 'text-white',
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 ${colorClasses[color]} animate-pulse`}
                style={{ 
                  height: '100%',
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <div
            className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-4 border-t-transparent border-current`}
            aria-hidden="true"
          />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-live="polite">
      {renderSpinner()}
      {text && (
        <p className={`mt-3 text-sm ${color === 'white' ? 'text-white' : 'text-gray-600'} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;