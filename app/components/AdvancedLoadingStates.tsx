import React from 'react';

interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse' | 'wave';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  fullScreen?: boolean;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  type = 'spinner',
  size = 'md',
  message = 'Loading...',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const containerClasses = fullScreen
    ? 'min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    : 'flex items-center justify-center p-8';

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin`}></div>
  );

  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded h-4 w-48 mb-2"></div>
      <div className="bg-gray-300 rounded h-4 w-32"></div>
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}></div>
  );

  const renderWave = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1 bg-blue-600 rounded-full animate-pulse"
          style={{ 
            height: '20px',
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        ></div>
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'skeleton':
        return renderSkeleton();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'wave':
        return renderWave();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {renderLoader()}
        {message && (
          <p className="mt-4 text-gray-600 dark:text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingStates;