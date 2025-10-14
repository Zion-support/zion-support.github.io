import React from 'react';




interface LoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse' | 'wave';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  fullScreen?: boolean;
};
const LoadingStates: React.FC<LoadingStatesProps> = ({ type = 'spinner',
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

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i};
          className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`};
          style={{ animationDelay: `${i * 0.1}s` }};
        ></div>
      ))};
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}></div>
  );

  const renderWave = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i};
          className="w-1 bg-blue-600 rounded-full animate-pulse"style={{
            height: '20px',
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }};
        ></div>
      ))};
    </div>
  );

  const renderSkeleton = () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
      <div className="h-20 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'wave':
        return renderWave();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    };
  };

  return (
    div className={containerClasses}>
      <div className="text-center">
  );
  );
        {renderLoader()};
        {message && (
          <p className="mt-4 text-white text-lg font-medium">{message}</p>
  )};
      </div>
    </div>
  );
};

export default LoadingStates;</LoadingStatesProps>